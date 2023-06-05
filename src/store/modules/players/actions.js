import {http} from "@/plugins/http";

export default {
    // HTTP
    async loadPlayerList({commit}) {
        const {data} = await http.get('/players', {withCredentials: true});
        commit('savePlayerList', data);
        return data;
    },
    async updatePlayer({commit}, {player, action}) {
        if (!player.steamID) return;

        const {
            data: {
                result,
                changed
            }
        } = await http.post(`/players/${player.steamID}/${action}`, {}, {withCredentials: true});
        if (changed) {
            if (['set-admin', 'unset-admin'].includes(action)) {
                commit('saveAdminList', result);
            } else {
                commit('saveBanList', result);
            }
        }
    },

    // SOCKETS
    socket_playerConnected({commit}, player) {
        commit('savePlayer', player);
    },
    socket_playerDisconnected({commit}, player) {
        commit('savePlayer', player);
    },
    socket_playerUpdated({commit}, player) {
        commit('savePlayer', player);
    },
}
