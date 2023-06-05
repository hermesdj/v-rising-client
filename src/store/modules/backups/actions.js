import {http} from "@/plugins/http";

export default {
    async loadBackupFileNames({commit}) {
        const {data} = await http.get('/autosave/backups', {withCredentials: true});
        commit('saveBackupList', data.backupFileNames);
    },
}
