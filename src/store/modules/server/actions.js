import {http} from "@/plugins/http";

export default {
    // HTTP
    async loadServerInfo({commit}) {
        const {data} = await http.get('/server/info', {withCredentials: true});
        commit('saveServerInfo', data);
        return data;
    },
    async startServer({commit}) {
        const {data} = await http.post('/server/start', {}, {withCredentials: true});
        commit('saveServerInfo', data);
    },
    async forceStopServer({commit}) {
        const {data} = await http.post('/server/force-stop', {}, {withCredentials: true});
        commit('saveServerInfo', data);
    },

    // SOCKET
    socket_serverInfo({commit}, serverInfo) {
        commit('saveServerInfo', serverInfo);
    },
    socket_serverProcessClosed({commit}, code) {
        commit('saveServerInfo', {
            time: null,
            version: null,
            steamID: null,
            appID: null,
            connectedToSteam: false,
            serverSetupComplete: false,
            loadedSaveGameVersion: null,
            currentGameVersion: null,
            isSaveLoaded: false,
            isSaveVersionIdentical: null,
            pid: null,
            processExitCode: code
        });
    },
    socket_serverStarted({commit}, {serverInfo}) {
        commit('saveServerInfo', serverInfo);
    },
    socket_serverReady({commit}, {serverInfo, hostSettings, gameSettings, adminList, banList}) {
        commit('saveServerInfo', serverInfo);
        commit('settings/saveHostSettings', hostSettings, {root: true});
        commit('settings/saveGameSettings', gameSettings, {root: true});
        commit('settings/saveAdminList', adminList, {root: true});
        commit('settings/saveBanList', banList, {root: true});
    },
    socket_serverStopped({commit}, {serverInfo, hostSettings, gameSettings, adminList, banList}) {
        commit('saveServerInfo', serverInfo);
        commit('settings/saveHostSettings', hostSettings, {root: true});
        commit('settings/saveGameSettings', gameSettings, {root: true});
        commit('settings/saveAdminList', adminList, {root: true});
        commit('settings/saveBanList', banList, {root: true});
    },
}
