export default {
    info: 'Server Info',
    empty: 'No Data to display for now...',
    state: {
        offline: 'Server is Offline',
        configReady: 'Server has loaded the configuration',
        playerReady: 'Server has loaded the save "{saveName}" and is ready'
    },
    fields: {
        time: 'Uptime',
        pid: 'PID',
        processExitCode: 'Process Exit Code',
        version: 'Server Version',
        steamID: 'Steam ID',
        appID: 'App ID',
        connectedToSteam: 'Connected to Steam',
        serverSetupComplete: 'Server Setup Complete',
        isSaveLoaded: 'Is Save Loaded',
        currentSaveNumber: 'Current Save Number',
        loadedSaveGameVersion: 'Loaded Save Game Version',
        currentGameVersion: 'Current Game Version',
        isSaveVersionIdentical: 'Is Save Version Identical'
    },
    dialogs: {
        scheduleStop: {
            btn: 'Schedule Stop',
            title: 'Schedule a V Rising server stop',
            text: 'This action will schedule the VRising server to stop in the defined amount of time',
            fields: {
                timeToStop: 'Time until stop in Minutes'
            }
        },
        scheduleRestart: {
            btn: 'Restart',
            title: 'Schedule a V Rising server restart',
            text: 'This action will schedule the VRising server to restart in the defined amount of time',
            fields: {
                timeToStop: 'Time until restart in Minutes'
            }
        },
        forceStop: {
            btn: 'Force Stop',
            title: 'Force stop V Rising Server',
            text: 'This action will immediately force stop the server without warning the players if any are connected !'
        },
        start: {
            btn: 'Start',
            title: 'Start VRising Server',
            text: 'This action will begin the startup process of the VRising server.'
        },
        scheduleRestore: {
            btn: 'Restore Backup',
            title: 'Schedule the restoration of a previous Save Backup',
            text: 'This action will schedule the stop of the server, the restoration of a previous save backup, and then restart the server.',
            fields: {
                timeToStop: 'Time until restore in Minutes',
                fileName: 'Backup file to restore'
            }
        }
    },
    operations: {
        stopOperation: {
            btn: 'Stop Operation',
            title: 'Operation Stop',
            success: 'Operation has been stopped !',
            error: 'Stopping operation failed with error: {error}'
        },
        scheduledRestart: {
            text: 'A restart operation scheduled by {username} will be executed in {remainingTimeMinutes} minute(s)',
        },
        scheduledStop: {
            text: 'A restart operation scheduled by {username} will be executed in {remainingTimeMinutes} minute(s)',
        },
        operationError: {
            text: 'An error occurred during the {type} operation : {message}'
        },
        scheduledRestore: {
            text: 'A restore operation of backup {fileName} scheduled by {username} will be executed in {remainingTimeMinutes} minute(s)'
        }
    },
    events: {
        title: 'Server Event',
        started: 'Server started !',
        stopped: 'Server stopped !',
        copySteamId: {
            title: 'Copy Steam ID',
            success: 'SteamID {steamId} copied to the clipboard !',
            error: 'Error copying steam id : {error}'
        }
    }
}
