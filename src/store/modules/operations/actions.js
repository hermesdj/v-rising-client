import {http} from "@/plugins/http";

// TODO REFAIRE
export default {
    // HTTP
    async scheduleServerStop({commit}, delay) {
        if (delay === null || delay === 0) {
            return;
        }
        const {data} = await http.post('/server/scheduled-stop', {delay}, {withCredentials: true});
        commit('saveServerInfo', data);
    },
    async scheduleServerRestart({commit}, delay) {
        if (delay === null || delay === 0) {
            return;
        }
        const {data} = await http.post('/server/scheduled-restart', {delay}, {withCredentials: true});
        commit('saveServerInfo', data);
    },
    async stopScheduledOperation({commit}) {
        try {
            const {data} = await http.post('/server/stop-current-operation', {}, {withCredentials: true});
            commit('saveServerInfo', data);
            await this._vm.$bvToast.toast(this._vm.$t('server.operations.stopOperation.success'), {
                title: this._vm.$t('server.operations.stopOperation.success'),
                variant: 'success',
                toaster: 'b-toaster-bottom-center',
                autoHideDelay: 2000
            });
        } catch (err) {
            await this._vm.$bvToast.toast(this._vm.$t('server.operations.stopOperation.success'), {
                title: this._vm.$t('server.operations.stopOperation.error', {error: err}),
                variant: 'danger',
                toaster: 'b-toaster-bottom-center',
                autoHideDelay: 2000
            });
        }
    },
    async scheduleRestoreBackup({commit}, {delay, backupFileName}) {
        const {data} = await http.post('/autosave/schedule-restore-backup', {
            delay,
            backupFileName
        }, {withCredentials: true});
        commit('saveServerInfo', data);
    },

    // SOCKET
    socket_operationStart({commit}, serverInfo) {
        commit('saveServerInfo', serverInfo);
    },
    socket_operationExecute({commit}, serverInfo) {
        commit('saveServerInfo', serverInfo);
    },
    socket_operationDone({commit}, serverInfo) {
        commit('saveServerInfo', serverInfo);
    },
    socket_operationProgress({commit}, serverInfo) {
        commit('saveServerInfo', serverInfo);
    },
    socket_operationError({commit}, error) {
        commit('saveOperationError', error);
    },
}
