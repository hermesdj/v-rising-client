export default {
    players(state) {
        return state.players;
    },
    connectedPlayers(state) {
        return state.players.filter(p => p.isConnected);
    },
    playersBySteamId(state) {
        return (steamID) => state.players.filter(p => p.steamID === steamID);
    },
    myPlayers(state, getters, rootState, rootGetters) {
        return getters.playersBySteamId(rootGetters['auth/user'].id);
    },
    playerByUserIndex(state) {
        return (userIndex) => state.players.find(p => p.userIndex === userIndex);
    },
}
