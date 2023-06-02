export default {
    title: "Options de Jeu", //'Configurations',
    edit: "Configurer les options", //'Edit Game Settings',
    fields: {
        GameModeType: "Mode de jeu", //'Game Mode Type',
        CastleDamageMode: "Période d'Attaque des Châteaux", //'Caste Damage Mode',
        SiegeWeaponHealth: "Santé des Golems", //'Siege Weapon Health',
        PlayerDamageMode: "Mode des dégâts du joueur", //'Player Damage Mode',
        CastleHeartDamageMode: "Mode des dégâts du coeur de château", //'Castel Heart Damage Mode',
        PvPProtectionMode: "Mode de protection JcJ", //'PvP Protection Mode',
        DeathContainerPermission: "Permissions des << death container >>", // TRAD À REVOIR 'Death Container Permissions',
        RelicSpawnType: "Type de génération des reliques", //'Relic Spawn Type',
        CanLootEnemyContainers: "Peut récupérer l'inventaire d'un ennemi", //'Can Loot Enemy Containers',
        BloodBoundEquipment: "Équipement lié par le sang", //'Blood Bound Equipment',
        TeleportBoundItems: "Objets liés à la téléportation", //'Teleport Bound Items',
        AllowGlobalChat: "Autoriser le chat global", //'Allow Global Chat',
        AllWaypointsUnlocked: "Tous les téléporteurs débloqués", // TRAD "waypoints" à laisser en anglais et pas en français ?? 'All Waypoints Unlocked',
        FreeCastleClaim: "Revendication gratuite du château", //'Free Castle Claim',
        FreeCastleDestroy: "Destruction gratuite du château", //'Free Castle Destroy',
        InactivityKillEnabled: "Afk kill activé", //TRAD À REVOIR 'Inactivity Kill Enabled',
        InactivityKillTimeMin: "Temps minimum pour l'inactivity kill", // TRAD À REVOIR 'Inactivity Kill Time Minimum',
        InactivityKillTimeMax: "Temps maximum pour l'inactivity kill", // TRAD À REVOIR 'Inactivity Kill Time Maximum',
        InactivityKillSafeTimeAddition:
            "Temps de sécurité supplémentaire pour l'inactivity kill", // TRAD À REVOIR'Inactivity Kill Safe Time Addition',
        InactivityKillTimerMaxItemLevel:
            "Chrono max du niveau d'objet pour l'inactivity kill", // TRAD À REVOIR 'Inactivity Kill Timer Max Item Level',
        DisableDisconnectedDeadEnabled:
            "Désactivation de la mort déconnectée activée", //Disable Disconnected Dead Enabled',
        DisableDisconnectedDeadTimer:
            "Chrono de la désactivation de la mort déconnectée", //'Disable Disconnected Dead Timer',
        InventoryStacksModifier: "Empilements de l'inventaire", //'Inventory Stacks',
        DropTableModifier_General: "Taux de drop : Général", // pour DROP 'Drop Table : General',
        DropTableModifier_Missions: "Taux de drop : Missions", // 'Drop Table : Missions',
        MaterialYieldModifier_Global: "Taux de récolte des resources", // 'Material Yield',
        BloodEssenceYieldModifier: "Taux de récolte de l'essence", //'Blood Essence Yield',
        JournalVBloodSourceUnitMaxDistance:
            "Journal V : distance maximal des unités de Blood Source", // TRAD À REVOIR 'Journal V Blood Source Unit Max Distance',
        PvPVampireRespawnModifier: "Temps de respawn aprés une mort JcJ", //'PvP Vampire Respawn',
        CastleMinimumDistanceInFloors:
            "Distance minimale du château entre les sols", //'Castle Minimum Distance in Floors',
        ClanSize: "Taille de clan", //'Clan Size',
        BloodDrainModifier: "Conssomation du sang", //'Blood Drain',
        DurabilityDrainModifier: "Conssomation de la durabilité ", //'Durability Drain',
        GarlicAreaStrengthModifier: "Force de l'ail", // TRAD : Est-ce qu'il faut traduit le nom des zones ? 'Garlic Area Strength',
        HolyAreaStrengthModifier: "Dégâts du sacré", //'Holy Area Strength',
        SilverStrengthModifier: "Dégâts de l'argent", //  'Silver Strength',
        SunDamageModifier: "Dégâts du soleil", //'Sun Damage',
        CastleDecayRateModifier: "Taux de détérioration du château", //'Castle Decay Rate',
        CastleBloodEssenceDrainModifier: "Conssomation de l'essence du château", //'Castle Blood Essence Drain',
        CastleSiegeTimer: "Chrono pour le siège du château", //'Castle Siege Timer',
        CastleUnderAttackTimer: "Chrono pour le château attaqué", //'Castle Under Attack Timer',
        AnnounceSiegeWeaponSpawn:
            "Annonce de la génération des engins de sièges", //'Announce Siege Weapong Spawn',
        ShowSiegeWeaponMapIcon:
            "Montrer l'icône des engins de siège sur la carte", //'Show Siege Weapon Map Icon',
        BuildCostModifier: "Coût de construction", //'Build Cost',
        RecipeCostModifier: "Coût des crafts", //Recipe Cost',
        CraftRateModifier: "Vitesse du craft", // 'Craft Rate',
        ResearchCostModifier: "Coût de la recherche", //'Research Cost',
        RefinementCostModifier: "Coût du raffinement", // 'Refinement Cost',
        RefinementRateModifier: "Taux de raffinement", //'Refinement Rate',
        ResearchTimeModifier: "Durée de la recherche", //'Research Time',
        DismantleResourceModifier: "Démentèlement des ressources", //'Dismantle Resource',
        ServantConvertRateModifier: "Vitesse de conversion des serviteurs", //'Servant Convert Rate',
        RepairCostModifier: "Coût des réparations", //'Repair Cost',
        Death_DurabilityFactorLoss: "Taux de durabilité perdu lors de la mort", // 'Death Durability Factor Loss',
        Death_DurabilityLossFactorAsResources:
            "Taux de ressources perdues lors de la mort", //'Death Durability Resource Factor Loss',
        StarterEquipmentId: "Id de l'équipement de départ", //'Starter Equipment Id',
        StarterResourcesId: "Id des ressources de départ", //'Starter Resources Id',
        GameTimeModifiers: {
            DayDurationInSeconds: "Durée du jour en secondes", //'Day Duration In Seconds',
            DayStartHour: "Heure de départ de la journée", //'Day Start Hour',
            DayStartMinute: "Minute de départ de la journée", //'Day Start Minute',
            DayEndHour: "Heure de fin de la journée", //'Day End Hour',
            DayEndMinute: "Minute de fin de la journée", //'Day End Minute',
            BloodMoonFrequency_Min: "Fréquence minimale de la Lune de Sang", //'Minimal Blood Moon Frequency',
            BloodMoonFrequency_Max: "Fréquence maximale de la Lune de Sang", //''Maximal Blood Moon Frequency',
            BloodMoonBuff: "BUFF de la Lune de Sang", // 'Blood Moon Buff'
        },
        VampireStatModifiers: {
            MaxHealthModifier: "Santé max", //'Max Health',
            MaxEnergyModifier: "Énergie max", //'Max Energy',
            PhysicalPowerModifier: "Pouvoir physique", //'Physical Power',
            SpellPowerModifier: "Pouvoir magique", //'Spell Power',
            ResourcePowerModifier: "Pouvoir des ressources", // TRAD À CONFIRMER 'Resource Power',
            SiegePowerModifier: "Pouvoir des siège", //'Siege Power',
            DamageReceivedModifier: "Dégâts reçus", //'Damage Received',
            ReviveCancelDelay: "Délai d'annulation des réanimations", //Revive Cancel Delay'
        },
        UnitStatModifiers_Global: {
            MaxHealthModifier: "Santé maximale pour les unités standards", //'Maximum Health for standard units',
            PowerModifier: "Pouvoir pour les unités standards", //'Power for standard units'
        },
        UnitStatModifiers_VBlood: {
            MaxHealthModifier: "Santé maximale pour les unités V Blood", //'Maximum Health for V Blood units',
            PowerModifier: "Pouvoir pour les unités V Blood", //'Power for V Blood units'
        },
        EquipmentStatModifiers_Global: {
            MaxEnergyModifier: "Énergie maximale", //'Maximum Energy',
            MaxHealthModifier: "Santé maximale", //'Maximum Health',
            ResourceYieldModifier: "Rendement des ressources", //'Resource Yield',
            PhysicalPowerModifier: "Pouvoir physique", //'Physical Power',
            SpellPowerModifier: "Pouvoir magique", //'Spell Power',
            SiegePowerModifier: "Pouvoir des sièges", //'Siege Power',
            MovementSpeedModifier: "Vitesse des mouvements", //'Movement Speed'
        },
        CastleStatModifiers_Global: {
            TickPeriod: "Période d'un tick", //TRAD : pas sûr qu'il existe une trad fr pour tick (éventuellement "unité de temps" mais ça fait bizarre) 'Tick Period',
            DamageResistance: "Résistance aux dégâts", //'Damage Resistance',
            SafetyBoxLimit: "Limite de coffre sécurisé", //'Safety Box Limit',
            TombLimit: "Limite des sépulture", //'Tomb Limit',
            VerminNestLimit: "Limite des nids de Vermin", // 'Vermin Nest Limit',
            PrisonCellLimit: "Limite des cellules de prison", //'Prison Cell Limit',
            PylonPenalties: {
                Range1: {
                    Percentage: "Pourcentage de la portée 1", //'Range 1 Percentage',
                    Lower: "Minimum de la Portée 1", //'Range 1 Lower',
                    Higher: "Maximum de la Portée 1", //'Range 1 Higher'
                },
                Range2: {
                    Percentage: "Pourcentage de la portée 2", //'Range 2 Percentage',
                    Lower: "Minimum de la Portée 2", //'Range 2 Lower',
                    Higher: "Maximum de la Portée 2", //'Range 2 Higher'
                },
                Range3: {
                    Percentage: "Pourcentage de la portée 3", //'Range 3 Percentage',
                    Lower: "Minimum de la Portée 3", //'Range 3 Lower',
                    Higher: "Maximum de la Portée 3", //'Range 3 Higher'
                },
                Range4: {
                    Percentage: "Pourcentage de la portée 4", //'Range 4 Percentage',
                    Lower: "Minimum de la Portée 4", //'Range 4 Lower',
                    Higher: "Maximum de la Portée 4", //'Range 4 Higher'
                },
                Range5: {
                    Percentage: "Pourcentage de la portée 5", //'Range 5 Percentage',
                    Lower: "Minimum de la Portée 5", //'Range 5 Lower',
                    Higher: "Maximum de la Portée 5", //'Range 5 Higher'
                },
            },
            FloorPenalties: {
                Range1: {
                    Percentage: "Pourcentage de la portée 1", //'Range 1 Percentage',
                    Lower: "Minimum de la Portée 1", //'Range 1 Lower',
                    Higher: "Maximum de la Portée 1", //'Range 1 Higher'
                },
                Range2: {
                    Percentage: "Pourcentage de la portée 2", //'Range 2 Percentage',
                    Lower: "Minimum de la Portée 2", //'Range 2 Lower',
                    Higher: "Maximum de la Portée 2", //'Range 2 Higher'
                },
                Range3: {
                    Percentage: "Pourcentage de la portée 3", //'Range 3 Percentage',
                    Lower: "Minimum de la Portée 3", //'Range 3 Lower',
                    Higher: "Maximum de la Portée 3", //'Range 3 Higher'
                },
                Range4: {
                    Percentage: "Pourcentage de la portée 4", //'Range 4 Percentage',
                    Lower: "Minimum de la Portée 4", //'Range 4 Lower',
                    Higher: "Maximum de la Portée 4", //'Range 4 Higher'
                },
                Range5: {
                    Percentage: "Pourcentage de la portée 5", //'Range 5 Percentage',
                    Lower: "Minimum de la Portée 5", //'Range 5 Lower',
                    Higher: "Maximum de la Portée 5", //'Range 5 Higher'
                },
            },
            HeartLimits: {
                Level: "Niveau {level}", //'Level {level}',
                FloorLimit: "Limite de sol", // Floor Limit',
                ServantLimit: "Limite de serviteurs", //'Servant Limit',
                HeightLimit: "Limite d'étage", //'Height Limit',
                Level1: {
                    FloorLimit: "Limite de sol pour le niveau 1", //'Level 1 Floor Limit',
                    ServantLimit: "Limite de serviteurs pour le niveau 1", //'Level 1 Servant Limit',
                    HeightLimit: "Limite d'étage pour le niveau 1", //'Level 1 Height Limit'
                },
                Level2: {
                    FloorLimit: "Limite de sol pour le niveau 2", //'Level 2 Floor Limit',
                    ServantLimit: "Limite de serviteurs pour le niveau 2", //'Level 2 Servant Limit',
                    HeightLimit: "Limite d'étage pour le niveau 2", //'Level 2 Height Limit'
                },
                Level3: {
                    FloorLimit: "Limite de sol pour le niveau 3", //'Level 3 Floor Limit',
                    ServantLimit: "Limite de serviteurs pour le niveau 3", //'Level 3 Servant Limit',
                    HeightLimit: "Limite d'étage pour le niveau 3", //'Level 3 Height Limit'
                },
                Level4: {
                    FloorLimit: "Limite de sol pour le niveau 4", //'Level 4 Floor Limit',
                    ServantLimit: "Limite de serviteurs pour le niveau 4", //'Level 4 Servant Limit',
                    HeightLimit: "Limite d'étage pour le niveau 4", //'Level 4 Height Limit'
                },
                Level5: {
                    FloorLimit: "Limite de sol pour le niveau 5", //'Level 5 Floor Limit',
                    ServantLimit: "Limite de serviteurs pour le niveau 5", //'Level 5 Servant Limit',
                    HeightLimit: "Limite d'étage pour le niveau 5", //'Level 5 Height Limit'
                },
            },
            CastleLimit: "Limite du château", //'Castle Limit',
        },
        PlayerInteractionSettings: {
            TimeZone: "Zone de temps", //'TimeZone',
            Start: "Début", // TRAD à confirmer en fonction du contexte. On peut traduire 'Commencer', 'Start',
            StartHour: "Heure de départ", //'Start Hour',
            StartMinute: "Minute de départ", // 'Start Minute',
            End: "Fin", //TRAD à confirmer en fonction du contexte. On peut traduire "Finir" 'End',
            EndHour: "Heure de fin", //'End Hour',
            EndMinute: "Minute de fin", //'End Minute',

            //-----------------------------------------------------------------------------
            //        FIN TRADUCTION PHILIPPE LE 01/06/2023 à 15h58
            //-----------------------------------------------------------------------------

            VSPlayerWeekdayTime: {
                StartHour: "Heure de démmarage du JcJ la semaine", // 'VS Player Weekday Time Start Hour',
                StartMinute: "Minutes de démmarage du JcJ la semaine", // "VS Player Weekday Time Start Minute",
                EndHour: "Heure de fin du JcJ la semaine", // "VS Player Weekday Time End Hour",
                EndMinute: "Minutes de démmarage du JcJ la semaine", // "VS Player Weekday Time End Minute",
            },
            VSPlayerWeekendTime: {
                StartHour: "Heure de démmarage du JcJ le week-end", // "VS Player Weekend Time Start Hour",
                StartMinute: "Minutes de démmarage du JcJ le week-end", // "VS Player Weekend Time Start Minute",
                EndHour: "Heure de fin du JcJ le week-end", // "VS Player Weekend Time End Hour",
                EndMinute: "Minutes de fin du JcJ le week-end", // "VS Player Weekend Time End Minute",
            },
            VSCastleWeekdayTime: {
                StartHour:
                    "Heure de démmarage des attaques de chateaux la semaine", // "VS Castle Weekday Time Start Hour",
                StartMinute:
                    "Minutes de démmarage des attaques de chateaux la semaine", // "VS Castle Weekday Time Start Minute",
                EndHour: "Heure de fin des attaques de chateaux la semaine", // "VS Castle Weekday Time End Hour",
                EndMinute: "Minutes de fin des attaques de chateaux la semaine", // "VS Castle Weekday Time End Minute",
            },
            VSCastleWeekendTime: {
                StartHour:
                    "Heure de démmarage des attaques de chateaux le week-end", // "VS Castle Weekend Time Start Hour",
                StartMinute:
                    "Minutes de démmarage des attaques de chateaux le week-end", // "VS Castle Weekend Time Start Minute",
                EndHour: "Heure de fin des attaques de chateaux le week-end", // "VS Castle Weekend Time End Hour",
                EndMinute:
                    "Minutes de fin des attaques de chateaux le week-end", // "VS Castle Weekend Time End Minute",
            },
        },
    },
    group: {
        MainSettings: "Réglages principaux", // "Main Settings",
        Inactivity: "Inactivité", // "Inactivity",
        Modifiers: "Réglages des modificateurs", // "Modifiers Settings",
        CastleSettings: "Réglages des châteaux", // "Castle Settings",
    },
    subgroup: {
        Configuration: "Configuration", // "Configuration",
        Limits: "Limites", // "Limits",
        Unlocks: "Déverrouiller ", // "Unlocks",
        PylonPenalties: "Pylon Penalties", // "Pylon Penalties",
        FloorPenalties: "Floor Penalties", // "Floor Penalties",
        HeartLimits: "Limites de coeur", // "Heart Limits",
        VSPlayerWeekdayTime: "VS Player Weekday", // "VS Player Weekday",
        VSPlayerWeekendTime: "VS Player Weekend", // "VS Player Weekend",
        VSCastleWeekdayTime: "VS Castle Weekday", // "VS Castle Weekday",
        VSCastleWeekendTime: "VS Castle Weekend", // "VS Castle Weekend",
        GameMode: "Mode de jeu", // "Game Mode",
        GameSettings: "Réglages du jeu", // "Game Settings",
        InventoryAndLoot: "Inventaire et butin", // "Inventory And Loot",
        GameTimeModifiers: "Temps en jeu", // "Game Time",
        VampireStatModifiers: "Statistiques des vampires", // "Vampire Statistics",
        UnitStatModifiers: "Statistiques des unités", // "Unit Statistics",
        EquipmentStatModifiers: "Statistiques des équipements", // "Equipment Statistics",
        CastleStatModifiers: "Statistiques des châteaux", // "Castle Statistics",
        PlayerInteractionSettings: "Paramètres d'interaction des joueurs", // "Player Interaction Settings",
        CostModifiers: "Coûts", // "Costs",
        RateModifiers: "Taux", // "Rates",
    },
    values: {
        GameModeType: {
            PvP: "JcJ",
            PvE: "JcE",
        },
        CastleDamageMode: {
            Never: "Jamais", // "Never",
            Always: "Toujours", // "Always",
            TimeRestricted: "Restriction temporelle", // "Time Restricted",
        },
        SiegeWeaponHealth: {
            VeryLow: "Très faible (500)", // "Very Low (500)",
            Low: "Faible (1000)", // "Low (1000)",
            Normal: "Normal (1500)", // "Normal (1500)",
            High: "Haut (2000)", // "High (2000)",
            VeryHigh: "Très élevé (2500)", // "Very High (2500)",
        },
        PlayerDamageMode: {
            Always: "Toujours", // "Always",
            TimeRestricted: "Restriction temporelle", // "Time Restricted",
        },
        CastleHeartDamageMode: {
            CanBeSeizedOrDestroyedByPlayers:
                "Peut être saisi ou détruit par les joueurs", // "Can be seized or destroyed by players",
            CanBeDestroyedOnlyWhenDecaying:
                "Ne peuvent être détruits que lorsqu'ils se décomposent", // "Can be destroyed only when decaying",
            CanBeDestroyedByPlayers: "Peut être détruit par les joueurs", // "Can be destroyed by players",
        },
        PvPProtectionMode: {
            Disabled: "Désactivé (0)", // "Disabled (0)",
            VeryShort: "Très courte (15 minutes)", // "Very short (15 minutes)",
            Short: "Court (30 minutes)", // "Short (30 minutes)",
            Medium: "Moyen (1 heure)", // "Medium (1 hour)",
            Long: "Long (2 heure)", // "Long (2 hours)",
        },
        DeathContainerPermission: {
            Anyone: "Tout le monde peut piller le corps", // "Everyone can loot the body",
            ClanMembers:
                "Seuls les membres du clan et eux-mêmes peuvent piller le corps.", // "Only self and clan members may loot the body",
            OnlySelf: "Seul eux-mêmes peuvent piller le corps", // "Only self may loot the body",
        },
        RelicSpawnType: {
            Unique: "Unique", // "Unique",
            Plentiful: "En abondance", // "Plentiful",
        },
        StarterEquipmentId: {
            none: "Pas d'équipement au départ", // "No Starter Equipment",
            copper: "Équipement en cuivre (Lvl 30)", // "Copper Equipment (Lvl 30)",
            iron: "Équipement en fer (Lvl 50)", // "Iron Equipment (Lvl 50)",
            darkSilver: "Équipement en argent (Lvl 70)", // "Dark Silver Equipment (Lvl 70)",
            sanguine: "Équipement Sanguin (Level 80)", // "Sanguine Equipment (Level 80)",
        },
        StarterResourcesId: {
            none: "Aucune ressource au départ", // "No Starter Resource",
            copper: "Matériau en cuivre (Lvl 30)", // "Copper Material (Lvl 30)",
            iron: "Matériau en fer (Lvl 50)", // "Iron Material (Lvl 50)",
            darkSilver: "Matériau en argent (Lvl 70)", // "Dark Silver Material (Lvl 70)",
        },
        TimeZone: {
            Local: "Heure du système local", // "Local System Time",
            UTC: "Temps universel coordonné (UTC)", // "Coordinated Universal Time",
            PST: "Heure normale du Pacifique (UTC -8)", // "Pacific Standard Time (UTC -8)",
            CET: "Heure d'Europe centrale (UTC + 1)", // "Central European Time (UTC + 1)",
            CST: "Heure normale de Chine (UTC + 8)", // "China Standard Time (UTC + 8)",
        },
    },
    descriptions: {
        SiegeWeaponHealth: "La santé du golem de siège", // "The Siege Golem Health",
        PlayerDamageMode:
            "Vous pouvez choisir quand les joueurs peuvent blesser les autres joueurs (désactivé en PvE)", // "You can select when players can damage other players (Disabled in PvE)",
        CastleHeartDamageMode:
            "Définit les interactions avec les cœurs de château hostiles", // "Defines interactions with hostile Castle Hearts",
        PvPProtectionMode:
            "Le temps dont disposent les joueurs après leur entrée sur un serveur JcJ pendant lequel ils ne peuvent pas être blessés par d'autres joueurs.", // "The amount of time players get after entering a PvP server during which they cannot be hurt by other players",
        DeathContainerPermission:
            "Spécifie qui est autorisé à piller le corps d'un joueur après sa mort.", // "Specifies who is permitted to loot a player’s body after death",
        RelicSpawnType:
            "Détermine si les shards sont uniques (un par serveur) ou si un nouvel objet est créé à chaque fois qu'un porteur de shard est vaincu.", // "Establishes whether soul shard objects are unique (one of each per server) or if a new one spawns each time a soul shard bearer is defeated",
        CanLootEnemyContainers:
            "Si les joueurs peuvent piller les cachettes, les conteneurs et les stations d'artisanat de l'ennemi", // "If players may loot enemy stashes, containers, and crafting stations",
        BloodBoundEquipment:
            "Lorsque cette option est activée, les équipements lié par le sang ne tomberont pas à la mort.", // "When enabled, most equipment will not be dropped upon death",
        TeleportBoundItems:
            "Lorsque cette option est activée, certains éléments vous empêchent d'utiliser les téléporteurs.", // "When enabled, some items will prevent you from using waygates",
        AllowGlobalChat:
            "Permettre aux joueurs d'écrire des messages que tous les joueurs du serveur peuvent lire", // "Allow players to write messages that all players on the server can read",
        AllWaypointsUnlocked:
            "Ne changez PAS cela. Cela ne fonctionne pas et casse le jeu pour le moment.", // "Do NOT change this. It does not work and breaks the game at the moment",
        FreeCastleClaim:
            "S'emparer du cœur de château d'un joueur ennemi ne nécessite pas de matériaux.", // "Seizing an enemy player’s castle heart requires no materials",
        FreeCastleDestroy:
            "La destruction du cœur de château d'un joueur ennemi ne nécessite pas de matériaux.", // "Destroying an enemy player’s castle heart requires no materials",
        InactivityKillEnabled:
            "Les joueurs inactifs sont automatiquement tués après une durée déterminée.", // "Inactive players are automatically killed after a set duration",
        InactivityKillTimeMin:
            "Temps minimum avant qu'un joueur inactif ne soit tué, en secondes, en fonction du niveau d'équipement.", // "Minimum timer before an inactive player is killed in seconds, based on gear level",
        InactivityKillTimeMax:
            "Délai maximum avant qu'un joueur inactif ne soit tué en secondes, basé sur le niveau d'équipement (interrompt actuellement le jeu s'il est modifié).", // "Maximum timer before an inactive player is killed in seconds, based on gear level (Currently breaks the game if changed)",
        InactivityKillSafeTimeAddition:
            "Délai supplémentaire avant qu'un joueur inactif ne soit tué, en secondes, lorsqu'il se trouve sur le territoire d'un château (interrompt actuellement le jeu s'il est modifié).", // "Additional time before an inactive player is killed, in seconds, when standing in a castle territory (Currently breaks the game if changed)",
        InactivityKillTimerMaxItemLevel:
            "Le niveau d'équipement maximum sur lequel les minuteries d'inactivité sont basées de 1 à cette valeur (interrompt actuellement le jeu s'il est modifié).", // "The maximum gear level that the inactivity min and max timers are based on from 1 to this value (Currently breaks the game if changed)",
        DisableDisconnectedDeadEnabled:
            "Si la mort des joueurs déconnectés morts sont désactivés", // TRAD À REVOIR "If dead disconnected players are disabled",
        DisableDisconnectedDeadTimer:
            "Le temps nécessaire pour qu'un joueur mort déconnecté soit désactivé", //  TRAD À REVOIR"The time for a disconnected dead player to become disabled",
        InventoryStacksModifier:
            "Multiplie le nombre d'éléments pouvant être combinés en une seule pile.", // "Multiplies the amount of items that can be combined into a single stack",
        DropTableModifier_General:
            "Multiplie toutes les tables de drop par ce facteur, ce qui permet d'obtenir plus ou moins de drop lors des meurtres et des coffres.", // "Multiplies all drop tables with this factor, granting more or less drops from kills and chests",
        DropTableModifier_Missions:
            "Multiplie le montant du butin reçu lors des chasses aux serviteurs réussies.", // "Multiplies the amount of loot received from successful servant hunts",
        MaterialYieldModifier_Global:
            "Multiplie la quantité de matériaux reçus des nœuds de récolte.", // "Multiplies the amount of materials received from harvesting resource nodes",
        BloodEssenceYieldModifier:
            "Multiplie la quantité d'essence reçue en tuant les ennemis.", // "Multiplies the amount of blood essence received from defeating enemies",
        PvPVampireRespawnModifier:
            "Multiplie la durée de réapparition supplémentaire que les joueurs subissent lorsqu'ils sont tués en JcJ.", // "Multiplies the additional respawn duration players suffer from being slain in PvP",
        CastleMinimumDistanceInFloors:
            "Le nombre de tuiles minimales où les joueurs peuvent placer un cœur de château et/ou des étages à côté d'un autre cœur.", // "The number of minimum tiles where players can place a castle heart and/or floors next to another heart",
        ClanSize:
            "Par exemple, le nombre de joueurs pouvant rejoindre un même clan. Les joueurs d'un clan peuvent s'élever ensemble, partager leurs progrès et construire des châteaux ensemble.", // "For Example, the number of players that can join a single clan. Players in a clan can rise together, share progress and build castles together.",
        BloodDrainModifier:
            "Taux indiquant la vitesse à laquelle les joueurs perdent du sang. Un taux plus élevé se traduit par une consommation de sang plus importante", // "Rate for how quickly players lose blood. A higher rate results in higher blood consumption",
        DurabilityDrainModifier:
            "Multiplie la durabilité subie en infligeant ou en recevant des dégâts.", // "Multiplies the amount of durability suffered from dealing or receiving damage",
        GarlicAreaStrengthModifier: "Multiplie l'effet de l'ail.", // "Affects the rate of how quickly garlic stacks when exposed",
        HolyAreaStrengthModifier: "Multiplie l'effet du sacré", // "Multiplies the effect of the Holy element",
        SilverStrengthModifier:
            "Affecte les dégâts reçus lors du transport d'objets en argent", // "Affects the damage received when carrying silver items",
        SunDamageModifier:
            "Affecte la durée pendant laquelle un joueur peut rester au soleil avant de commencer à subir des dégâts.", // "Affects the duration a player may stand in the sun before starting to take damage",
        CastleDecayRateModifier:
            "Taux de détérioration d'un château lorsque le cœur n'a plus d'essence.", // "Rate for how quickly a castle deteriorates when the Castle Heart has run out of Blood Essence",
        CastleBloodEssenceDrainModifier:
            "Vitesse à laquelle un château consomme de l'essence. Un taux plus élevé se traduit par une plus grande consommation d'essence", // "Rate for how quickly a castle consumes blood essence. A higher rate results in higher blood essence consumption",
        CastleSiegeTimer:
            "La durée pendant laquelle un château est considéré comme 'attaqué' lorsque les joueurs ennemis franchissent les défenses extérieures. Les joueurs ne peuvent pas construire de nouvelles structures ou de nouveaux murs lorsqu'un château est 'attaqué' et toutes les structures sont susceptibles d'être endommagées lorsqu'elles sont dans cet état. (Le temps est défini en secondes.)", // "The amount of time a castle is deemed as breached when enemy players break through the outer defenses. Players may not construct new structures or walls while a castle is breached and all structures are susceptible to damage while in this state. Time is defined in seconds.",
        CastleUnderAttackTimer:
            "Durée pendant laquelle les joueurs ne peuvent pas construire de structures ou de murs lorsqu'ils sont attaqués. Un château est considéré comme attaqué lorsque les joueurs ennemis parviennent à endommager un mur ou une porte à l'aide d'explosifs ou du golems de siège.", // "The amount of time where players are blocked from building structures or walls while being under attack. A castle is deemed under attack whenever enemy players manage to deal damage to any wall or door using explosives or siege golems.",
        BuildCostModifier:
            "Multiplie la quantité de matériaux nécessaires à la construction des structures.", // "Multiplies the amount of materials required to build structures.",
        RecipeCostModifier: "Multiplie le coût de fabrication des objets.", //"Multiplies the cost of crafting items.",
        CraftRateModifier:
            "Le taux de vitesse de fabrication d'objets et d'équipements dans les stations d'artisanat, un taux plus élevé entraîne une fabrication plus rapide (pas dans les stations de raffinement). ", // "The rate for crafting items and equipment in crafting stations, a higher rate results in more rapid crafting (not refinement stations) ",
        RefinementCostModifier: "Multiplie le coût du raffinage des objets.", // "Multiplies the cost of refining items.",
        RefinementRateModifier:
            "Taux d'affinage des matériaux. Un taux plus élevé se traduit par un raffinage plus rapide.", // "Rate for how quickly materials are refined. A higher rate result in more rapid refinement.",
        DismantleResourceModifier:
            "Le remboursement des matériaux que les joueurs reçoivent lors du démantèlement d'une structure.", // "The material reimbursement players receive from dismantling a structure.",
        ServantConvertRateModifier:
            "Taux indiquant la vitesse à laquelle les humains se transforment en serviteurs. Un taux plus élevé se traduit par une conversion plus rapide.", //"Rate for how quickly humans turn into servants. A higher rate result in more rapid conversion.",
        RepairCostModifier: "Modifie le coût de réparation d'un objet", // "Modifies the cost for repairing an item",
        Death_DurabilityFactorLoss:
            "Le montant de la perte de durabilité que l'équipement subit à la mort lorsqu'il est vaincu en JcJ. (Les joueurs sont considérés comme étant en JcJ pendant une certaine durée après avoir infligé des dégâts à un autre joueur ou avoir reçu des dégâts d'un autre joueur).", // "The amount of durability loss that equipment suffer upon death when defeated in PvP. Players are deemed as in PvP for a duration after dealing damage to another player or receiving damage from another player.",
        Death_DurabilityLossFactorAsResources:
            "Les pertes de durabilité subies lors de la mort sont abandonnées sous forme de matériaux. Cette valeur définit la quantité de matériaux perdus ou abandonnés. Une valeur de 0 signifie que tous les matériaux sont perdus, tandis qu'une valeur de 1 signifie que tous les matériaux sont abandonnés.", // "Durability loss suffered upon death is dropped as materials. This value defines the amount of materials that are either lost or dropped. A value of 0 results in all materials being lost while a value of 1 results in all materials being dropped.",
    },
    diff: {
        title: "Les paramètres du jeu ne sont pas appliqués !", // "Game Settings Not Applied !",
        text: "Les paramètres du jeu ont reçu {size} modifications , vous devez redémarrer le serveur pour les appliquer !", // "Game Settings have received {size} changes, you must restart the server to apply them !",
    },
    diffModal: {
        title: "Différences de paramètres", // "Game Settings Diffs",
    },
};
