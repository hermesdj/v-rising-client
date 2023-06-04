export default {
	info: "Information server",
	empty: "Pas de données à afficher pour l'instant...",
	state: {
		offline: "Le serveur est hors ligne",
		configReady: "Le serveur a chargé la configuration",
		playerReady:
			"Le serveur a chargé la sauvegarde '{saveName} ' et est prêt.",
	},
	fields: {
		time: "disponibilité ",
		pid: "PID",
		processExitCode: "Code de fin du processus",
		version: "Version du serveur",
		steamID: "Steam ID",
		appID: "App ID",
		connectedToSteam: "Connecté à Steam",
		serverSetupComplete: "Configuration du serveur terminée",
		isSaveLoaded: "La sauvegarde est-elle chargée ?",
		currentSaveNumber: "Numéro de sauvegarde actuel",
		loadedSaveGameVersion: "Version de la sauvegarde chargée",
		currentGameVersion: "Version actuelle du jeu",
		isSaveVersionIdentical: "La version de sauvegarde est-elle identique ?",
	},
	dialogs: {
		scheduleStop: {
			btn: "Arrêt programmé",
			title: "Programmer un arrêt du serveur",
			text: "Cette action planifie l'arrêt du serveur dans le délai défini.",
			fields: {
				timeToStop: "Temps avant arrêt en minutes",
			},
		},
		scheduleRestart: {
			btn: "Redémarrage",
			title: "Planifier le redémarrage du serveur",
			text: "Cette action planifie le redémarrage du serveur dans le délai défini.",
			fields: {
				timeToStop: "Temps avant redémarrage en minutes",
			},
		},
		forceStop: {
			btn: "Arrêt forcé",
			title: "Forcer l'arrêt du serveur",
			text: "Cette action va immédiatement forcer l'arrêt du serveur sans avertir les joueurs s'ils sont connectés !",
		},
		start: {
			btn: "Démarrer ",
			title: "Démarrer le serveur",
			text: "Cette action lance le processus de démarrage du serveur VRising.",
		},
		scheduleRestore: {
			btn: "Restaurer une sauvegarde",
			title: "Planifier la restauration d'une sauvegarde antérieure",
			text: "Cette action planifie l'arrêt du serveur, la restauration d'une sauvegarde antérieure, puis le redémarrage du serveur.",
			fields: {
				timeToStop: "Délai avant restauration en minutes",
				fileName: "Fichier de sauvegarde à restaurer",
			},
		},
		downloadBackup: {
			btn: "Télécharger une sauvegarde",
			title: "Télécharger un fichier de sauvegarde",
			text: "Cette action téléchargera la sauvegarde que vous avez sélectionnée sur votre ordinateur local.",
			fields: {
				fileName: "Fichier de sauvegarde à télécharger",
			},
		},
		sendAnnounce: {
			btn: "Annonce",
			title: "Envoyer une annonce",
			text: "Cette action enverra un message d'annonce aux joueurs dans le chat du jeu.",
			fields: {
				message: "Le message que vous souhaitez envoyer",
			},
			success: {
				title: "Envoi de l'annonce",
				content: "Le message d'annonce a été envoyé au serveur !",
			},
			failure: {
				title: "Erreur lors de l'envoi",
				content:
					"L'erreur suivante s'est produite lors de la transmission de l'annonce : {message}",
			},
		},
	},
	operations: {
		stopOperation: {
			btn: "Arrêt de l'opération",
			title: "Arrêt de l'opération",
			success: "L'opération a été interrompue !",
			error: "L'opération d'arrêt a échoué avec une erreur : {erreur}",
		},
		scheduledRestart: {
			text: "Une opération de redémarrage programmée par {username} sera exécutée dans {remainingTimeMinutes} minute(s)",
		},
		scheduledStop: {
			text: "Une opération de redémarrage programmée par {username} sera exécutée dans {remainingTimeMinutes} minute(s)",
		},
		operationError: {
			text: "Une erreur s'est produite lors de l'opération {type} : {message}",
		},
		scheduledRestore: {
			text: "Une opération de restauration de la sauvegarde {fileName} programmée par {username} sera exécutée dans {remainingTimeMinutes} minute(s)",
		},
	},
	events: {
		title: "Événement serveur",
		started: "Serveur démarré !",
		stopped: "Serveur arrêté !",
		copySteamId: {
			title: "Copier l'identifiant Steam",
			success: "SteamID {steamId} copié dans le presse-papiers !",
			error: "Erreur de copie de l'ID Steam : {erreur}",
		},
	},
	logs: {
		pollError: {
			title: "Polling Error",
			content: "Log polling a rencontré l'erreur suivante : {message}",
		},
	},
};
