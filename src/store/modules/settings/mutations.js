import Vue from "vue";

export default {
    saveHostSettings(state, {current, lastApplied}) {
        Vue.set(state.hostSettings, 'current', current);
        Vue.set(state.hostSettings, 'lastApplied', lastApplied);
    },
    saveGameSettings(state, {current, lastApplied}) {
        Vue.set(state.gameSettings, 'current', current);
        Vue.set(state.gameSettings, 'lastApplied', lastApplied);
    },
    saveAdminList(state, {current, lastApplied}) {
        Vue.set(state.adminList, 'current', current);
        Vue.set(state.adminList, 'lastApplied', lastApplied);
    },
    saveBanList(state, {current, lastApplied}) {
        Vue.set(state.banList, 'current', current);
        Vue.set(state.banList, 'lastApplied', lastApplied);
    },
}
