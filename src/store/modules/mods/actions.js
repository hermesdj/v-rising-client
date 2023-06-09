import {http} from "@/plugins/http";

export default {
    async loadAvailableMods({commit}) {
        const {data} = await http.get('/mods/available', {withCredentials: true});
        commit('saveAvailableModList', data);
    },
    async loadInstalledMods({commit}) {
        const {data} = await http.get('/mods/installed', {withCredentials: true});
        commit('saveInstalledModList', data);
    },
    async loadAll({commit}){
        const {data} = await http.get('/mods', {withCredentials: true});
        commit('saveAvailableModList', data.available);
        commit('saveInstalledModList', data.installed);
    }
}
