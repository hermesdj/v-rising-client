import {i18n} from "@/i18n";

export default {
    serverInfo(state) {
        return state.info;
    },
    isOnline(state) {
        return state.info.isSaveLoaded;
    },
    isLoading(state) {
        return state.info.serverSetupComplete && !state.info.isSaveLoaded;
    },
    isOffline(state) {
        return state.info.pid === null;
    },
    isReady(state, getters) {
        return getters.isOnline && state.info.publicIp && state.info.queryPort
    },
    serverName(state) {
        return state.info.serverName ? state.info.serverName : i18n.t('server.info');
    }
}
