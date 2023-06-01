export default {
    title: 'Game Settings',
    edit: 'Edit Game Settings',
    fields: {
        GameModeType: 'Game Mode Type',
        CastleDamageMode: 'Caste Damage Mode',
        SiegeWeaponHealth: 'Siege Weapon Health',
        PlayerDamageMode: 'Player Damage Mode',
        CastleHeartDamageMode: 'Castel Heart Damage Mode',
        PvPProtectionMode: 'PvP Protection Mode',
        DeathContainerPermission: 'Death Container Permissions',
        RelicSpawnType: 'Relic Spawn Type',
        CanLootEnemyContainers: 'Can Loot Enemy Containers',
        BloodBoundEquipment: 'Blood Bound Equipment',
        TeleportBoundItems: 'Teleport Bound Items',
        AllowGlobalChat: 'Allow Global Chat',
        AllWaypointsUnlocked: 'All Waypoints Unlocked',
        FreeCastleClaim: 'Free Castle Claim',
        FreeCastleDestroy: 'Free Castle Destroy',
        InactivityKillEnabled: 'Inactivity Kill Enabled',
        InactivityKillTimeMin: 'Inactivity Kill Time Minimum',
        InactivityKillTimeMax: 'Inactivity Kill Time Maximum',
        InactivityKillSafeTimeAddition: 'Inactivity Kill Safe Time Addition',
        InactivityKillTimerMaxItemLevel: 'Inactivity Kill Timer Max Item Level',
        DisableDisconnectedDeadEnabled: 'Disable Disconnected Dead Enabled',
        DisableDisconnectedDeadTimer: 'Disable Disconnected Dead Timer',
        InventoryStacksModifier: 'Inventory Stacks',
        DropTableModifier_General: 'Drop Table : General',
        DropTableModifier_Missions: 'Drop Table : Missions',
        MaterialYieldModifier_Global: 'Material Yield',
        BloodEssenceYieldModifier: 'Blood Essence Yield',
        JournalVBloodSourceUnitMaxDistance: 'Journal V Blood Source Unit Max Distance',
        PvPVampireRespawnModifier: 'PvP Vampire Respawn',
        CastleMinimumDistanceInFloors: 'Castle Minimum Distance in Floors',
        ClanSize: 'Clan Size',
        BloodDrainModifier: 'Blood Drain',
        DurabilityDrainModifier: 'Durability Drain',
        GarlicAreaStrengthModifier: 'Garlic Area Strength',
        HolyAreaStrengthModifier: 'Holy Area Strength',
        SilverStrengthModifier: 'Silver Strength',
        SunDamageModifier: 'Sun Damage',
        CastleDecayRateModifier: 'Castle Decay Rate',
        CastleBloodEssenceDrainModifier: 'Castle Blood Essence Drain',
        CastleSiegeTimer: 'Castle Siege Timer',
        CastleUnderAttackTimer: 'Castle Under Attack Timer',
        AnnounceSiegeWeaponSpawn: 'Announce Siege Weapong Spawn',
        ShowSiegeWeaponMapIcon: 'Show Siege Weapon Map Icon',
        BuildCostModifier: 'Build Cost',
        RecipeCostModifier: 'Recipe Cost',
        CraftRateModifier: 'Craft Rate',
        ResearchCostModifier: 'Research Cost',
        RefinementCostModifier: 'Refinement Cost',
        RefinementRateModifier: 'Refinement Rate',
        ResearchTimeModifier: 'Research Time',
        DismantleResourceModifier: 'Dismantle Resource',
        ServantConvertRateModifier: 'Servant Convert Rate',
        RepairCostModifier: 'Repair Cost',
        Death_DurabilityFactorLoss: 'Death Durability Factor Loss',
        Death_DurabilityLossFactorAsResources: 'Death Durability Resource Factor Loss',
        StarterEquipmentId: 'Starter Equipment Id',
        StarterResourcesId: 'Starter Resources Id',
        GameTimeModifiers: {
            DayDurationInSeconds: 'Day Duration In Seconds',
            DayStartHour: 'Day Start Hour',
            DayStartMinute: 'Day Start Minute',
            DayEndHour: 'Day End Hour',
            DayEndMinute: 'Day End Minute',
            BloodMoonFrequency_Min: 'Minimal Blood Moon Frequency',
            BloodMoonFrequency_Max: 'Maximal Blood Moon Frequency',
            BloodMoonBuff: 'Blood Moon Buff'
        },
        VampireStatModifiers: {
            MaxHealthModifier: 'Max Health',
            MaxEnergyModifier: 'Max Energy',
            PhysicalPowerModifier: 'Physical Power',
            SpellPowerModifier: 'Spell Power',
            ResourcePowerModifier: 'Resource Power',
            SiegePowerModifier: 'Siege Power',
            DamageReceivedModifier: 'Damage Received',
            ReviveCancelDelay: 'Revive Cancel Delay'
        },
        UnitStatModifiers_Global: {
            MaxHealthModifier: 'Maximum Health for standard units',
            PowerModifier: 'Power for standard units'
        },
        UnitStatModifiers_VBlood: {
            MaxHealthModifier: 'Maximum Health for V Blood units',
            PowerModifier: 'Power for V Blood units'
        },
        EquipmentStatModifiers_Global: {
            MaxEnergyModifier: 'Maximum Energy',
            MaxHealthModifier: 'Maximum Health',
            ResourceYieldModifier: 'Resource Yield',
            PhysicalPowerModifier: 'Physical Power',
            SpellPowerModifier: 'Spell Power',
            SiegePowerModifier: 'Siege Power',
            MovementSpeedModifier: 'Movement Speed'
        },
        CastleStatModifiers_Global: {
            TickPeriod: 'Tick Period',
            DamageResistance: 'Damage Resistance',
            SafetyBoxLimit: 'Safety Box Limit',
            TombLimit: 'Tomb Limit',
            VerminNestLimit: 'Vermin Nest Limit',
            PrisonCellLimit: 'Prison Cell Limit',
            PylonPenalties: {
                Range1: {
                    Percentage: 'Range 1 Percentage',
                    Lower: 'Range 1 Lower',
                    Higher: 'Range 1 Higher'
                },
                Range2: {
                    Percentage: 'Range 2 Percentage',
                    Lower: 'Range 2 Lower',
                    Higher: 'Range 2 Higher'
                },
                Range3: {
                    Percentage: 'Range 3 Percentage',
                    Lower: 'Range 3 Lower',
                    Higher: 'Range 3 Higher'
                },
                Range4: {
                    Percentage: 'Range 4 Percentage',
                    Lower: 'Range 4 Lower',
                    Higher: 'Range 4 Higher'
                },
                Range5: {
                    Percentage: 'Range 5 Percentage',
                    Lower: 'Range 5 Lower',
                    Higher: 'Range 5 Higher'
                },
            },
            FloorPenalties: {
                Range1: {
                    Percentage: 'Range 1 Percentage',
                    Lower: 'Range 1 Lower',
                    Higher: 'Range 1 Higher'
                },
                Range2: {
                    Percentage: 'Range 2 Percentage',
                    Lower: 'Range 2 Lower',
                    Higher: 'Range 2 Higher'
                },
                Range3: {
                    Percentage: 'Range 3 Percentage',
                    Lower: 'Range 3 Lower',
                    Higher: 'Range 3 Higher'
                },
                Range4: {
                    Percentage: 'Range 4 Percentage',
                    Lower: 'Range 4 Lower',
                    Higher: 'Range 4 Higher'
                },
                Range5: {
                    Percentage: 'Range 5 Percentage',
                    Lower: 'Range 5 Lower',
                    Higher: 'Range 5 Higher'
                }
            },
            HeartLimits: {
                Level: 'Level {level}',
                FloorLimit: 'Floor Limit',
                ServantLimit: 'Servant Limit',
                HeightLimit: 'Height Limit',
                Level1: {
                    FloorLimit: 'Level 1 Floor Limit',
                    ServantLimit: 'Level 1 Servant Limit',
                    HeightLimit: 'Level 1 Height Limit'
                },
                Level2: {
                    FloorLimit: 'Level 2 Floor Limit',
                    ServantLimit: 'Level 2 Servant Limit',
                    HeightLimit: 'Level 2 Height Limit'
                },
                Level3: {
                    FloorLimit: 'Level 3 Floor Limit',
                    ServantLimit: 'Level 3 Servant Limit',
                    HeightLimit: 'Level 3 Height Limit'
                },
                Level4: {
                    FloorLimit: 'Level 4 Floor Limit',
                    ServantLimit: 'Level 4 Servant Limit',
                    HeightLimit: 'Level 4 Height Limit'
                },
                Level5: {
                    FloorLimit: 'Level 5 Floor Limit',
                    ServantLimit: 'Level 5 Servant Limit',
                    HeightLimit: 'Level 5 Height Limit'
                }
            },
            CastleLimit: 'Castle Limit',
        },
        PlayerInteractionSettings: {
            TimeZone: 'TimeZone',
            Start: 'Start',
            StartHour: 'Start Hour',
            StartMinute: 'Start Minute',
            End: 'End',
            EndHour: 'End Hour',
            EndMinute: 'End Minute',
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

        // MODIFIE APRES AVOIR ENVOYE LE FICHIER AUX TRADUCTEURS
        GameModeType: 'Select the Type of Game for the server : PvP or PvE',
    },
    diff: {
        title: 'Game Settings Not Applied !',
        text: 'Game Settings have received {size} changes, you must restart the server to apply them !'
    },
    diffModal: {
        title: 'Game Settings Diffs'
    }
}
