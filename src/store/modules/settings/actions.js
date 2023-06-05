import {http} from "@/plugins/http";

export default {
    // HTTP
    async loadServerSettings({commit}) {
        const {data} = await http.get('/settings', {withCredentials: true});
        commit('saveHostSettings', data.hostSettings);
        commit('saveGameSettings', data.gameSettings);
        return data;
    },
    async loadUsers({commit}) {
        const {data} = await http.get('/users', {withCredentials: true});
        commit('saveAdminList', data.adminList);
        commit('saveBanList', data.banList);
    },
    async updateHostSettings({commit}, hostSettings) {
        const {data} = await http.post('/settings/host', hostSettings, {withCredentials: true});
        commit('saveHostSettings', data);
    },
    async updateGameSettings({commit}, gameSettings) {
        const {data} = await http.post('/settings/game', gameSettings, {withCredentials: true});
        commit('saveGameSettings', data);
    },
    async updateUsersSettings({commit}, {adminList, banList}) {
        const {data} = await http.post('/users', {adminList, banList}, {withCredentials: true});
        commit('saveAdminList', data.adminList);
        commit('saveBanList', data.banList);
    },

    // SOCKET
    socket_serverUpdateHostSettings({commit}, info) {
        commit('saveHostSettings', info);
    },
    socket_serverUpdateGameSettings({commit}, info) {
        commit('saveGameSettings', info);
    },
    socket_serverUpdateAdminList({commit}, info) {
        commit('saveAdminList', info);
    },
    socket_serverUpdateBanList({commit}, info) {
        commit('saveBanList', info);
    }
}
