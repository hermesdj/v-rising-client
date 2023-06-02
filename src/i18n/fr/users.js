export default {
    title: "Utilisateurs",
    edit: "Éditer les utilisateurs du serveur",
    stringSeparationHint:
        "La valeur doit être une liste d'identifiants de steam avec une valeur unique par ligne.",
    admin: {
        title: "Liste des administrateurs",
        size: "({size} administrateur défini) | ({size} administrateurs définis)",
        empty: "Aucun Admin n'a été défini sur le serveur !",
        diffModal: {
            title: "La liste des administrateurs a été modifiée !",
            text: "Il y a {size} changements non appliqués dans la liste des administrateurs, vous devez redémarrer le serveur pour les appliquer !",
        },
    },
    ban: {
        title: "Liste de bannissement",
        size: "({size} utilisateur banni) | ({size} utilisateurs bannis)",
        empty: "Aucun utilisateur n'a été banni !",
        diffModal: {
            title: "La liste des bans a été modifiée !",
            text: "Il y a {size} changements non appliqués dans la liste des ban, vous devez redémarrer le serveur pour les appliquer !",
        },
    },
};
