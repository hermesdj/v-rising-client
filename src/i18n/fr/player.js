export default {
    list: {
        title: "Liste des joueurs",
        connectedOnly: "Connecté uniquement",
        all: "Tous",
    },
    myPlayer: "{characterName}",
    myPlayerList: "Vos personnages",
    count: "{count}/{total} joueurs connectés | {count}/{total} joueur connecté",
    fields: {
        userIndex: "Id",
        approvedUserIndex: "ID d'utilisateur approuvé",
        characterName: "Nom du personnage :",
        status: "Statut",
        disconnectReason: "Motif de déconnexion",
    },
    edit: {
        title: "Edit",
    },
    tooltips: {
        isConnected: "{characterName} est connecté !",
        isOffline: "{characterName} est hors ligne !",
        isAdmin: "{characterName} est Admin !",
        isBanned: "{characterName} est banni !",
    },
    actions: {
        "set-admin": {
            btn: "Donner les droits d'admin",
            success: {
                title: "Droits d'administrateur accordés",
                content:
                    "Le personnage {characterName} s'est vu attribuer des privilèges d'administrateur !",
            },
            failure: {
                title: "Échec de l'ajout d'administrateur",
                content:
                    "Une erreur s'est produite lors de l'attribution des privilèges d'administrateur à {characterName} : {error}",
            },
        },
        "unset-admin": {
            btn: "Supprimer les droits d'administrateur",
            success: {
                title: "Suppression des privilèges d'administrateur",
                content:
                    "Les privilèges d'administrateur ont été retirés au personnage {characterName} !",
            },
            failure: {
                title: "La suppression de l'administrateur a échoué",
                content:
                    "Une erreur s'est produite lors de la suppression des privilèges d'administrateur pour {characterName} : {error}",
            },
        },
        ban: {
            btn: "Bannir le joueur",
            success: {
                title: "Personnage banni",
                content: "Le personnage {characterName} a été banni !",
            },
            failure: {
                title: "Ban échoué",
                content:
                    "Une erreur s'est produite lors du ban du personnage {characterName} : {error}",
            },
        },
        unban: {
            btn: "Deban le joueur",
            success: {
                title: "Joueur débanni",
                content: "Le personnage {characterName} n'est plus ban !",
            },
            failure: {
                title: "Unban échoué",
                content:
                    "Une erreur s'est produite lors de l'annulation du bannissement d'un personnage {characterName} : {error}",
            },
        },
    },
    info: {
        title: "Nom du personnage : {characterName}",
        subtitle: "ID {userIndex}",
        connected: "Connecté",
        disconnected: "Déconnecté",
        disconnectReason: "Raison de la déconnexion : {message}",
    },
};
