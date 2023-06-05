import Vue from "vue";

export default {
    saveAvailableModList(state, modList) {
        Vue.set(state, 'availableMods', modList);
    },
    saveInstalledModList(state, modList) {
        Vue.set(state, 'installedMods', modList);
    }
}
