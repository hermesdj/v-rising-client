export default {
    availableMods(state) {
        return state.availableMods;
    },
    installedMods(state) {
        return state.installedMods;
    },
    getModByUuid(state) {
        return (uuid) => state.availableMods.find(mod => mod.uuid4 === uuid);
    }
}
