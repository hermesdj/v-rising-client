import Vue from "vue";

export default {
    savePlayerList(state, players) {
        Vue.set(state, 'players', players);
    },
    savePlayer(state, player) {
        if (state.players.some(p => p.userIndex === player.userIndex)) {
            state.players = state.players.map(p => {
                if (p.userIndex === player.userIndex) {
                    return player;
                } else {
                    return p;
                }
            })
        } else {
            state.players.push(player);
        }
    }
}
