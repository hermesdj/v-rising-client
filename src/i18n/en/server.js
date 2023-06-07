export default {
    info: 'Server Info',
    status: 'Status',
    empty: 'No Data to display for now...',
    connect: 'Connect',
    state: {
        offline: 'Offline',
        process_started: 'Process Started',
        updating: 'Updating Steam...',
        updated: 'Updated Steam',
        checking_mods: 'Checking Mods...',
        error: 'Server Error',
        exiting: 'Exiting',
        starting: 'Starting...',
        stopping: 'Stopping...',
        setup_complete: 'Loaded Configuration',
        online: 'Online'
    },
    tabs: {
        overview: 'Overview',
        players: 'Players',
        logs: 'Logs',
        files: 'Files',
        backups: 'Backups',
        settings: 'Settings'
    },
    fields: {
        time: 'Uptime',
        ip: 'IP',
        pid: 'PID',
        processExitCode: 'Process Exit Code',
        version: 'Version',
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
            btn: 'Shut down',
            title: 'Schedule a V Rising server shut down',
            text: 'This action will schedule the VRising server to shut down in the defined amount of time',
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
            btn: 'Kill Server',
            title: 'Kill V Rising Server',
            text: 'This action will immediately kill the server without warning the players if any are connected !'
        },
        start: {
            btn: 'Start Server',
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
        },
        downloadBackup: {
            btn: 'Download Backup',
            title: 'Download a backup file',
            text: 'This action will download the backup you have selected to your local computer',
            fields: {
                fileName: 'Backup file to download'
            }
        },
        sendAnnounce: {
            btn: 'Announce',
            title: 'Send an Announce',
            text: 'This action will send an announce message to the players in the in-game chat',
            fields: {
                message: 'The message you want to send'
            },
            success: {
                title: 'Send Announce',
                content: 'The announce message has been sent to the server !'
            },
            failure: {
                title: 'Send Announce Error',
                content: 'The following error occurred during the transmission of the announce : {message}'
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
        },
        copyIp: {
            title: 'Copy IP',
            success: 'IP {ip} copied to the clipboard !',
            error: 'Error copying ip : {error}'
        }
    },
    logs: {
        pollError: {
            title: 'Polling Error',
            content: 'Log polling encountered the following error: {message}'
        }
    }
}
