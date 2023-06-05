import Vue from "vue";

export default {
    saveBackupList(state, backupList) {
        Vue.set(state, 'backups', backupList);
    }
}
