import {http} from "@/plugins/http";

// TODO REFAIRE
export default {
    // HTTP
    async getCurrentOperationState({commit}) {
        const {data} = await http.get('/operations/current/status', {
            withCredentials: true
        });
        commit('saveOperationInfo', data);
    },
    async getOperationState({commit}, name) {
        const {data} = await http.get(`/operations/status/${name}`, {
            withCredentials: true
        });
        commit("saveOperationInfo", data);
    },
    async startOperation({commit}, {name, body}) {
        const {data} = await http.post('/operations/start/' + name, body, {
            withCredentials: true
        });
        commit('saveOperationInfo', data);
    },
    async scheduleServerStop({dispatch}, delay) {
        if (delay === null || delay === 0) {
            return;
        }
        return dispatch('startOperation', {name: 'scheduled-stop', body: {delay}});
    },
    async scheduleServerRestart({dispatch}, delay) {
        if (delay === null || delay === 0) {
            return;
        }
        return dispatch('startOperation', {name: 'scheduled-restart', body: {delay}});
    },
    async stopScheduledOperation({commit}) {
        try {
            const {data} = await http.post('/operations/current/stop', {}, {withCredentials: true});
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
    async scheduleRestoreBackup({dispatch}, {delay, backupFileName}) {
        return dispatch('startOperation', {name: 'restore-backup', body: {delay, backupFileName}});
    },

    // SOCKET
    socket_operationInfoUpdated({commit}, operationInfo) {
        commit('saveOperationInfo', operationInfo);
    },
    socket_operationScheduled({commit}, operationInfo) {
        commit('saveOperationInfo', operationInfo);
    },
    socket_operationSuccess({commit}, operationInfo) {
        commit('saveOperationInfo', operationInfo);
    },
    socket_operationError({commit}, {error, operationInfo}) {
        commit('saveOperationInfo', operationInfo);
        commit('saveOperationError', error);
    },
    socket_operationFinished({commit}, operationInfo) {
        commit('saveOperationInfo', operationInfo);
    },
    socket_operationProgress({commit}, operationInfo) {
        commit('saveOperationInfo', operationInfo);
    },
}
