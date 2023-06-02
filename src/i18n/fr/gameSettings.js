export default {
    title: 'Options de Jeu', //'Configurations',
    edit: 'Configurer les options', //'Edit Game Settings',
    fields: {
        GameModeType: 'Mode de jeu', //'Game Mode Type',
        CastleDamageMode: "Période d'Attaque des Châteaux", //'Caste Damage Mode',
        SiegeWeaponHealth: 'Santé des engins de siège', //'Siege Weapon Health',
        PlayerDamageMode: 'Mode des dégâts du joueur', //'Player Damage Mode',
        CastleHeartDamageMode: 'Mode des dégâts de coeur du château',//'Castel Heart Damage Mode', // -> TRAD À REVOIR : peut-être une erreur en anglais : ce serait "castle" et non pas "castel" ??
        PvPProtectionMode: 'Mode de protection JcJ', //'PvP Protection Mode',
        DeathContainerPermission: 'Permissions des << death container >>', // TRAD À REVOIR 'Death Container Permissions',
        RelicSpawnType: 'Type de génération des reliques',//'Relic Spawn Type',
        CanLootEnemyContainers: 'Peut récupérer l\'inventaire d\'un ennemi',//'Can Loot Enemy Containers',
        BloodBoundEquipment: 'Équipement lié par le sang',//TRAD À REVOIR 'Blood Bound Equipment',
        TeleportBoundItems: 'Objets de téléportation',//TRAD À REVOIR 'Teleport Bound Items',
        AllowGlobalChat: 'Autoriser le chat global',//'Allow Global Chat',
        AllWaypointsUnlocked: 'Tous les points de passage débloqués',// TRAD "waypoints" à laisser en anglais et pas en français ?? 'All Waypoints Unlocked',
        FreeCastleClaim: 'Revendication gratuite du château',//'Free Castle Claim',
        FreeCastleDestroy: 'Destruction gratuite du château',//'Free Castle Destroy',
        InactivityKillEnabled: 'Inactivity kill activé',//TRAD À REVOIR 'Inactivity Kill Enabled',
        InactivityKillTimeMin: 'Temps minimum pour l\'inactivity kill', // TRAD À REVOIR 'Inactivity Kill Time Minimum',
        InactivityKillTimeMax: 'Temps maximum pour l\'inactivity kill', // TRAD À REVOIR 'Inactivity Kill Time Maximum',
        InactivityKillSafeTimeAddition: 'Temps de sécurité supplémentaire pour l\'inactivity kill', // TRAD À REVOIR'Inactivity Kill Safe Time Addition',
        InactivityKillTimerMaxItemLevel: 'Chrono max du niveau d\'objet pour l\'inactivity kill', // TRAD À REVOIR 'Inactivity Kill Timer Max Item Level',
        DisableDisconnectedDeadEnabled: 'Désactivation de la mort déconnectée activée', //Disable Disconnected Dead Enabled',
        DisableDisconnectedDeadTimer: 'Chrono de la désactivation de la mort déconnectée', //'Disable Disconnected Dead Timer',
        InventoryStacksModifier: 'Empilements de l\'inventaire', //'Inventory Stacks',
        DropTableModifier_General: 'Tableau DROP : Général', // TRAD À REVOIR pour DROP 'Drop Table : General',
        DropTableModifier_Missions: 'Tableau DROP : Missions', // 'Drop Table : Missions',
        MaterialYieldModifier_Global: 'Rendement matériel', // TRAD écrire "ressource" à la place de "matériel" ? 'Material Yield',
        BloodEssenceYieldModifier: 'Rendement de l\'essence de sang', //'Blood Essence Yield',
        JournalVBloodSourceUnitMaxDistance: 'Journal V : distance maximal des unités de Blood Source', // TRAD À REVOIR 'Journal V Blood Source Unit Max Distance',
        PvPVampireRespawnModifier: 'JcJ regénération des vampires', //'PvP Vampire Respawn',
        CastleMinimumDistanceInFloors: 'Distance minimale du château pour les sols', //'Castle Minimum Distance in Floors',
        ClanSize: 'Taille du clan', //'Clan Size',
        BloodDrainModifier: 'Écoulement du sang', //'Blood Drain',
        DurabilityDrainModifier: 'Durée/Durabilité de l\'écoulement', // TRAD A REVOIR 'Durability Drain',
        GarlicAreaStrengthModifier: 'Force de la zone Garlic', // TRAD : Est-ce qu'il faut traduit le nom des zones ? 'Garlic Area Strength',
        HolyAreaStrengthModifier: 'Force de la zone Holy', //TRAD (nom à traduire)'Holy Area Strength',
        SilverStrengthModifier: 'Force Silver', // TRAD (Argent) 'Silver Strength',
        SunDamageModifier: 'Dégâts du soleil', // TRAD A REVOIR ? 'Sun Damage',
        CastleDecayRateModifier: 'Taux de détérioration du château', //'Castle Decay Rate',
        CastleBloodEssenceDrainModifier: 'Écoulement de l\'essence de sang du château', // TRAD ?? 'Castle Blood Essence Drain',
        CastleSiegeTimer: 'Chrono pour le siège du château', //'Castle Siege Timer',
        CastleUnderAttackTimer: 'Chrono pour le château attaqué', //'Castle Under Attack Timer',
        AnnounceSiegeWeaponSpawn: 'Annonce de la génération des engins de sièges', //'Announce Siege Weapong Spawn',
        ShowSiegeWeaponMapIcon: 'Montrer l\'icône des engins de siège sur la carte', //'Show Siege Weapon Map Icon',
        BuildCostModifier: 'Coût de construction', //'Build Cost',
        RecipeCostModifier: 'Coût des recettes', //Recipe Cost',
        CraftRateModifier: 'Vitesse du craft', // TRAD Craft à revoir + "vitesse" à vérifier en fonction du contexte 'Craft Rate',
        ResearchCostModifier: 'Coût de la recherche', //'Research Cost',
        RefinementCostModifier: 'Coût des améliorations', // TRAD à confirmer 'Refinement Cost',
        RefinementRateModifier: 'Vitesse des améliorations', // TRAD à confirmer 'Refinement Rate',
        ResearchTimeModifier: 'Durée de la recherche', //'Research Time',
        DismantleResourceModifier: 'Démentèlement des ressources', //'Dismantle Resource',
        ServantConvertRateModifier: 'Vitesse de conversion des serviteurs', //'Servant Convert Rate',
        RepairCostModifier: 'Coût des réparations', //'Repair Cost',
        Death_DurabilityFactorLoss: 'Facteur de durée des pertes lors de la mort', //TRAD À CONFIRMER 'Death Durability Factor Loss',
        Death_DurabilityLossFactorAsResources: 'Facteur des ressources perdues lors de la mort', //TRAD À CONFIRMER 'Death Durability Resource Factor Loss',
        StarterEquipmentId: 'Id de l\'équipement de départ', //'Starter Equipment Id',
        StarterResourcesId: 'Id des ressources de départ', //'Starter Resources Id',
        GameTimeModifiers: {
            DayDurationInSeconds: 'Durée du jour en secondes', //'Day Duration In Seconds',
            DayStartHour: 'Heure de départ de la journée', //'Day Start Hour',
            DayStartMinute: 'Minute de départ de la journée', //'Day Start Minute',
            DayEndHour: 'Heure de fin de la journée', //'Day End Hour',
            DayEndMinute: 'Minute de fin de la journée', //'Day End Minute',
            BloodMoonFrequency_Min: 'Fréquence minimale de la Lune de Sang', //'Minimal Blood Moon Frequency',
            BloodMoonFrequency_Max: 'Fréquence maximale de la Lune de Sang', //''Maximal Blood Moon Frequency',
            BloodMoonBuff: 'BUFF de la Lune de Sang', // TRAD À REVOIR BUFF ???? 'Blood Moon Buff'
        },
        VampireStatModifiers: {
            MaxHealthModifier: 'Santé max', //'Max Health',
            MaxEnergyModifier: 'Énergie max', //'Max Energy',
            PhysicalPowerModifier: 'Pouvoir physique', //'Physical Power',
            SpellPowerModifier: 'Pouvoir magique', //'Spell Power',
            ResourcePowerModifier: 'Pouvoir des ressources', // TRAD À CONFIRMER 'Resource Power',
            SiegePowerModifier: 'Pouvoir des siège', //'Siege Power',
            DamageReceivedModifier: 'Dégâts reçus', //'Damage Received',
            ReviveCancelDelay: 'Délai d\'annulation des ranimations', // TRAD À CONFIRMER Revive Cancel Delay'
        },
        UnitStatModifiers_Global: {
            MaxHealthModifier: 'Santé maximale pour les unités standards', //'Maximum Health for standard units',
            PowerModifier: 'Pouvoir pour les unités standards', //'Power for standard units'
        },
        UnitStatModifiers_VBlood: {
            MaxHealthModifier: 'Santé maximale pour les unités V Blood', //'Maximum Health for V Blood units',
            PowerModifier: 'Pouvoir pour les unités V Blood', //'Power for V Blood units'
        },
        EquipmentStatModifiers_Global: {
            MaxEnergyModifier: 'Énergie maximale', //'Maximum Energy',
            MaxHealthModifier: 'Santé maximale', //'Maximum Health',
            ResourceYieldModifier: 'Rendement des ressources', //'Resource Yield',
            PhysicalPowerModifier: 'Pouvoir physique', //'Physical Power',
            SpellPowerModifier: 'Pouvoir magique', //'Spell Power',
            SiegePowerModifier: 'Pouvoir des sièges', //'Siege Power',
            MovementSpeedModifier: 'Vitesse des mouvements', //'Movement Speed'
        },
        CastleStatModifiers_Global: {
            TickPeriod: 'Période d\'un tick', //TRAD : pas sûr qu'il existe une trad fr pour tick (éventuellement "unité de temps" mais ça fait bizarre) 'Tick Period',
            DamageResistance: 'Résistance aux dégâts', //'Damage Resistance',
            SafetyBoxLimit: 'Limite de sécurité de la box', // TRAD À REVOIR, 'Safety Box Limit',
            TombLimit: 'Limite des tombes', // TRAD éventuellement traduire TOMB par Mausolée ou bien sépulture en fonction du contexte du jeu, 'Tomb Limit',
            VerminNestLimit: 'Limite des nids de Vermin', // TRAD : nom Vermin à traduire ? c'est un nom propre dans le jeu ?, 'Vermin Nest Limit',
            PrisonCellLimit: 'Limite des cellules de prison', //'Prison Cell Limit',
            PylonPenalties: {
                Range1: {
                    Percentage: 'Pourcentage de la portée 1', //'Range 1 Percentage',
                    Lower: 'Minimum de la Portée 1', //'Range 1 Lower',
                    Higher: 'Maximum de la Portée 1', //'Range 1 Higher'
                },
                Range2: {
                    Percentage: 'Pourcentage de la portée 2', //'Range 2 Percentage',
                    Lower: 'Minimum de la Portée 2', //'Range 2 Lower',
                    Higher: 'Maximum de la Portée 2', //'Range 2 Higher'
                },
                Range3: {
                    Percentage: 'Pourcentage de la portée 3', //'Range 3 Percentage',
                    Lower: 'Minimum de la Portée 3', //'Range 3 Lower',
                    Higher: 'Maximum de la Portée 3', //'Range 3 Higher'
                },
                Range4: {
                    Percentage: 'Pourcentage de la portée 4', //'Range 4 Percentage',
                    Lower: 'Minimum de la Portée 4', //'Range 4 Lower',
                    Higher: 'Maximum de la Portée 4', //'Range 4 Higher'
                },
                Range5: {
                    Percentage: 'Pourcentage de la portée 5', //'Range 5 Percentage',
                    Lower: 'Minimum de la Portée 5', //'Range 5 Lower',
                    Higher: 'Maximum de la Portée 5', //'Range 5 Higher'
                },
            },
            FloorPenalties: {
                Range1: {
                    Percentage: 'Pourcentage de la portée 1', //'Range 1 Percentage',
                    Lower: 'Minimum de la Portée 1', //'Range 1 Lower',
                    Higher: 'Maximum de la Portée 1', //'Range 1 Higher'
                },
                Range2: {
                    Percentage: 'Pourcentage de la portée 2', //'Range 2 Percentage',
                    Lower: 'Minimum de la Portée 2', //'Range 2 Lower',
                    Higher: 'Maximum de la Portée 2', //'Range 2 Higher'
                },
                Range3: {
                    Percentage: 'Pourcentage de la portée 3', //'Range 3 Percentage',
                    Lower: 'Minimum de la Portée 3', //'Range 3 Lower',
                    Higher: 'Maximum de la Portée 3', //'Range 3 Higher'
                },
                Range4: {
                    Percentage: 'Pourcentage de la portée 4', //'Range 4 Percentage',
                    Lower: 'Minimum de la Portée 4', //'Range 4 Lower',
                    Higher: 'Maximum de la Portée 4', //'Range 4 Higher'
                },
                Range5: {
                    Percentage: 'Pourcentage de la portée 5', //'Range 5 Percentage',
                    Lower: 'Minimum de la Portée 5', //'Range 5 Lower',
                    Higher: 'Maximum de la Portée 5', //'Range 5 Higher'
                }
            },
            HeartLimits: {
                Level: 'Niveau {level}', //'Level {level}',
                FloorLimit: 'Limite d\'étage', // TRAD à confirmer avec le contexte "floor" = étage, sol ?? 'Floor Limit',
                ServantLimit: 'Limite de serviteurs', //'Servant Limit',
                HeightLimit: 'Limite de hauteur', //'Height Limit',
                Level1: {
                    FloorLimit: 'Limite d\'étage pour le niveau 1', //TRAD à confirmer 'Level 1 Floor Limit',
                    ServantLimit: 'Limite de serviteurs pour le niveau 1', //'Level 1 Servant Limit',
                    HeightLimit: 'Limite de hauteur pour le niveau 1', //'Level 1 Height Limit'
                },
                Level2: {
                    FloorLimit: 'Limite d\'étage pour le niveau 2', //'Level 2 Floor Limit',
                    ServantLimit: 'Limite de serviteurs pour le niveau 2', //'Level 2 Servant Limit',
                    HeightLimit: 'Limite de hauteur pour le niveau 2', //'Level 2 Height Limit'
                },
                Level3: {
                    FloorLimit: 'Limite d\'étage pour le niveau 3', //'Level 3 Floor Limit',
                    ServantLimit: 'Limite de serviteurs pour le niveau 3', //'Level 3 Servant Limit',
                    HeightLimit: 'Limite de hauteur pour le niveau 3', //'Level 3 Height Limit'
                },
                Level4: {
                    FloorLimit: 'Limite d\'étage pour le niveau 4', //'Level 4 Floor Limit',
                    ServantLimit: 'Limite de serviteurs pour le niveau 4', //'Level 4 Servant Limit',
                    HeightLimit: 'Limite de hauteur pour le niveau 4', //'Level 4 Height Limit'
                },
                Level5: {
                    FloorLimit: 'Limite d\'étage pour le niveau 5', //'Level 5 Floor Limit',
                    ServantLimit: 'Limite de serviteurs pour le niveau 5', //'Level 5 Servant Limit',
                    HeightLimit: 'Limite de hauteur pour le niveau 5', //'Level 5 Height Limit'
                }
            },
            CastleLimit: 'Limite du château', //'Castle Limit',
        },
        PlayerInteractionSettings: {
            TimeZone: 'Zone de temps', //'TimeZone',
            Start: 'Début', // TRAD à confirmer en fonction du contexte. On peut traduire 'Commencer', 'Start',
            StartHour: 'Heure de départ', //'Start Hour',
            StartMinute: 'Minute de départ', // 'Start Minute',
            End: 'Fin', //TRAD à confirmer en fonction du contexte. On peut traduire "Finir" 'End',
            EndHour: 'Heure de fin', //'End Hour',
            EndMinute: 'Minute de fin', //'End Minute',

            //-----------------------------------------------------------------------------
            //        FIN TRADUCTION PHILIPPE LE 01/06/2023 à 15h58
            //-----------------------------------------------------------------------------

            VSPlayerWeekdayTime: {
                StartHour: 'VS Player Weekday Time Start Hour',
                StartMinute: 'VS Player Weekday Time Start Minute',
                EndHour: 'VS Player Weekday Time End Hour',
                EndMinute: 'VS Player Weekday Time End Minute'
            },
            VSPlayerWeekendTime: {
                StartHour: 'VS Player Weekend Time Start Hour',
                StartMinute: 'VS Player Weekend Time Start Minute',
                EndHour: 'VS Player Weekend Time End Hour',
                EndMinute: 'VS Player Weekend Time End Minute'
            },
            VSCastleWeekdayTime: {
                StartHour: 'VS Castle Weekday Time Start Hour',
                StartMinute: 'VS Castle Weekday Time Start Minute',
                EndHour: 'VS Castle Weekday Time End Hour',
                EndMinute: 'VS Castle Weekday Time End Minute'
            },
            VSCastleWeekendTime: {
                StartHour: 'VS Castle Weekend Time Start Hour',
                StartMinute: 'VS Castle Weekend Time Start Minute',
                EndHour: 'VS Castle Weekend Time End Hour',
                EndMinute: 'VS Castle Weekend Time End Minute'
            },
        }
    },
    group: {
        MainSettings: 'Main Settings',
        Inactivity: 'Inactivity',
        Modifiers: 'Modifiers Settings',
        CastleSettings: 'Castle Settings'
    },
    subgroup: {
        Configuration: 'Configuration',
        Limits: 'Limits',
        Unlocks: 'Unlocks',
        PylonPenalties: 'Pylon Penalties',
        FloorPenalties: 'Floor Penalties',
        HeartLimits: 'Heart Limits',
        VSPlayerWeekdayTime: 'VS Player Weekday',
        VSPlayerWeekendTime: 'VS Player Weekend',
        VSCastleWeekdayTime: 'VS Castle Weekday',
        VSCastleWeekendTime: 'VS Castle Weekend',
        GameMode: 'Game Mode',
        GameSettings: 'Game Settings',
        InventoryAndLoot: 'Inventory And Loot',
        GameTimeModifiers: 'Game Time',
        VampireStatModifiers: 'Vampire Statistics',
        UnitStatModifiers: 'Unit Statistics',
        EquipmentStatModifiers: 'Equipment Statistics',
        CastleStatModifiers: 'Castle Statistics',
        PlayerInteractionSettings: 'Player Interaction Settings',
        CostModifiers: 'Costs',
        RateModifiers: 'Rates'
    },
    values: {
        GameModeType: {
            PvP: 'PvP',
            PvE: 'PvE'
        },
        CastleDamageMode: {
            Never: 'Never',
            Always: 'Always',
            TimeRestricted: 'Time Restricted'
        },
        SiegeWeaponHealth: {
            VeryLow: 'Very Low (500)',
            Low: 'Low (1000)',
            Normal: 'Normal (1500)',
            High: 'High (2000)',
            VeryHigh: 'Very High (2500)'
        },
        PlayerDamageMode: {
            Always: 'Always',
            TimeRestricted: 'Time Restricted'
        },
        CastleHeartDamageMode: {
            CanBeSeizedOrDestroyedByPlayers: 'Can be seized or destroyed by players',
            CanBeDestroyedOnlyWhenDecaying: 'Can be destroyed only when decaying',
            CanBeDestroyedByPlayers: 'Can be destroyed by players'
        },
        PvPProtectionMode: {
            Disabled: 'Disabled (0)',
            VeryShort: 'Very short (15 minutes)',
            Short: 'Short (30 minutes)',
            Medium: 'Medium (1 hour)',
            Long: 'Long (2 hours)'
        },
        DeathContainerPermission: {
            Anyone: 'Everyone can loot the body',
            ClanMembers: 'Only self and clan members may loot the body',
            OnlySelf: 'Only self may loot the body'
        },
        RelicSpawnType: {
            Unique: 'Unique',
            Plentiful: 'Plentiful'
        },
        StarterEquipmentId: {
            none: 'No Starter Equipment',
            copper: 'Copper Equipment (Lvl 30)',
            iron: 'Iron Equipment (Lvl 50)',
            darkSilver: 'Dark Silver Equipment (Lvl 70)',
            sanguine: 'Sanguine Equipment (Level 80)'
        },
        StarterResourcesId: {
            none: 'No Starter Resource',
            copper: 'Copper Material (Lvl 30)',
            iron: 'Iron Material (Lvl 50)',
            darkSilver: 'Dark Silver Material (Lvl 70)'
        },
        TimeZone: {
            Local: 'Local System Time',
            UTC: 'Coordinated Universal Time',
            PST: 'Pacific Standard Time (UTC -8)',
            CET: 'Central European Time (UTC + 1)',
            CST: 'China Standard Time (UTC + 8)'
        }
    },
    descriptions: {
        SiegeWeaponHealth: 'The Siege Golem Health',
        PlayerDamageMode: 'You can select when players can damage other players (Disabled in PvE)',
        CastleHeartDamageMode: 'Defines interactions with hostile Castle Hearts',
        PvPProtectionMode: 'The amount of time players get after entering a PvP server during which they cannot be hurt by other players',
        DeathContainerPermission: 'Specifies who is permitted to loot a player’s body after death',
        RelicSpawnType: 'Establishes whether soul shard objects are unique (one of each per server) or if a new one spawns each time a soul shard bearer is defeated',
        CanLootEnemyContainers: 'If players may loot enemy stashes, containers, and crafting stations',
        BloodBoundEquipment: 'When enabled, most equipment will not be dropped upon death',
        TeleportBoundItems: 'When enabled, some items will prevent you from using waygates',
        AllowGlobalChat: 'Allow players to write messages that all players on the server can read',
        AllWaypointsUnlocked: 'Do NOT change this. It does not work and breaks the game at the moment',
        FreeCastleClaim: 'Seizing an enemy player’s castle heart requires no materials',
        FreeCastleDestroy: 'Destroying an enemy player’s castle heart requires no materials',
        InactivityKillEnabled: 'Inactive players are automatically killed after a set duration',
        InactivityKillTimeMin: 'Minimum timer before an inactive player is killed in seconds, based on gear level',
        InactivityKillTimeMax: 'Maximum timer before an inactive player is killed in seconds, based on gear level (Currently breaks the game if changed)',
        InactivityKillSafeTimeAddition: 'Additional time before an inactive player is killed, in seconds, when standing in a castle territory (Currently breaks the game if changed)',
        InactivityKillTimerMaxItemLevel: 'The maximum gear level that the inactivity min and max timers are based on from 1 to this value (Currently breaks the game if changed)',
        DisableDisconnectedDeadEnabled: 'If dead disconnected players are disabled',
        DisableDisconnectedDeadTimer: 'The time for a disconnected dead player to become disabled',
        InventoryStacksModifier: 'Multiplies the amount of items that can be combined into a single stack',
        DropTableModifier_General: 'Multiplies all drop tables with this factor, granting more or less drops from kills and chests',
        DropTableModifier_Missions: 'Multiplies the amount of loot received from successful servant hunts',
        MaterialYieldModifier_Global: 'Multiplies the amount of materials received from harvesting resource nodes',
        BloodEssenceYieldModifier: 'Multiplies the amount of blood essence received from defeating enemies',
        PvPVampireRespawnModifier: 'Multiplies the additional respawn duration players suffer from being slain in PvP',
        CastleMinimumDistanceInFloors: 'The number of minimum tiles where players can place a castle heart and/or floors next to another heart',
        ClanSize: 'For Example, the number of players that can join a single clan. Players in a clan can rise together, share progress and build castles together.',
        BloodDrainModifier: 'Rate for how quickly players lose blood. A higher rate results in higher blood consumption',
        DurabilityDrainModifier: 'Multiplies the amount of durability suffered from dealing or receiving damage',
        GarlicAreaStrengthModifier: 'Affects the rate of how quickly garlic stacks when exposed',
        HolyAreaStrengthModifier: 'Multiplies the effect of the Holy element',
        SilverStrengthModifier: 'Affects the damage received when carrying silver items',
        SunDamageModifier: 'Affects the duration a player may stand in the sun before starting to take damage',
        CastleDecayRateModifier: 'Rate for how quickly a castle deteriorates when the Castle Heart has run out of Blood Essence',
        CastleBloodEssenceDrainModifier: 'Rate for how quickly a castle consumes blood essence. A higher rate results in higher blood essence consumption',
        CastleSiegeTimer: 'The amount of time a castle is deemed as breached when enemy players break through the outer defenses. Players may not construct new structures or walls while a castle is breached and all structures are susceptible to damage while in this state. Time is defined in seconds.',
        CastleUnderAttackTimer: 'The amount of time where players are blocked from building structures or walls while being under attack. A castle is deemed under attack whenever enemy players manage to deal damage to any wall or door using explosives or siege golems.',
        BuildCostModifier: 'Multiplies the amount of materials required to build structures.',
        RecipeCostModifier: 'Multiplies the cost of crafting items.',
        CraftRateModifier: 'The rate for crafting items and equipment in crafting stations, a higher rate results in more rapid crafting (not refinement stations) ',
        RefinementCostModifier: 'Multiplies the cost of refining items.',
        RefinementRateModifier: 'Rate for how quickly materials are refined. A higher rate result in more rapid refinement.',
        DismantleResourceModifier: 'The material reimbursement players receive from dismantling a structure.',
        ServantConvertRateModifier: 'Rate for how quickly humans turn into servants. A higher rate result in more rapid conversion.',
        RepairCostModifier: 'Modifies the cost for repairing an item',
        Death_DurabilityFactorLoss: 'The amount of durability loss that equipment suffer upon death when defeated in PvP. Players are deemed as in PvP for a duration after dealing damage to another player or receiving damage from another player.',
        Death_DurabilityLossFactorAsResources: 'Durability loss suffered upon death is dropped as materials. This value defines the amount of materials that are either lost or dropped. A value of 0 results in all materials being lost while a value of 1 results in all materials being dropped.',

    },
    diff: {
        title: 'Game Settings Not Applied !',
        text: 'Game Settings have received {size} changes, you must restart the server to apply them !'
    },
    diffModal: {
        title: 'Game Settings Diffs'
    }
}
