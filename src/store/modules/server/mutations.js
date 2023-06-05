import Vue from "vue";

export default {
    saveServerInfo(state, serverInfo) {
        Vue.set(state, 'info', serverInfo);
    },
}
