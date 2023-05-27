import {i18n} from "@/i18n";
import {validators} from "vue-form-generator";

export const gameSettingsDefinitions = {
    tabs: [
        {
            title: i18n.t('gameSettings.group.MainSettings'),
            groups: [
                {
                    legend: i18n.t('gameSettings.subgroup.GameMode'),
                    fields: [
                        {
                            type: 'select',
                            label: i18n.t('gameSettings.fields.GameModeType'),
                            model: 'GameModeType',
                            values: [
                                {id: 'PvE', name: i18n.t('gameSettings.values.GameModeType.PvE')},
                                {id: 'PvP', name: i18n.t('gameSettings.values.GameModeType.PvP')}
                            ],
                            required: true
                        },
                        {
                            type: 'select',
                            label: i18n.t('gameSettings.fields.CastleDamageMode'),
                            model: 'CastleDamageMode',
                            values: [
                                {id: 'Never', name: i18n.t('gameSettings.values.CastleDamageMode.Never')},
                                {id: 'Always', name: i18n.t('gameSettings.values.CastleDamageMode.Always')},
                                {
                                    id: 'TimeRestricted',
                                    name: i18n.t('gameSettings.values.CastleDamageMode.TimeRestricted')
                                }
                            ],
                            required: true
                        },
                        {
                            type: 'select',
                            label: i18n.t('gameSettings.fields.SiegeWeaponHealth'),
                            model: 'SiegeWeaponHealth',
                            values: [
                                {id: 'VeryLow', name: i18n.t('gameSettings.values.SiegeWeaponHealth.VeryLow')},
                                {id: 'Low', name: i18n.t('gameSettings.values.SiegeWeaponHealth.Low')},
                                {id: 'Normal', name: i18n.t('gameSettings.values.SiegeWeaponHealth.Normal')},
                                {id: 'High', name: i18n.t('gameSettings.values.SiegeWeaponHealth.High')},
                                {id: 'VeryHigh', name: i18n.t('gameSettings.values.SiegeWeaponHealth.VeryHigh')}
                            ],
                            required: true
                        },
                        {
                            type: 'select',
                            label: i18n.t('gameSettings.fields.PlayerDamageMode'),
                            model: 'PlayerDamageMode',
                            values: [
                                {id: 'Always', name: i18n.t('gameSettings.values.PlayerDamageMode.Always')},
                                {
                                    id: 'TimeRestricted',
                                    name: i18n.t('gameSettings.values.PlayerDamageMode.TimeRestricted')
                                },
                            ],
                            required: true
                        },
                        {
                            type: 'select',
                            label: i18n.t('gameSettings.fields.CastleHeartDamageMode'),
                            model: 'CastleHeartDamageMode',
                            values: [
                                {
                                    id: 'CanBeSeizedOrDestroyedByPlayers',
                                    name: i18n.t('gameSettings.values.CastleHeartDamageMode.CanBeSeizedOrDestroyedByPlayers')
                                },
                                {
                                    id: 'CanBeDestroyedOnlyWhenDecaying',
                                    name: i18n.t('gameSettings.values.CastleHeartDamageMode.CanBeDestroyedOnlyWhenDecaying')
                                },
                                {
                                    id: 'CanBeDestroyedByPlayers',
                                    name: i18n.t('gameSettings.values.CastleHeartDamageMode.CanBeDestroyedByPlayers')
                                },
                            ],
                            required: true
                        },
                        {
                            type: 'select',
                            label: i18n.t('gameSettings.fields.PvPProtectionMode'),
                            model: 'PvPProtectionMode',
                            values: [
                                {id: 'Disabled', name: i18n.t('gameSettings.values.PvPProtectionMode.Disabled')},
                                {id: 'VeryShort', name: i18n.t('gameSettings.values.PvPProtectionMode.VeryShort')},
                                {id: 'Short', name: i18n.t('gameSettings.values.PvPProtectionMode.Short')},
                                {id: 'Medium', name: i18n.t('gameSettings.values.PvPProtectionMode.Medium')},
                                {id: 'Long', name: i18n.t('gameSettings.values.PvPProtectionMode.Long')},
                            ],
                            required: true
                        },
                        {
                            type: 'select',
                            label: i18n.t('gameSettings.fields.DeathContainerPermission'),
                            model: 'DeathContainerPermission',
                            values: [
                                {id: 'Anyone', name: i18n.t('gameSettings.values.DeathContainerPermission.Anyone')},
                                {
                                    id: 'ClanMembers',
                                    name: i18n.t('gameSettings.values.DeathContainerPermission.ClanMembers')
                                },
                                {id: 'OnlySelf', name: i18n.t('gameSettings.values.DeathContainerPermission.OnlySelf')}
                            ],
                            required: true
                        },
                        {
                            type: 'select',
                            label: i18n.t('gameSettings.fields.RelicSpawnType'),
                            model: 'RelicSpawnType',
                            values: [
                                {id: 'Unique', name: i18n.t('gameSettings.values.RelicSpawnType.Unique')},
                                {id: 'Plentiful', name: i18n.t('gameSettings.values.RelicSpawnType.Plentiful')},
                            ],
                            required: true
                        },
                        {
                            type: 'checkbox',
                            label: i18n.t('gameSettings.fields.CanLootEnemyContainers'),
                            model: 'CanLootEnemyContainers'
                        }
                    ]
                },
                {
                    legend: i18n.t('gameSettings.subgroup.GameSettings'),
                    fields: [
                        {
                            type: 'checkbox',
                            label: i18n.t('gameSettings.fields.BloodBoundEquipment'),
                            model: 'BloodBoundEquipment'
                        },
                        {
                            type: 'checkbox',
                            label: i18n.t('gameSettings.fields.TeleportBoundItems'),
                            model: 'TeleportBoundItems'
                        },
                        {
                            type: 'checkbox',
                            label: i18n.t('gameSettings.fields.AllowGlobalChat'),
                            model: 'AllowGlobalChat'
                        },
                        {
                            type: 'checkbox',
                            label: i18n.t('gameSettings.fields.AllWaypointsUnlocked'),
                            model: 'AllWaypointsUnlocked'
                        },
                        {
                            type: 'checkbox',
                            label: i18n.t('gameSettings.fields.FreeCastleClaim'),
                            model: 'FreeCastleClaim'
                        },
                        {
                            type: 'checkbox',
                            label: i18n.t('gameSettings.fields.FreeCastleDestroy'),
                            model: 'FreeCastleDestroy'
                        },
                        {
                            type: 'input',
                            inputType: 'number',
                            label: i18n.t('gameSettings.fields.CastleMinimumDistanceInFloors'),
                            model: 'CastleMinimumDistanceInFloors',
                            validator: validators.integer,
                            min: 1,
                            max: 10
                        },
                        {
                            type: 'input',
                            inputType: 'number',
                            label: i18n.t('gameSettings.fields.ClanSize'),
                            model: 'ClanSize',
                            validator: validators.integer,
                            min: 1,
                            max: 10
                        },
                        {
                            type: 'input',
                            inputType: 'number',
                            label: i18n.t('gameSettings.fields.StarterEquipmentId'),
                            model: 'StarterEquipmentId',
                            validator: validators.integer
                        },
                        {
                            type: 'input',
                            inputType: 'number',
                            label: i18n.t('gameSettings.fields.StarterResourcesId'),
                            model: 'StarterResourcesId',
                            validator: validators.integer
                        }
                    ]
                },
                {
                    legend: i18n.t('gameSettings.group.Inactivity'),
                    fields: [
                        {
                            type: 'checkbox',
                            label: i18n.t('gameSettings.fields.InactivityKillEnabled'),
                            model: 'InactivityKillEnabled'
                        },
                        {
                            type: 'input',
                            inputType: 'number',
                            label: i18n.t('gameSettings.fields.InactivityKillTimeMin'),
                            model: 'InactivityKillTimeMin',
                            disabled: true,
                            validator: validators.integer
                        },
                        {
                            type: 'input',
                            inputType: 'number',
                            label: i18n.t('gameSettings.fields.InactivityKillTimeMax'),
                            model: 'InactivityKillTimeMax',
                            disabled: true,
                            validator: validators.integer
                        },
                        {
                            type: 'input',
                            inputType: 'number',
                            label: i18n.t('gameSettings.fields.InactivityKillSafeTimeAddition'),
                            model: 'InactivityKillSafeTimeAddition',
                            disabled: true,
                            validator: validators.integer
                        },
                        {
                            type: 'input',
                            inputType: 'number',
                            label: i18n.t('gameSettings.fields.InactivityKillTimerMaxItemLevel'),
                            model: 'InactivityKillTimerMaxItemLevel',
                            disabled: true,
                            validator: validators.integer
                        },
                        {
                            type: 'checkbox',
                            label: i18n.t('gameSettings.fields.DisableDisconnectedDeadEnabled'),
                            model: 'DisableDisconnectedDeadEnabled'
                        },
                        {
                            type: 'input',
                            inputType: 'number',
                            label: i18n.t('gameSettings.fields.DisableDisconnectedDeadTimer'),
                            model: 'DisableDisconnectedDeadTimer',
                            validator: validators.integer,
                            disabled: true
                        },
                    ]
                },
                {
                    legend: i18n.t('gameSettings.subgroup.InventoryAndLoot'),
                    fields: [
                        {
                            type: 'input',
                            inputType: 'number',
                            label: i18n.t('gameSettings.fields.InventoryStacksModifier'),
                            model: 'InventoryStacksModifier',
                            validator: validators.double,
                            min: 0.25,
                            step: 0.25,
                            max: 5
                        },
                        {
                            type: 'input',
                            inputType: 'number',
                            label: i18n.t('gameSettings.fields.DropTableModifier_General'),
                            model: 'DropTableModifier_General',
                            validator: validators.double,
                            min: 0.25,
                            step: 0.25,
                            max: 5
                        },
                        {
                            type: 'input',
                            inputType: 'number',
                            label: i18n.t('gameSettings.fields.DropTableModifier_Missions'),
                            model: 'DropTableModifier_Missions',
                            validator: validators.double,
                            min: 0.25,
                            step: 0.25,
                            max: 5
                        },
                        {
                            type: 'input',
                            inputType: 'number',
                            label: i18n.t('gameSettings.fields.MaterialYieldModifier_Global'),
                            model: 'MaterialYieldModifier_Global',
                            validator: validators.double,
                            min: 0.25,
                            step: 0.25,
                            max: 5
                        },
                        {
                            type: 'input',
                            inputType: 'number',
                            label: i18n.t('gameSettings.fields.BloodEssenceYieldModifier'),
                            model: 'BloodEssenceYieldModifier',
                            validator: validators.double,
                            min: 0.25,
                            step: 0.25,
                            max: 5
                        },
                        {
                            type: 'input',
                            inputType: 'number',
                            label: i18n.t('gameSettings.fields.Death_DurabilityFactorLoss'),
                            model: 'Death_DurabilityFactorLoss',
                            validator: validators.double,
                            step: 0.125,
                            min: 0.125,
                            max: 5
                        },
                        {
                            type: 'input',
                            inputType: 'number',
                            label: i18n.t('gameSettings.fields.Death_DurabilityLossFactorAsResources'),
                            model: 'Death_DurabilityLossFactorAsResources',
                            validator: validators.double,
                            step: 0.125,
                            min: 0.125,
                            max: 5
                        },
                    ]
                }
            ]
        },
        {
            title: i18n.t('gameSettings.group.Modifiers'),
            fields: [],
            groups: [
                {
                    legend: i18n.t('gameSettings.subgroup.CostModifiers'),
                    fields: [
                        {
                            type: 'input',
                            inputType: 'number',
                            label: i18n.t('gameSettings.fields.BuildCostModifier'),
                            model: 'BuildCostModifier',
                            validator: validators.double
                        },
                        {
                            type: 'input',
                            inputType: 'number',
                            label: i18n.t('gameSettings.fields.RecipeCostModifier'),
                            model: 'RecipeCostModifier',
                            validator: validators.double
                        },
                        {
                            type: 'input',
                            inputType: 'number',
                            label: i18n.t('gameSettings.fields.RefinementCostModifier'),
                            model: 'RefinementCostModifier',
                            validator: validators.double
                        },
                        {
                            type: 'input',
                            inputType: 'number',
                            label: i18n.t('gameSettings.fields.ResearchCostModifier'),
                            model: 'ResearchCostModifier',
                            validator: validators.double
                        },
                        {
                            type: 'input',
                            inputType: 'number',
                            label: i18n.t('gameSettings.fields.DismantleResourceModifier'),
                            model: 'DismantleResourceModifier',
                            validator: validators.double
                        },
                        {
                            type: 'input',
                            inputType: 'number',
                            label: i18n.t('gameSettings.fields.RepairCostModifier'),
                            model: 'RepairCostModifier',
                            validator: validators.double
                        }
                    ]
                },
                {
                    legend: i18n.t('gameSettings.subgroup.RateModifiers'),
                    fields: [
                        {
                            type: 'input',
                            inputType: 'number',
                            label: i18n.t('gameSettings.fields.CraftRateModifier'),
                            model: 'CraftRateModifier',
                            validator: validators.double
                        },
                        {
                            type: 'input',
                            inputType: 'number',
                            label: i18n.t('gameSettings.fields.RefinementRateModifier'),
                            model: 'RefinementRateModifier',
                            validator: validators.double
                        },
                        {
                            type: 'input',
                            inputType: 'number',
                            label: i18n.t('gameSettings.fields.ServantConvertRateModifier'),
                            model: 'ServantConvertRateModifier',
                            validator: validators.double
                        },
                        {
                            type: 'input',
                            inputType: 'number',
                            label: i18n.t('gameSettings.fields.ResearchTimeModifier'),
                            model: 'ResearchTimeModifier',
                            validator: validators.double
                        },
                        {
                            type: 'input',
                            inputType: 'number',
                            label: i18n.t('gameSettings.fields.BloodDrainModifier'),
                            model: 'BloodDrainModifier',
                            validator: validators.double,
                            min: 0,
                            max: 5
                        },
                        {
                            type: 'input',
                            inputType: 'number',
                            label: i18n.t('gameSettings.fields.DurabilityDrainModifier'),
                            model: 'DurabilityDrainModifier',
                            validator: validators.double,
                            min: 0,
                            max: 5
                        },
                        {
                            type: 'input',
                            inputType: 'number',
                            label: i18n.t('gameSettings.fields.GarlicAreaStrengthModifier'),
                            model: 'GarlicAreaStrengthModifier',
                            validator: validators.double,
                            min: 0,
                            max: 5
                        },
                        {
                            type: 'input',
                            inputType: 'number',
                            label: i18n.t('gameSettings.fields.HolyAreaStrengthModifier'),
                            model: 'HolyAreaStrengthModifier',
                            validator: validators.double,
                            min: 0,
                            max: 5
                        },
                        {
                            type: 'input',
                            inputType: 'number',
                            label: i18n.t('gameSettings.fields.SilverStrengthModifier'),
                            model: 'SilverStrengthModifier',
                            validator: validators.double,
                            min: 0,
                            max: 5
                        },
                        {
                            type: 'input',
                            inputType: 'number',
                            label: i18n.t('gameSettings.fields.SunDamageModifier'),
                            model: 'SunDamageModifier',
                            validator: validators.double,
                            min: 0,
                            max: 5
                        },
                    ]
                },
                {
                    legend: i18n.t('gameSettings.subgroup.GameTimeModifiers'),
                    fields: [
                        {
                            type: 'input',
                            inputType: 'number',
                            label: i18n.t('gameSettings.fields.GameTimeModifiers.DayDurationInSeconds'),
                            model: 'GameTimeModifiers.DayDurationInSeconds',
                            validator: validators.integer
                        },
                        {
                            type: 'input',
                            inputType: 'number',
                            label: i18n.t('gameSettings.fields.GameTimeModifiers.DayStartHour'),
                            model: 'GameTimeModifiers.DayStartHour',
                            min: 0,
                            max: 23,
                            validator: validators.integer
                        },
                        {
                            type: 'input',
                            inputType: 'number',
                            label: i18n.t('gameSettings.fields.GameTimeModifiers.DayStartMinute'),
                            model: 'GameTimeModifiers.DayStartMinute',
                            min: 0,
                            max: 59,
                            validator: validators.integer
                        },
                        {
                            type: 'input',
                            inputType: 'number',
                            label: i18n.t('gameSettings.fields.GameTimeModifiers.DayEndHour'),
                            model: 'GameTimeModifiers.DayEndHour',
                            min: 0,
                            max: 23,
                            validator: validators.integer
                        },
                        {
                            type: 'input',
                            inputType: 'number',
                            label: i18n.t('gameSettings.fields.GameTimeModifiers.DayEndMinute'),
                            model: 'GameTimeModifiers.DayEndMinute',
                            min: 0,
                            max: 59,
                            validator: validators.integer
                        },
                        {
                            type: 'input',
                            inputType: 'number',
                            label: i18n.t('gameSettings.fields.GameTimeModifiers.BloodMoonFrequency_Min'),
                            model: 'GameTimeModifiers.BloodMoonFrequency_Min',
                            min: 0,
                            validator: validators.integer
                        },
                        {
                            type: 'input',
                            inputType: 'number',
                            label: i18n.t('gameSettings.fields.GameTimeModifiers.BloodMoonFrequency_Max'),
                            model: 'GameTimeModifiers.BloodMoonFrequency_Max',
                            min: 0,
                            validator: validators.integer
                        },
                        {
                            type: 'input',
                            inputType: 'number',
                            label: i18n.t('gameSettings.fields.GameTimeModifiers.BloodMoonFrequency_Max'),
                            model: 'GameTimeModifiers.BloodMoonFrequency_Max',
                            min: 0,
                            validator: validators.double
                        }
                    ]
                },
                {
                    legend: i18n.t('gameSettings.subgroup.VampireStatModifiers'),
                    fields: [
                        {
                            type: 'input',
                            inputType: 'number',
                            label: i18n.t('gameSettings.fields.VampireStatModifiers.MaxHealthModifier'),
                            model: 'VampireStatModifiers.MaxHealthModifier',
                            min: 0,
                            validator: validators.double
                        },
                        {
                            type: 'input',
                            inputType: 'number',
                            label: i18n.t('gameSettings.fields.VampireStatModifiers.MaxEnergyModifier'),
                            model: 'VampireStatModifiers.MaxEnergyModifier',
                            min: 0,
                            validator: validators.double
                        },
                        {
                            type: 'input',
                            inputType: 'number',
                            label: i18n.t('gameSettings.fields.VampireStatModifiers.PhysicalPowerModifier'),
                            model: 'VampireStatModifiers.PhysicalPowerModifier',
                            min: 0,
                            validator: validators.double
                        },
                        {
                            type: 'input',
                            inputType: 'number',
                            label: i18n.t('gameSettings.fields.VampireStatModifiers.SpellPowerModifier'),
                            model: 'VampireStatModifiers.SpellPowerModifier',
                            min: 0,
                            validator: validators.double
                        },
                        {
                            type: 'input',
                            inputType: 'number',
                            label: i18n.t('gameSettings.fields.VampireStatModifiers.ResourcePowerModifier'),
                            model: 'VampireStatModifiers.ResourcePowerModifier',
                            min: 0,
                            validator: validators.double
                        },
                        {
                            type: 'input',
                            inputType: 'number',
                            label: i18n.t('gameSettings.fields.VampireStatModifiers.SiegePowerModifier'),
                            model: 'VampireStatModifiers.SiegePowerModifier',
                            min: 0,
                            validator: validators.double
                        },
                        {
                            type: 'input',
                            inputType: 'number',
                            label: i18n.t('gameSettings.fields.VampireStatModifiers.DamageReceivedModifier'),
                            model: 'VampireStatModifiers.DamageReceivedModifier',
                            min: 0,
                            validator: validators.double
                        },
                        {
                            type: 'input',
                            inputType: 'number',
                            label: i18n.t('gameSettings.fields.VampireStatModifiers.ReviveCancelDelay'),
                            model: 'VampireStatModifiers.ReviveCancelDelay',
                            min: 0,
                            validator: validators.double
                        }
                    ]
                },
                {
                    legend: i18n.t('gameSettings.subgroup.UnitStatModifiers'),
                    fields: [
                        {
                            type: 'input',
                            inputType: 'number',
                            label: i18n.t('gameSettings.fields.UnitStatModifiers_Global.MaxHealthModifier'),
                            model: 'UnitStatModifiers_Global.MaxHealthModifier',
                            min: 0,
                            validator: validators.double
                        },
                        {
                            type: 'input',
                            inputType: 'number',
                            label: i18n.t('gameSettings.fields.UnitStatModifiers_Global.PowerModifier'),
                            model: 'UnitStatModifiers_Global.PowerModifier',
                            min: 0,
                            validator: validators.double
                        },
                        {
                            type: 'input',
                            inputType: 'number',
                            label: i18n.t('gameSettings.fields.UnitStatModifiers_VBlood.MaxHealthModifier'),
                            model: 'UnitStatModifiers_Global.MaxHealthModifier',
                            min: 0,
                            validator: validators.double
                        },
                        {
                            type: 'input',
                            inputType: 'number',
                            label: i18n.t('gameSettings.fields.UnitStatModifiers_VBlood.PowerModifier'),
                            model: 'UnitStatModifiers_Global.PowerModifier',
                            min: 0,
                            validator: validators.double
                        },
                    ]
                },
                {
                    legend: i18n.t('gameSettings.subgroup.EquipmentStatModifiers'),
                    fields: [
                        {
                            type: 'input',
                            inputType: 'number',
                            label: i18n.t('gameSettings.fields.EquipmentStatModifiers_Global.MaxEnergyModifier'),
                            model: 'EquipmentStatModifiers_Global.MaxEnergyModifier',
                            min: 0,
                            validator: validators.double
                        },
                        {
                            type: 'input',
                            inputType: 'number',
                            label: i18n.t('gameSettings.fields.EquipmentStatModifiers_Global.MaxHealthModifier'),
                            model: 'EquipmentStatModifiers_Global.MaxHealthModifier',
                            min: 0,
                            validator: validators.double
                        },
                        {
                            type: 'input',
                            inputType: 'number',
                            label: i18n.t('gameSettings.fields.EquipmentStatModifiers_Global.ResourceYieldModifier'),
                            model: 'EquipmentStatModifiers_Global.ResourceYieldModifier',
                            min: 0,
                            validator: validators.double
                        },
                        {
                            type: 'input',
                            inputType: 'number',
                            label: i18n.t('gameSettings.fields.EquipmentStatModifiers_Global.PhysicalPowerModifier'),
                            model: 'EquipmentStatModifiers_Global.PhysicalPowerModifier',
                            min: 0,
                            validator: validators.double
                        },
                        {
                            type: 'input',
                            inputType: 'number',
                            label: i18n.t('gameSettings.fields.EquipmentStatModifiers_Global.SpellPowerModifier'),
                            model: 'EquipmentStatModifiers_Global.SpellPowerModifier',
                            min: 0,
                            validator: validators.double
                        },
                        {
                            type: 'input',
                            inputType: 'number',
                            label: i18n.t('gameSettings.fields.EquipmentStatModifiers_Global.SiegePowerModifier'),
                            model: 'EquipmentStatModifiers_Global.SiegePowerModifier',
                            min: 0,
                            validator: validators.double
                        },
                        {
                            type: 'input',
                            inputType: 'number',
                            label: i18n.t('gameSettings.fields.EquipmentStatModifiers_Global.MovementSpeedModifier'),
                            model: 'EquipmentStatModifiers_Global.MovementSpeedModifier',
                            min: 0,
                            validator: validators.double
                        },
                    ]
                },
            ]
        },
        {
            title: i18n.t('gameSettings.group.CastleSettings'),
            fields: [],
            groups: [
                {
                    legend: i18n.t('gameSettings.subgroup.Configuration'),
                    fields: [
                        {
                            type: 'input',
                            inputType: 'number',
                            label: i18n.t('gameSettings.fields.CastleStatModifiers_Global.TickPeriod'),
                            model: 'CastleStatModifiers_Global.TickPeriod',
                            min: 0,
                            validator: validators.double
                        },
                        {
                            type: 'input',
                            inputType: 'number',
                            label: i18n.t('gameSettings.fields.CastleStatModifiers_Global.DamageResistance'),
                            model: 'CastleStatModifiers_Global.DamageResistance',
                            min: 0,
                            validator: validators.double
                        },
                        {
                            type: 'input',
                            inputType: 'number',
                            label: i18n.t('gameSettings.fields.CastleDecayRateModifier'),
                            model: 'CastleDecayRateModifier',
                            min: 0,
                            max: 5,
                            validator: validators.double
                        },
                        {
                            type: 'input',
                            inputType: 'number',
                            label: i18n.t('gameSettings.fields.CastleBloodEssenceDrainModifier'),
                            model: 'CastleBloodEssenceDrainModifier',
                            min: 0.1,
                            step: 0.1,
                            max: 5,
                            validator: validators.double
                        },
                        {
                            type: 'input',
                            inputType: 'number',
                            label: i18n.t('gameSettings.fields.CastleSiegeTimer'),
                            model: 'CastleSiegeTimer',
                            min: 10,
                            max: 1800,
                            validator: validators.integer
                        },
                        {
                            type: 'input',
                            inputType: 'number',
                            label: i18n.t('gameSettings.fields.CastleUnderAttackTimer'),
                            model: 'CastleUnderAttackTimer',
                            min: 0,
                            max: 1800,
                            validator: validators.integer
                        },
                        {
                            type: 'checkbox',
                            label: i18n.t('gameSettings.fields.AnnounceSiegeWeaponSpawn'),
                            model: 'AnnounceSiegeWeaponSpawn'
                        },
                        {
                            type: 'checkbox',
                            label: i18n.t('gameSettings.fields.ShowSiegeWeaponMapIcon'),
                            model: 'ShowSiegeWeaponMapIcon'
                        },
                    ]
                },
                {
                    legend: i18n.t('gameSettings.subgroup.Limits'),
                    fields: [
                        {
                            type: 'input',
                            inputType: 'number',
                            label: i18n.t('gameSettings.fields.CastleStatModifiers_Global.SafetyBoxLimit'),
                            model: 'CastleStatModifiers_Global.SafetyBoxLimit',
                            min: 0,
                            validator: validators.integer
                        },
                        {
                            type: 'input',
                            inputType: 'number',
                            label: i18n.t('gameSettings.fields.CastleStatModifiers_Global.TombLimit'),
                            model: 'CastleStatModifiers_Global.TombLimit',
                            min: 0,
                            validator: validators.integer
                        },
                        {
                            type: 'input',
                            inputType: 'number',
                            label: i18n.t('gameSettings.fields.CastleStatModifiers_Global.VerminNestLimit'),
                            model: 'CastleStatModifiers_Global.VerminNestLimit',
                            min: 0,
                            validator: validators.integer
                        },
                        {
                            type: 'input',
                            inputType: 'number',
                            label: i18n.t('gameSettings.fields.CastleStatModifiers_Global.PrisonCellLimit'),
                            model: 'CastleStatModifiers_Global.PrisonCellLimit',
                            min: 0,
                            validator: validators.integer
                        },
                        {
                            type: 'input',
                            inputType: 'number',
                            label: i18n.t('gameSettings.fields.CastleStatModifiers_Global.CastleLimit'),
                            model: 'CastleStatModifiers_Global.CastleLimit',
                            min: 0,
                            validator: validators.integer
                        },
                    ],
                },
                {
                    legend: i18n.t('gameSettings.subgroup.PylonPenalties'),
                    fields: [
                        {
                            type: 'input',
                            inputType: 'number',
                            label: i18n.t('gameSettings.fields.CastleStatModifiers_Global.PylonPenalties.Range1.Percentage'),
                            model: 'CastleStatModifiers_Global.PylonPenalties.Range1.Percentage',
                            min: 0,
                            validator: validators.double
                        },
                        {
                            type: 'input',
                            inputType: 'number',
                            label: i18n.t('gameSettings.fields.CastleStatModifiers_Global.PylonPenalties.Range1.Lower'),
                            model: 'CastleStatModifiers_Global.PylonPenalties.Range1.Lower',
                            min: 0,
                            validator: validators.double
                        },
                        {
                            type: 'input',
                            inputType: 'number',
                            label: i18n.t('gameSettings.fields.CastleStatModifiers_Global.PylonPenalties.Range1.Higher'),
                            model: 'CastleStatModifiers_Global.PylonPenalties.Range1.Higher',
                            min: 0,
                            validator: validators.double
                        },
                        {
                            type: 'input',
                            inputType: 'number',
                            label: i18n.t('gameSettings.fields.CastleStatModifiers_Global.PylonPenalties.Range2.Percentage'),
                            model: 'CastleStatModifiers_Global.PylonPenalties.Range2.Percentage',
                            min: 0,
                            validator: validators.double
                        },
                        {
                            type: 'input',
                            inputType: 'number',
                            label: i18n.t('gameSettings.fields.CastleStatModifiers_Global.PylonPenalties.Range2.Lower'),
                            model: 'CastleStatModifiers_Global.PylonPenalties.Range2.Lower',
                            min: 0,
                            validator: validators.double
                        },
                        {
                            type: 'input',
                            inputType: 'number',
                            label: i18n.t('gameSettings.fields.CastleStatModifiers_Global.PylonPenalties.Range2.Higher'),
                            model: 'CastleStatModifiers_Global.PylonPenalties.Range2.Higher',
                            min: 0,
                            validator: validators.double
                        },
                        {
                            type: 'input',
                            inputType: 'number',
                            label: i18n.t('gameSettings.fields.CastleStatModifiers_Global.PylonPenalties.Range3.Percentage'),
                            model: 'CastleStatModifiers_Global.PylonPenalties.Range3.Percentage',
                            min: 0,
                            validator: validators.double
                        },
                        {
                            type: 'input',
                            inputType: 'number',
                            label: i18n.t('gameSettings.fields.CastleStatModifiers_Global.PylonPenalties.Range3.Lower'),
                            model: 'CastleStatModifiers_Global.PylonPenalties.Range3.Lower',
                            min: 0,
                            validator: validators.double
                        },
                        {
                            type: 'input',
                            inputType: 'number',
                            label: i18n.t('gameSettings.fields.CastleStatModifiers_Global.PylonPenalties.Range3.Higher'),
                            model: 'CastleStatModifiers_Global.PylonPenalties.Range3.Higher',
                            min: 0,
                            validator: validators.double
                        },
                        {
                            type: 'input',
                            inputType: 'number',
                            label: i18n.t('gameSettings.fields.CastleStatModifiers_Global.PylonPenalties.Range4.Percentage'),
                            model: 'CastleStatModifiers_Global.PylonPenalties.Range4.Percentage',
                            min: 0,
                            validator: validators.double
                        },
                        {
                            type: 'input',
                            inputType: 'number',
                            label: i18n.t('gameSettings.fields.CastleStatModifiers_Global.PylonPenalties.Range4.Lower'),
                            model: 'CastleStatModifiers_Global.PylonPenalties.Range4.Lower',
                            min: 0,
                            validator: validators.double
                        },
                        {
                            type: 'input',
                            inputType: 'number',
                            label: i18n.t('gameSettings.fields.CastleStatModifiers_Global.PylonPenalties.Range4.Higher'),
                            model: 'CastleStatModifiers_Global.PylonPenalties.Range4.Higher',
                            min: 0,
                            validator: validators.double
                        },
                        {
                            type: 'input',
                            inputType: 'number',
                            label: i18n.t('gameSettings.fields.CastleStatModifiers_Global.PylonPenalties.Range5.Percentage'),
                            model: 'CastleStatModifiers_Global.PylonPenalties.Range5.Percentage',
                            min: 0,
                            validator: validators.double
                        },
                        {
                            type: 'input',
                            inputType: 'number',
                            label: i18n.t('gameSettings.fields.CastleStatModifiers_Global.PylonPenalties.Range5.Lower'),
                            model: 'CastleStatModifiers_Global.PylonPenalties.Range5.Lower',
                            min: 0,
                            validator: validators.double
                        },
                        {
                            type: 'input',
                            inputType: 'number',
                            label: i18n.t('gameSettings.fields.CastleStatModifiers_Global.PylonPenalties.Range5.Higher'),
                            model: 'CastleStatModifiers_Global.PylonPenalties.Range5.Higher',
                            min: 0,
                            validator: validators.double
                        },
                    ]
                },
                {
                    legend: i18n.t('gameSettings.subgroup.FloorPenalties'),
                    fields: [
                        {
                            type: 'input',
                            inputType: 'number',
                            label: i18n.t('gameSettings.fields.CastleStatModifiers_Global.FloorPenalties.Range1.Percentage'),
                            model: 'CastleStatModifiers_Global.FloorPenalties.Range1.Percentage',
                            min: 0,
                            validator: validators.double
                        },
                        {
                            type: 'input',
                            inputType: 'number',
                            label: i18n.t('gameSettings.fields.CastleStatModifiers_Global.FloorPenalties.Range1.Lower'),
                            model: 'CastleStatModifiers_Global.FloorPenalties.Range1.Lower',
                            min: 0,
                            validator: validators.integer
                        },
                        {
                            type: 'input',
                            inputType: 'number',
                            label: i18n.t('gameSettings.fields.CastleStatModifiers_Global.FloorPenalties.Range1.Higher'),
                            model: 'CastleStatModifiers_Global.FloorPenalties.Range1.Higher',
                            min: 0,
                            validator: validators.integer
                        },
                        {
                            type: 'input',
                            inputType: 'number',
                            label: i18n.t('gameSettings.fields.CastleStatModifiers_Global.FloorPenalties.Range2.Percentage'),
                            model: 'CastleStatModifiers_Global.FloorPenalties.Range2.Percentage',
                            min: 0,
                            validator: validators.double
                        },
                        {
                            type: 'input',
                            inputType: 'number',
                            label: i18n.t('gameSettings.fields.CastleStatModifiers_Global.FloorPenalties.Range2.Lower'),
                            model: 'CastleStatModifiers_Global.FloorPenalties.Range2.Lower',
                            min: 0,
                            validator: validators.integer
                        },
                        {
                            type: 'input',
                            inputType: 'number',
                            label: i18n.t('gameSettings.fields.CastleStatModifiers_Global.FloorPenalties.Range2.Higher'),
                            model: 'CastleStatModifiers_Global.FloorPenalties.Range2.Higher',
                            min: 0,
                            validator: validators.integer
                        },
                        {
                            type: 'input',
                            inputType: 'number',
                            label: i18n.t('gameSettings.fields.CastleStatModifiers_Global.FloorPenalties.Range3.Percentage'),
                            model: 'CastleStatModifiers_Global.FloorPenalties.Range3.Percentage',
                            min: 0,
                            validator: validators.double
                        },
                        {
                            type: 'input',
                            inputType: 'number',
                            label: i18n.t('gameSettings.fields.CastleStatModifiers_Global.FloorPenalties.Range3.Lower'),
                            model: 'CastleStatModifiers_Global.FloorPenalties.Range3.Lower',
                            min: 0,
                            validator: validators.integer
                        },
                        {
                            type: 'input',
                            inputType: 'number',
                            label: i18n.t('gameSettings.fields.CastleStatModifiers_Global.FloorPenalties.Range3.Higher'),
                            model: 'CastleStatModifiers_Global.FloorPenalties.Range3.Higher',
                            min: 0,
                            validator: validators.integer
                        },
                        {
                            type: 'input',
                            inputType: 'number',
                            label: i18n.t('gameSettings.fields.CastleStatModifiers_Global.FloorPenalties.Range4.Percentage'),
                            model: 'CastleStatModifiers_Global.FloorPenalties.Range4.Percentage',
                            min: 0,
                            validator: validators.double
                        },
                        {
                            type: 'input',
                            inputType: 'number',
                            label: i18n.t('gameSettings.fields.CastleStatModifiers_Global.FloorPenalties.Range4.Lower'),
                            model: 'CastleStatModifiers_Global.FloorPenalties.Range4.Lower',
                            min: 0,
                            validator: validators.integer
                        },
                        {
                            type: 'input',
                            inputType: 'number',
                            label: i18n.t('gameSettings.fields.CastleStatModifiers_Global.FloorPenalties.Range4.Higher'),
                            model: 'CastleStatModifiers_Global.FloorPenalties.Range4.Higher',
                            min: 0,
                            validator: validators.integer
                        },
                        {
                            type: 'input',
                            inputType: 'number',
                            label: i18n.t('gameSettings.fields.CastleStatModifiers_Global.FloorPenalties.Range5.Percentage'),
                            model: 'CastleStatModifiers_Global.FloorPenalties.Range5.Percentage',
                            min: 0,
                            validator: validators.double
                        },
                        {
                            type: 'input',
                            inputType: 'number',
                            label: i18n.t('gameSettings.fields.CastleStatModifiers_Global.FloorPenalties.Range5.Lower'),
                            model: 'CastleStatModifiers_Global.FloorPenalties.Range5.Lower',
                            min: 0,
                            validator: validators.integer
                        },
                        {
                            type: 'input',
                            inputType: 'number',
                            label: i18n.t('gameSettings.fields.CastleStatModifiers_Global.FloorPenalties.Range5.Higher'),
                            model: 'CastleStatModifiers_Global.FloorPenalties.Range5.Higher',
                            min: 0,
                            validator: validators.integer
                        },
                    ]
                },
                {
                    legend: i18n.t('gameSettings.subgroup.HeartLimits'),
                    fields: [
                        {
                            type: 'input',
                            inputType: 'number',
                            label: i18n.t('gameSettings.fields.CastleStatModifiers_Global.HeartLimits.Level1.FloorLimit'),
                            model: 'CastleStatModifiers_Global.HeartLimits.Level1.FloorLimit',
                            min: 0,
                            validator: validators.integer
                        },
                        {
                            type: 'input',
                            inputType: 'number',
                            label: i18n.t('gameSettings.fields.CastleStatModifiers_Global.HeartLimits.Level1.ServantLimit'),
                            model: 'CastleStatModifiers_Global.HeartLimits.Level1.ServantLimit',
                            min: 0,
                            validator: validators.integer
                        },
                        {
                            type: 'input',
                            inputType: 'number',
                            label: i18n.t('gameSettings.fields.CastleStatModifiers_Global.HeartLimits.Level1.HeightLimit'),
                            model: 'CastleStatModifiers_Global.HeartLimits.Level1.HeightLimit',
                            min: 0,
                            validator: validators.integer
                        },
                        {
                            type: 'input',
                            inputType: 'number',
                            label: i18n.t('gameSettings.fields.CastleStatModifiers_Global.HeartLimits.Level2.FloorLimit'),
                            model: 'CastleStatModifiers_Global.HeartLimits.Level2.FloorLimit',
                            min: 0,
                            validator: validators.integer
                        },
                        {
                            type: 'input',
                            inputType: 'number',
                            label: i18n.t('gameSettings.fields.CastleStatModifiers_Global.HeartLimits.Level2.ServantLimit'),
                            model: 'CastleStatModifiers_Global.HeartLimits.Level2.ServantLimit',
                            min: 0,
                            validator: validators.integer
                        },
                        {
                            type: 'input',
                            inputType: 'number',
                            label: i18n.t('gameSettings.fields.CastleStatModifiers_Global.HeartLimits.Level2.HeightLimit'),
                            model: 'CastleStatModifiers_Global.HeartLimits.Level2.HeightLimit',
                            min: 0,
                            validator: validators.integer
                        },
                        {
                            type: 'input',
                            inputType: 'number',
                            label: i18n.t('gameSettings.fields.CastleStatModifiers_Global.HeartLimits.Level3.FloorLimit'),
                            model: 'CastleStatModifiers_Global.HeartLimits.Level3.FloorLimit',
                            min: 0,
                            validator: validators.integer
                        },
                        {
                            type: 'input',
                            inputType: 'number',
                            label: i18n.t('gameSettings.fields.CastleStatModifiers_Global.HeartLimits.Level3.ServantLimit'),
                            model: 'CastleStatModifiers_Global.HeartLimits.Level3.ServantLimit',
                            min: 0,
                            validator: validators.integer
                        },
                        {
                            type: 'input',
                            inputType: 'number',
                            label: i18n.t('gameSettings.fields.CastleStatModifiers_Global.HeartLimits.Level3.HeightLimit'),
                            model: 'CastleStatModifiers_Global.HeartLimits.Level3.HeightLimit',
                            min: 0,
                            validator: validators.integer
                        },
                        {
                            type: 'input',
                            inputType: 'number',
                            label: i18n.t('gameSettings.fields.CastleStatModifiers_Global.HeartLimits.Level4.FloorLimit'),
                            model: 'CastleStatModifiers_Global.HeartLimits.Level4.FloorLimit',
                            min: 0,
                            validator: validators.integer
                        },
                        {
                            type: 'input',
                            inputType: 'number',
                            label: i18n.t('gameSettings.fields.CastleStatModifiers_Global.HeartLimits.Level4.ServantLimit'),
                            model: 'CastleStatModifiers_Global.HeartLimits.Level4.ServantLimit',
                            min: 0,
                            validator: validators.integer
                        },
                        {
                            type: 'input',
                            inputType: 'number',
                            label: i18n.t('gameSettings.fields.CastleStatModifiers_Global.HeartLimits.Level4.HeightLimit'),
                            model: 'CastleStatModifiers_Global.HeartLimits.Level4.HeightLimit',
                            min: 0,
                            validator: validators.integer
                        },
                        {
                            type: 'input',
                            inputType: 'number',
                            label: i18n.t('gameSettings.fields.CastleStatModifiers_Global.HeartLimits.Level5.FloorLimit'),
                            model: 'CastleStatModifiers_Global.HeartLimits.Level5.FloorLimit',
                            min: 0,
                            validator: validators.integer
                        },
                        {
                            type: 'input',
                            inputType: 'number',
                            label: i18n.t('gameSettings.fields.CastleStatModifiers_Global.HeartLimits.Level5.ServantLimit'),
                            model: 'CastleStatModifiers_Global.HeartLimits.Level5.ServantLimit',
                            min: 0,
                            validator: validators.integer
                        },
                        {
                            type: 'input',
                            inputType: 'number',
                            label: i18n.t('gameSettings.fields.CastleStatModifiers_Global.HeartLimits.Level5.HeightLimit'),
                            model: 'CastleStatModifiers_Global.HeartLimits.Level5.HeightLimit',
                            min: 0,
                            validator: validators.integer
                        },
                    ]
                }
            ]
        },
        {
            title: i18n.t('gameSettings.subgroup.PlayerInteractionSettings'),
            fields: [],
            groups: [
                {
                    legend: i18n.t('gameSettings.subgroup.Configuration'),
                    fields: [
                        {
                            type: 'input',
                            inputType: 'text',
                            label: i18n.t('gameSettings.fields.PlayerInteractionSettings.TimeZone'),
                            model: 'PlayerInteractionSettings.TimeZone'
                        },
                        {
                            type: 'input',
                            inputType: 'number',
                            label: i18n.t('gameSettings.fields.PvPVampireRespawnModifier'),
                            model: 'PvPVampireRespawnModifier',
                            validator: validators.double,
                            min: 0,
                            max: 5
                        },
                    ]
                },
                {
                    legend: i18n.t('gameSettings.subgroup.VSPlayerWeekdayTime'),
                    fields: [
                        {
                            type: 'input',
                            inputType: 'number',
                            label: i18n.t('gameSettings.fields.PlayerInteractionSettings.StartHour'),
                            model: 'PlayerInteractionSettings.VSPlayerWeekdayTime.StartHour',
                            min: 0,
                            max: 23,
                            validator: validators.integer
                        },
                        {
                            type: 'input',
                            inputType: 'number',
                            label: i18n.t('gameSettings.fields.PlayerInteractionSettings.StartMinute'),
                            model: 'PlayerInteractionSettings.VSPlayerWeekdayTime.StartMinute',
                            min: 0,
                            max: 59,
                            validator: validators.integer
                        },
                        {
                            type: 'input',
                            inputType: 'number',
                            label: i18n.t('gameSettings.fields.PlayerInteractionSettings.EndHour'),
                            model: 'PlayerInteractionSettings.VSPlayerWeekdayTime.EndHour',
                            min: 0,
                            max: 23,
                            validator: validators.integer
                        },
                        {
                            type: 'input',
                            inputType: 'number',
                            label: i18n.t('gameSettings.fields.PlayerInteractionSettings.EndMinute'),
                            model: 'PlayerInteractionSettings.VSPlayerWeekdayTime.EndMinute',
                            min: 0,
                            max: 59,
                            validator: validators.integer
                        },
                    ]
                },
                {
                    legend: i18n.t('gameSettings.subgroup.VSPlayerWeekendTime'),
                    fields: [
                        {
                            type: 'input',
                            inputType: 'number',
                            label: i18n.t('gameSettings.fields.PlayerInteractionSettings.StartHour'),
                            model: 'PlayerInteractionSettings.VSPlayerWeekendTime.StartHour',
                            min: 0,
                            max: 23,
                            validator: validators.integer
                        },
                        {
                            type: 'input',
                            inputType: 'number',
                            label: i18n.t('gameSettings.fields.PlayerInteractionSettings.StartMinute'),
                            model: 'PlayerInteractionSettings.VSPlayerWeekendTime.StartMinute',
                            min: 0,
                            max: 59,
                            validator: validators.integer
                        },
                        {
                            type: 'input',
                            inputType: 'number',
                            label: i18n.t('gameSettings.fields.PlayerInteractionSettings.EndHour'),
                            model: 'PlayerInteractionSettings.VSPlayerWeekendTime.EndHour',
                            min: 0,
                            max: 23,
                            validator: validators.integer
                        },
                        {
                            type: 'input',
                            inputType: 'number',
                            label: i18n.t('gameSettings.fields.PlayerInteractionSettings.EndMinute'),
                            model: 'PlayerInteractionSettings.VSPlayerWeekendTime.EndMinute',
                            min: 0,
                            max: 59,
                            validator: validators.integer
                        },
                    ]
                },
                {
                    legend: i18n.t('gameSettings.subgroup.VSCastleWeekdayTime'),
                    fields: [
                        {
                            type: 'input',
                            inputType: 'number',
                            label: i18n.t('gameSettings.fields.PlayerInteractionSettings.StartHour'),
                            model: 'PlayerInteractionSettings.VSCastleWeekdayTime.StartHour',
                            min: 0,
                            max: 23,
                            validator: validators.integer
                        },
                        {
                            type: 'input',
                            inputType: 'number',
                            label: i18n.t('gameSettings.fields.PlayerInteractionSettings.StartMinute'),
                            model: 'PlayerInteractionSettings.VSCastleWeekdayTime.StartMinute',
                            min: 0,
                            max: 59,
                            validator: validators.integer
                        },
                        {
                            type: 'input',
                            inputType: 'number',
                            label: i18n.t('gameSettings.fields.PlayerInteractionSettings.EndHour'),
                            model: 'PlayerInteractionSettings.VSCastleWeekdayTime.EndHour',
                            min: 0,
                            max: 23,
                            validator: validators.integer
                        },
                        {
                            type: 'input',
                            inputType: 'number',
                            label: i18n.t('gameSettings.fields.PlayerInteractionSettings.EndMinute'),
                            model: 'PlayerInteractionSettings.VSCastleWeekdayTime.EndMinute',
                            min: 0,
                            max: 59,
                            validator: validators.integer
                        },
                    ]
                },
                {
                    legend: i18n.t('gameSettings.subgroup.VSCastleWeekendTime'),
                    fields: [
                        {
                            type: 'input',
                            inputType: 'number',
                            label: i18n.t('gameSettings.fields.PlayerInteractionSettings.StartHour'),
                            model: 'PlayerInteractionSettings.VSCastleWeekendTime.StartHour',
                            min: 0,
                            max: 23,
                            validator: validators.integer
                        },
                        {
                            type: 'input',
                            inputType: 'number',
                            label: i18n.t('gameSettings.fields.PlayerInteractionSettings.StartMinute'),
                            model: 'PlayerInteractionSettings.VSCastleWeekendTime.StartMinute',
                            min: 0,
                            max: 59,
                            validator: validators.integer
                        },
                        {
                            type: 'input',
                            inputType: 'number',
                            label: i18n.t('gameSettings.fields.PlayerInteractionSettings.EndHour'),
                            model: 'PlayerInteractionSettings.VSCastleWeekendTime.EndHour',
                            min: 0,
                            max: 23,
                            validator: validators.integer
                        },
                        {
                            type: 'input',
                            inputType: 'number',
                            label: i18n.t('gameSettings.fields.PlayerInteractionSettings.EndMinute'),
                            model: 'PlayerInteractionSettings.VSCastleWeekendTime.EndMinute',
                            min: 0,
                            max: 59,
                            validator: validators.integer
                        },
                    ]
                }
            ]
        }
    ]
};
