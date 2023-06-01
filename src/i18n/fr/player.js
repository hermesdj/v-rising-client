export default {
    list: {
        title: 'Player List',
        connectedOnly: 'Connected Only',
        all: 'All'
    },
    myPlayer: '{characterName}',
    myPlayerList: 'Your Characters',
    count: '{count}/{total} players connected | {count}/{total} player connected',
    fields: {
        userIndex: 'Id',
        approvedUserIndex: 'Approved User ID',
        characterName: 'Character',
        status: 'Status',
        disconnectReason: 'Disconnect Reason'
    },
    edit: {
        title: 'Edit'
    },
    tooltips: {
        isConnected: '{characterName} is connected !',
        isOffline: '{characterName} is offline !',
        isAdmin: '{characterName} is admin !',
        isBanned: '{characterName} is banned !'
    },
    actions: {
        'set-admin': {
            btn: 'Give admin rights',
            success: {
                title: 'Admin privileges given',
                content: 'The character {characterName} has been given admin privileges !'
            }, failure: {
                title: 'Set Admin failed',
                content: 'An error occurred while giving admin privileges to {characterName} : {error}'
            }
        },
        'unset-admin': {
            btn: 'Remove admin rights',
            success: {
                title: 'Admin privileges removed',
                content: 'The admin privileges have been removed from the character {characterName} !'
            }, failure: {
                title: 'Remove Admin failed',
                content: 'An error occurred while removing admin privileges to {characterName} : {error}'
            }
        },
        ban: {
            btn: 'Ban player',
            success: {
                title: 'Character banned',
                content: 'The character {characterName} has been banned !'
            }, failure: {
                title: 'Ban failed',
                content: 'An error occurred while banning the character {characterName} : {error}'
            }
        },
        unban: {
            btn: 'Unban player',
            success: {
                title: 'Character unbanned',
                content: 'The character {characterName} is no longer banned !'
            }, failure: {
                title: 'Unban failed',
                content: 'An error occurred while unbanning character {characterName} : {error}'
            }
        }
    },
    info: {
        title: 'Character {characterName}',
        subtitle: 'ID {userIndex}',
        connected: 'Connected',
        disconnected: 'Disconnected',
        disconnectReason: 'Disconnect reason : {message}'
    }
}
