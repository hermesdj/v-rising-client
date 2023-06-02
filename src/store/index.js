import Vue from 'vue';
import Vuex from 'vuex';
import {http} from "@/plugins/http";
import {flatten} from "flat";
import {diff} from 'deep-diff';

Vue.use(Vuex);

export const store = new Vuex.Store({
    state: {
        user: {
            id: null,
            username: null,
            isAdmin: false,
            isPlayer: false
        },
        server: {
            logs: [],
            info: {
                serverName: null,
                saveName: null,
                time: null,
                version: null,
                steamID: null,
                appID: null,
                connectedToSteam: false,
                serverSetupComplete: false,
                loadedSaveGameVersion: null,
                currentGameVersion: null,
                isSaveLoaded: false,
                isSaveVersionIdentical: null,
                scheduledOperation: null,
                currentSaveNumber: null,
                publicIp: null,
                gamePort: null,
                queryPort: null
            },
            operationError: null,
            players: [],
            gameSettings: {
                current: null,
                lastApplied: null
            },
            hostSettings: {
                current: null,
                lastApplied: null
            },
            adminList: {
                current: null,
                lastApplied: null
            },
            banList: {
                current: null,
                lastApplied: null
            },
            backups: []
        }
    },
    mutations: {
        saveUser(state, payload) {
            state.user.username = payload.username;
            state.user.id = payload.id;
            state.user.isPlayer = payload.isPlayer;
            state.user.isAdmin = payload.isAdmin;
        },
        saveServerLogLine(state, newLine) {
            state.server.logs.push(newLine);
        },
        saveServerInfo(state, serverInfo) {
            Vue.set(state.server, 'info', serverInfo);
        },
        saveOperationError(state, error) {
            Vue.set(state.server, 'operationError', error);
        },
        clearPreviousOperation(state) {
            Vue.set(state.server, 'operationError', null);
            Vue.set(state.server.info, 'scheduledOperation', null);
        },
        savePlayerList(state, players) {
            Vue.set(state.server, 'players', players);
        },
        saveHostSettings(state, {current, lastApplied}) {
            Vue.set(state.server.hostSettings, 'current', current);
            Vue.set(state.server.hostSettings, 'lastApplied', lastApplied);
        },
        saveGameSettings(state, {current, lastApplied}) {
            Vue.set(state.server.gameSettings, 'current', current);
            Vue.set(state.server.gameSettings, 'lastApplied', lastApplied);
        },
        saveAdminList(state, {current, lastApplied}) {
            Vue.set(state.server.adminList, 'current', current);
            Vue.set(state.server.adminList, 'lastApplied', lastApplied);
        },
        saveBanList(state, {current, lastApplied}) {
            Vue.set(state.server.banList, 'current', current);
            Vue.set(state.server.banList, 'lastApplied', lastApplied);
        },
        saveBackupList(state, backupList) {
            Vue.set(state.server, 'backups', backupList);
        },
        savePlayer(state, player) {
            if (state.server.players.some(p => p.userIndex === player.userIndex)) {
                state.server.players = state.server.players.map(p => {
                    if (p.userIndex === player.userIndex) {
                        return player;
                    } else {
                        return p;
                    }
                })
            } else {
                state.server.players.push(player);
            }
        }
    },
    getters: {
        isLoggedIn(state) {
            return state.user && state.user.username !== null;
        },
        isAdmin(state) {
            return state.user && state.user.isAdmin;
        },
        user(state) {
            return state.user || {username: null, steamID: null};
        },
        serverLogs(state) {
            return state.server.logs;
        },
        players(state) {
            return state.server.players;
        },
        connectedPlayers(state) {
            return state.server.players.filter(p => p.isConnected);
        },
        playersBySteamId(state) {
            return (steamID) => state.server.players.filter(p => p.steamID === steamID);
        },
        myPlayers(state, getters) {
            return getters.playersBySteamId(getters.user.id);
        },
        playerByUserIndex(state) {
            return (userIndex) => state.server.players.find(p => p.userIndex === userIndex);
        },
        serverInfo(state) {
            return state.server.info;
        },
        scheduledOperation(state) {
            return state.server.info.scheduledOperation;
        },
        mappedOperationValues(state, getters) {
            const {scheduledOperation} = getters;
            const options = scheduledOperation && scheduledOperation.options ? scheduledOperation.options : {};
            return {
                ...scheduledOperation,
                ...options,
                username: scheduledOperation && scheduledOperation.user ? scheduledOperation.user.username : 'unknown',
                remainingTimeMinutes: scheduledOperation ? scheduledOperation.remainingTime / 60000 : 0
            }
        },
        operationError(state) {
            return state.server.operationError;
        },
        hostSettings(state) {
            return state.server.hostSettings.current;
        },
        gameSettings(state) {
            return state.server.gameSettings.current;
        },
        hostSettingsDiff(state) {
            if (!state.server.hostSettings.current || !state.server.hostSettings.lastApplied) return [];
            const flattenedCurrent = flatten(state.server.hostSettings.current);
            const flattenedLastApplied = flatten(state.server.hostSettings.lastApplied);
            const result = diff(flattenedCurrent, flattenedLastApplied);
            return result !== undefined ? result : [];
        },
        gameSettingsDiff(state) {
            if (!state.server.gameSettings.current || !state.server.gameSettings.lastApplied) return [];
            const flattenedCurrent = flatten(state.server.gameSettings.current);
            const flattenedLastApplied = flatten(state.server.gameSettings.lastApplied);
            const result = diff(flattenedCurrent, flattenedLastApplied);
            return result !== undefined ? result : [];
        },
        adminListDiff(state) {
            if (!state.server.adminList.current || !state.server.adminList.lastApplied) return [];
            const result = diff(state.server.adminList.current, state.server.adminList.lastApplied);
            return result !== undefined ? result : [];
        },
        banListDiff(state) {
            if (!state.server.banList.current || !state.server.banList.lastApplied) return [];
            const result = diff(state.server.banList.current, state.server.banList.lastApplied);
            return result !== undefined ? result : [];
        },
        gameSettingsDefinition(state) {
            return state.definitions.gameSettingsDefinitions;
        },
        currentAdminList(state) {
            return state.server.adminList.current || [];
        },
        currentBanList(state) {
            return state.server.banList.current || [];
        },
        backupFileNames(state) {
            return state.server.backups.sort();
        }
    },
    actions: {
        async logout({commit}) {
            const {data} = await http.post('/auth/logout', {}, {withCredentials: true});
            if (data.success) {
                commit('saveUser', {username: null});
                this._vm.$socket.client.disconnect();
            }
        },
        async whoami({commit}) {
            const {data} = await http.get('/auth', {withCredentials: true});
            commit('saveUser', data);
            if (data.username) {
                this._vm.$socket.client.connect((err) => console.error('socket connect error', err));
            }
        },

        async loadPlayerList({commit}) {
            const {data} = await http.get('/players', {withCredentials: true});
            commit('savePlayerList', data);
            return data;
        },
        async loadServerInfo({commit}) {
            const {data} = await http.get('/server/info', {withCredentials: true});
            commit('saveServerInfo', data);
            return data;
        },
        async startServer({commit}) {
            const {data} = await http.post('/server/start', {}, {withCredentials: true});
            commit('saveServerInfo', data);
        },
        async forceStopServer({commit}) {
            const {data} = await http.post('/server/force-stop', {}, {withCredentials: true});
            commit('saveServerInfo', data);
        },
        async scheduleServerStop({commit}, delay) {
            if (delay === null || delay === 0) {
                return;
            }
            const {data} = await http.post('/server/scheduled-stop', {delay}, {withCredentials: true});
            commit('saveServerInfo', data);
        },
        async scheduleServerRestart({commit}, delay) {
            if (delay === null || delay === 0) {
                return;
            }
            const {data} = await http.post('/server/scheduled-restart', {delay}, {withCredentials: true});
            commit('saveServerInfo', data);
        },
        async stopScheduledOperation({commit}) {
            try {
                const {data} = await http.post('/server/stop-scheduled-operation', {}, {withCredentials: true});
                commit('saveServerInfo', data);
                await this._vm.$bvToast.toast(this._vm.$t('server.operations.stopOperation.success'), {
                    title: this._vm.$t('server.operations.stopOperation.success'),
                    variant: 'success',
                    toaster: 'b-toaster-bottom-center',
                    autoHideDelay: 2000
                });
            } catch (err) {
                await this._vm.$bvToast.toast(this._vm.$t('server.operations.stopOperation.success'), {
                    title: this._vm.$t('server.operations.stopOperation.error', {error: err}),
                    variant: 'danger',
                    toaster: 'b-toaster-bottom-center',
                    autoHideDelay: 2000
                });
            }
        },
        async updatePlayer({commit}, {player, action}) {
            if (!player.steamID) return;

            const {
                data: {
                    result,
                    changed
                }
            } = await http.post(`/players/${player.steamID}/${action}`, {}, {withCredentials: true});
            if (changed) {
                if (['set-admin', 'unset-admin'].includes(action)) {
                    commit('saveAdminList', result);
                } else {
                    commit('saveBanList', result);
                }
            }
        },

        async loadServerSettings({commit}) {
            const {data} = await http.get('/settings', {withCredentials: true});
            commit('saveHostSettings', data.hostSettings);
            commit('saveGameSettings', data.gameSettings);
            return data;
        },
        async loadUsers({commit}) {
            const {data} = await http.get('/users', {withCredentials: true});
            commit('saveAdminList', data.adminList);
            commit('saveBanList', data.banList);
        },
        async updateHostSettings({commit}, hostSettings) {
            const {data} = await http.post('/settings/host', hostSettings, {withCredentials: true});
            commit('saveHostSettings', data);
        },
        async updateGameSettings({commit}, gameSettings) {
            const {data} = await http.post('/settings/game', gameSettings, {withCredentials: true});
            commit('saveGameSettings', data);
        },
        async updateUsersSettings({commit}, {adminList, banList}) {
            const {data} = await http.post('/users', {adminList, banList}, {withCredentials: true});
            commit('saveAdminList', data.updatedAdminList);
            commit('saveBanList', data.updatedBanList);
        },
        async loadBackupFileNames({commit}) {
            const {data} = await http.get('/autosave/backups', {withCredentials: true});
            commit('saveBackupList', data.backupFileNames);
        },
        async scheduleRestoreBackup({commit}, {delay, backupFileName}) {
            const {data} = await http.post('/autosave/schedule-restore-backup', {
                delay,
                backupFileName
            }, {withCredentials: true});
            commit('saveServerInfo', data);
        },

        socket_serverInfo({commit}, serverInfo) {
            commit('saveServerInfo', serverInfo);
        },
        socket_serverProcessClosed({commit}, code) {
            commit('saveServerInfo', {
                time: null,
                version: null,
                steamID: null,
                appID: null,
                connectedToSteam: false,
                serverSetupComplete: false,
                loadedSaveGameVersion: null,
                currentGameVersion: null,
                isSaveLoaded: false,
                isSaveVersionIdentical: null,
                pid: null,
                processExitCode: code
            });
        },
        socket_playerConnected({commit}, player) {
            commit('savePlayer', player);
        },
        socket_playerDisconnected({commit}, player) {
            commit('savePlayer', player);
        },
        socket_playerUpdated({commit}, player) {
            commit('savePlayer', player);
        },
        socket_operationStart({commit}, serverInfo) {
            commit('saveServerInfo', serverInfo);
        },
        socket_operationExecute({commit}, serverInfo) {
            commit('saveServerInfo', serverInfo);
        },
        socket_operationDone({commit}, serverInfo) {
            commit('saveServerInfo', serverInfo);
        },
        socket_operationProgress({commit}, serverInfo) {
            commit('saveServerInfo', serverInfo);
        },
        socket_operationError({commit}, error) {
            commit('saveOperationError', error);
        },
        socket_serverStarted({commit}, {serverInfo, hostSettings, gameSettings, adminList, banList}) {
            commit('saveServerInfo', serverInfo);
            commit('saveHostSettings', hostSettings);
            commit('saveGameSettings', gameSettings);
            commit('saveAdminList', adminList);
            commit('saveBanList', banList);
        },
        socket_serverStopped({commit}, {serverInfo, hostSettings, gameSettings, adminList, banList}) {
            commit('saveServerInfo', serverInfo);
            commit('saveHostSettings', hostSettings);
            commit('saveGameSettings', gameSettings);
            commit('saveAdminList', adminList);
            commit('saveBanList', banList);
        },
        socket_serverUpdateHostSettings({commit}, info) {
            commit('saveHostSettings', info);
        },
        socket_serverUpdateGameSettings({commit}, info) {
            commit('saveGameSettings', info);
        },
        socket_serverUpdateAdminList({commit}, info) {
            commit('saveAdminList', info);
        },
        socket_serverUpdateBanList({commit}, info) {
            commit('saveBanList', info);
        }
    }
});
