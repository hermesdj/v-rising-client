import {flatten} from "flat";
import {diff} from "deep-diff";

export default {
    hostSettings(state) {
        return state.hostSettings.current;
    },
    gameSettings(state) {
        return state.gameSettings.current;
    },
    hostSettingsDiff(state) {
        if (!state.hostSettings.current || !state.hostSettings.lastApplied) return [];
        const flattenedCurrent = flatten(state.hostSettings.current);
        const flattenedLastApplied = flatten(state.hostSettings.lastApplied);
        const result = diff(flattenedCurrent, flattenedLastApplied);
        return result !== undefined ? result : [];
    },
    gameSettingsDiff(state) {
        if (!state.gameSettings.current || !state.gameSettings.lastApplied) return [];
        const flattenedCurrent = flatten(state.gameSettings.current);
        const flattenedLastApplied = flatten(state.gameSettings.lastApplied);
        const result = diff(flattenedCurrent, flattenedLastApplied);
        return result !== undefined ? result : [];
    },
    adminListDiff(state) {
        if (!state.adminList.current || !state.adminList.lastApplied) return [];
        const result = diff(state.adminList.current, state.adminList.lastApplied);
        return result !== undefined ? result : [];
    },
    banListDiff(state) {
        if (!state.banList.current || !state.banList.lastApplied) return [];
        const result = diff(state.banList.current, state.banList.lastApplied);
        return result !== undefined ? result : [];
    },
    currentAdminList(state) {
        return state.adminList.current || [];
    },
    currentBanList(state) {
        return state.banList.current || [];
    },
}
