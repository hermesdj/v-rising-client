import {i18n} from "@/i18n";
import {validators} from "vue-form-generator";
import {get, isInteger, padStart, set} from "lodash";
import wNumb from 'wnumb';

function getTime(model, field, startOrEnd) {
    const time = {
        hours: get(model, `${field.model}.${startOrEnd}Hour`),
        minutes: get(model, `${field.model}.${startOrEnd}Minute`)
    };
    return `${time.hours ? padStart(time.hours, '0') : '00'}:${time.minutes ? padStart(time.minutes, '0') : '00'}:00`;
}

function setTime(model, value, field, startOrEnd) {
    const [hours, minutes] = value.split(':');
    set(model, `${field.model}.${startOrEnd}Hour`, parseInt(hours));
    set(model, `${field.model}.${startOrEnd}Minute`, parseInt(minutes));
}

function slider(params) {
    const pips = {
        mode: 'steps',
        density: 3,
        filter(value) {
            if (isInteger(value)) {
                return 2;
            } else {
                return 0;
            }
        }
    };

    if (params.max && params.step) {
        const divided = params.max * params.step;

        if (divided >= 100) {
            pips.mode = 'count';
            pips.values = 10;
            pips.density = 4;
            pips.stepped = true;
        } else if (divided >= 10 && divided < 100) {
            pips.density = 4;
            pips.filter = (value) => {
                if (isInteger(value) && value % 10 === 0) {
                    return 2;
                } else {
                    return 0;
                }
            }
        }
    }

    return {
        type: 'noUiSlider',
        ...params,
        set(model, value) {
            set(model, this.model, value[0]);
        },
        noUiSliderOptions: {
            step: params.step || 0.1,
            tooltips: true,
            pips,
            ...params.noUiSliderOptions
        }
    };
}

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
                            type: 'switch',
                            label: i18n.t('gameSettings.fields.CanLootEnemyContainers'),
                            model: 'CanLootEnemyContainers'
                        }
                    ]
                },
                {
                    legend: i18n.t('gameSettings.subgroup.GameSettings'),
                    fields: [
                        {
                            type: 'switch',
                            label: i18n.t('gameSettings.fields.BloodBoundEquipment'),
                            model: 'BloodBoundEquipment'
                        },
                        {
                            type: 'switch',
                            label: i18n.t('gameSettings.fields.TeleportBoundItems'),
                            model: 'TeleportBoundItems'
                        },
                        {
                            type: 'switch',
                            label: i18n.t('gameSettings.fields.AllowGlobalChat'),
                            model: 'AllowGlobalChat'
                        },
                        {
                            type: 'switch',
                            label: i18n.t('gameSettings.fields.FreeCastleClaim'),
                            model: 'FreeCastleClaim'
                        },
                        {
                            type: 'switch',
                            label: i18n.t('gameSettings.fields.FreeCastleDestroy'),
                            model: 'FreeCastleDestroy'
                        },
                        slider({
                            label: i18n.t('gameSettings.fields.CastleMinimumDistanceInFloors'),
                            model: 'CastleMinimumDistanceInFloors',
                            validator: validators.integer,
                            min: 1,
                            max: 10,
                            step: 1
                        }),
                        slider({
                            label: i18n.t('gameSettings.fields.ClanSize'),
                            model: 'ClanSize',
                            validator: validators.integer,
                            min: 1,
                            max: 10,
                            step: 1
                        }),
                        {
                            type: 'select',
                            label: i18n.t('gameSettings.fields.StarterEquipmentId'),
                            model: 'StarterEquipmentId',
                            validator: validators.integer,
                            required: true,
                            values: [
                                {id: 0, name: i18n.t('gameSettings.values.StarterEquipmentId.none')},
                                {id: -376135143, name: i18n.t('gameSettings.values.StarterEquipmentId.copper')},
                                {id: -1613823352, name: i18n.t('gameSettings.values.StarterEquipmentId.iron')},
                                {id: -258598606, name: i18n.t('gameSettings.values.StarterEquipmentId.darkSilver')},
                                {id: 1177675846, name: i18n.t('gameSettings.values.StarterEquipmentId.sanguine')},
                            ]
                        },
                        {
                            type: 'select',
                            label: i18n.t('gameSettings.fields.StarterResourcesId'),
                            model: 'StarterResourcesId',
                            required: true,
                            validator: validators.integer,
                            values: [
                                {id: 0, name: i18n.t('gameSettings.values.StarterResourcesId.none')},
                                {id: -696202180, name: i18n.t('gameSettings.values.StarterResourcesId.copper')},
                                {id: 481718792, name: i18n.t('gameSettings.values.StarterResourcesId.iron')},
                                {id: -766909665, name: i18n.t('gameSettings.values.StarterResourcesId.darkSilver')}
                            ]
                        }
                    ]
                },
                {
                    legend: i18n.t('gameSettings.group.Inactivity'),
                    fields: [
                        {
                            type: 'switch',
                            label: i18n.t('gameSettings.fields.InactivityKillEnabled'),
                            model: 'InactivityKillEnabled'
                        },
                        {
                            type: 'input',
                            inputType: 'number',
                            label: i18n.t('gameSettings.fields.InactivityKillTimeMin'),
                            model: 'InactivityKillTimeMin',
                            min: 0,
                            max: Number.MAX_SAFE_INTEGER,
                            validator: validators.integer
                        },
                        {
                            type: 'input',
                            inputType: 'number',
                            label: i18n.t('gameSettings.fields.InactivityKillTimeMax'),
                            model: 'InactivityKillTimeMax',
                            validator: validators.integer,
                            disabled: true
                        },
                        {
                            type: 'input',
                            inputType: 'number',
                            label: i18n.t('gameSettings.fields.InactivityKillSafeTimeAddition'),
                            model: 'InactivityKillSafeTimeAddition',
                            validator: validators.integer,
                            disabled: true
                        },
                        {
                            type: 'input',
                            inputType: 'number',
                            label: i18n.t('gameSettings.fields.InactivityKillTimerMaxItemLevel'),
                            model: 'InactivityKillTimerMaxItemLevel',
                            validator: validators.integer,
                            disabled: true
                        },
                        {
                            type: 'switch',
                            label: i18n.t('gameSettings.fields.DisableDisconnectedDeadEnabled'),
                            model: 'DisableDisconnectedDeadEnabled'
                        },
                        {
                            type: 'input',
                            inputType: 'number',
                            label: i18n.t('gameSettings.fields.DisableDisconnectedDeadTimer'),
                            model: 'DisableDisconnectedDeadTimer',
                            validator: validators.integer
                        },
                    ]
                },
                {
                    legend: i18n.t('gameSettings.subgroup.InventoryAndLoot'),
                    fields: [
                        slider({
                            label: i18n.t('gameSettings.fields.InventoryStacksModifier'),
                            model: 'InventoryStacksModifier',
                            validator: validators.double,
                            min: 0.25,
                            step: 0.25,
                            max: 5
                        }),
                        slider({
                            label: i18n.t('gameSettings.fields.DropTableModifier_General'),
                            model: 'DropTableModifier_General',
                            validator: validators.double,
                            min: 0.25,
                            step: 0.25,
                            max: 5
                        }),
                        slider({
                            label: i18n.t('gameSettings.fields.DropTableModifier_Missions'),
                            model: 'DropTableModifier_Missions',
                            validator: validators.double,
                            min: 0.25,
                            step: 0.25,
                            max: 5
                        }),
                        slider({
                            label: i18n.t('gameSettings.fields.MaterialYieldModifier_Global'),
                            model: 'MaterialYieldModifier_Global',
                            validator: validators.double,
                            min: 0.25,
                            step: 0.25,
                            max: 5
                        }),
                        slider({
                            label: i18n.t('gameSettings.fields.BloodEssenceYieldModifier'),
                            model: 'BloodEssenceYieldModifier',
                            validator: validators.double,
                            min: 0.25,
                            step: 0.25,
                            max: 5
                        }),
                        slider({
                            label: i18n.t('gameSettings.fields.Death_DurabilityFactorLoss'),
                            model: 'Death_DurabilityFactorLoss',
                            validator: validators.double,
                            step: 0.125,
                            min: 0.125,
                            max: 5,
                            noUiSliderOptions: {
                                format: wNumb({
                                    decimals: 3
                                })
                            }
                        }),
                        slider({
                            label: i18n.t('gameSettings.fields.Death_DurabilityLossFactorAsResources'),
                            model: 'Death_DurabilityLossFactorAsResources',
                            validator: validators.double,
                            step: 0.125,
                            min: 0.125,
                            max: 5,
                            noUiSliderOptions: {
                                format: wNumb({
                                    decimals: 3
                                })
                            }
                        }),
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
                        slider({
                            label: i18n.t('gameSettings.fields.BuildCostModifier'),
                            model: 'BuildCostModifier',
                            validator: validators.double,
                            min: 0,
                            max: 10,
                            step: 0.1
                        }),
                        slider({
                            label: i18n.t('gameSettings.fields.RecipeCostModifier'),
                            model: 'RecipeCostModifier',
                            validator: validators.double,
                            min: 0,
                            max: 10,
                            step: 0.1
                        }),
                        slider({
                            label: i18n.t('gameSettings.fields.RefinementCostModifier'),
                            model: 'RefinementCostModifier',
                            validator: validators.double,
                            min: 0.1,
                            max: 10,
                            step: 0.1
                        }),
                        slider({
                            label: i18n.t('gameSettings.fields.DismantleResourceModifier'),
                            model: 'DismantleResourceModifier',
                            validator: validators.double,
                            min: 0,
                            max: 1,
                            step: 0.25
                        }),
                        slider({
                            label: i18n.t('gameSettings.fields.RepairCostModifier'),
                            model: 'RepairCostModifier',
                            validator: validators.double,
                            min: 0,
                            max: 10,
                            step: 0.25
                        })
                    ]
                },
                {
                    legend: i18n.t('gameSettings.subgroup.RateModifiers'),
                    fields: [
                        slider({
                            label: i18n.t('gameSettings.fields.CraftRateModifier'),
                            model: 'CraftRateModifier',
                            validator: validators.double,
                            min: 0.1,
                            max: 10,
                            step: 0.1
                        }),
                        slider({
                            label: i18n.t('gameSettings.fields.RefinementRateModifier'),
                            model: 'RefinementRateModifier',
                            validator: validators.double,
                            min: 0.1,
                            max: 10,
                            step: 0.1
                        }),
                        slider({
                            label: i18n.t('gameSettings.fields.ServantConvertRateModifier'),
                            model: 'ServantConvertRateModifier',
                            validator: validators.double,
                            min: 0.1,
                            max: 20,
                            step: 0.1
                        }),
                        slider({
                            label: i18n.t('gameSettings.fields.BloodDrainModifier'),
                            model: 'BloodDrainModifier',
                            validator: validators.double,
                            min: 0,
                            max: 5
                        }),
                        slider({
                            label: i18n.t('gameSettings.fields.DurabilityDrainModifier'),
                            model: 'DurabilityDrainModifier',
                            validator: validators.double,
                            min: 0,
                            max: 5
                        }),
                        slider({
                            label: i18n.t('gameSettings.fields.GarlicAreaStrengthModifier'),
                            model: 'GarlicAreaStrengthModifier',
                            validator: validators.double,
                            min: 0,
                            max: 5
                        }),
                        slider({
                            label: i18n.t('gameSettings.fields.HolyAreaStrengthModifier'),
                            model: 'HolyAreaStrengthModifier',
                            validator: validators.double,
                            min: 0,
                            max: 5
                        }),
                        slider({
                            label: i18n.t('gameSettings.fields.SilverStrengthModifier'),
                            model: 'SilverStrengthModifier',
                            validator: validators.double,
                            min: 0,
                            max: 5
                        }),
                        slider({
                            label: i18n.t('gameSettings.fields.SunDamageModifier'),
                            model: 'SunDamageModifier',
                            validator: validators.double,
                            min: 0,
                            max: 5
                        }),
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
                            validator: validators.integer,
                            min: 60,
                            max: 86400,
                            step: 1
                        },
                        {
                            type: 'timePicker',
                            label: i18n.t('gameSettings.fields.GameTimeModifiers.DayStartHour'),
                            model: 'GameTimeModifiers',
                            get(model) {
                                return getTime(model, this, 'DayStart')
                            },
                            set(model, value) {
                                setTime(model, value, this, 'DayStart');
                            }
                        },
                        {
                            type: 'timePicker',
                            label: i18n.t('gameSettings.fields.GameTimeModifiers.DayEndHour'),
                            model: 'GameTimeModifiers',
                            get(model) {
                                return getTime(model, this, 'DayEnd')
                            },
                            set(model, value) {
                                setTime(model, value, this, 'DayEnd');
                            }
                        },
                        slider({
                            label: i18n.t('gameSettings.fields.GameTimeModifiers.BloodMoonFrequency_Min'),
                            model: 'GameTimeModifiers.BloodMoonFrequency_Min',
                            min: 1,
                            max: 255,
                            step: 1,
                            validator: validators.integer
                        }),
                        slider({
                            label: i18n.t('gameSettings.fields.GameTimeModifiers.BloodMoonFrequency_Max'),
                            model: 'GameTimeModifiers.BloodMoonFrequency_Max',
                            min: 1,
                            max: 255,
                            step: 1,
                            validator: validators.integer
                        }),
                        slider({
                            label: i18n.t('gameSettings.fields.GameTimeModifiers.BloodMoonBuff'),
                            model: 'GameTimeModifiers.BloodMoonBuff',
                            min: 0.1,
                            max: 1,
                            step: 0.1,
                            validator: validators.double
                        })
                    ]
                },
                {
                    legend: i18n.t('gameSettings.subgroup.VampireStatModifiers'),
                    fields: [
                        slider({
                            label: i18n.t('gameSettings.fields.VampireStatModifiers.MaxHealthModifier'),
                            model: 'VampireStatModifiers.MaxHealthModifier',
                            min: 0.1,
                            step: 0.1,
                            max: 5,
                            validator: validators.double
                        }),
                        slider({
                            label: i18n.t('gameSettings.fields.VampireStatModifiers.PhysicalPowerModifier'),
                            model: 'VampireStatModifiers.PhysicalPowerModifier',
                            min: 0.1,
                            max: 5,
                            step: 0.1,
                            validator: validators.double
                        }),
                        slider({
                            label: i18n.t('gameSettings.fields.VampireStatModifiers.SpellPowerModifier'),
                            model: 'VampireStatModifiers.SpellPowerModifier',
                            min: 0.1,
                            max: 5,
                            step: 0.1,
                            validator: validators.double
                        }),
                        slider({
                            label: i18n.t('gameSettings.fields.VampireStatModifiers.ResourcePowerModifier'),
                            model: 'VampireStatModifiers.ResourcePowerModifier',
                            min: 0.1,
                            max: 5,
                            step: 0.1,
                            validator: validators.double
                        }),
                        slider({
                            label: i18n.t('gameSettings.fields.VampireStatModifiers.DamageReceivedModifier'),
                            model: 'VampireStatModifiers.DamageReceivedModifier',
                            min: 0.1,
                            max: 5,
                            step: 0.1,
                            validator: validators.double
                        })
                    ]
                },
                {
                    legend: i18n.t('gameSettings.subgroup.UnitStatModifiers'),
                    fields: [
                        slider({
                            label: i18n.t('gameSettings.fields.UnitStatModifiers_Global.MaxHealthModifier'),
                            model: 'UnitStatModifiers_Global.MaxHealthModifier',
                            min: 0.1,
                            max: 5,
                            step: 0.1,
                            validator: validators.double
                        }),
                        slider({
                            label: i18n.t('gameSettings.fields.UnitStatModifiers_Global.PowerModifier'),
                            model: 'UnitStatModifiers_Global.PowerModifier',
                            min: 0.1,
                            max: 5,
                            step: 0.1,
                            validator: validators.double
                        }),
                        slider({
                            label: i18n.t('gameSettings.fields.UnitStatModifiers_VBlood.MaxHealthModifier'),
                            model: 'UnitStatModifiers_VBlood.MaxHealthModifier',
                            min: 0.1,
                            max: 5,
                            step: 0.1,
                            validator: validators.double
                        }),
                        slider({
                            label: i18n.t('gameSettings.fields.UnitStatModifiers_VBlood.PowerModifier'),
                            model: 'UnitStatModifiers_VBlood.PowerModifier',
                            min: 0.1,
                            max: 5,
                            step: 0.1,
                            validator: validators.double
                        }),
                    ]
                },
                {
                    legend: i18n.t('gameSettings.subgroup.EquipmentStatModifiers'),
                    fields: [
                        slider({
                            label: i18n.t('gameSettings.fields.EquipmentStatModifiers_Global.MaxHealthModifier'),
                            model: 'EquipmentStatModifiers_Global.MaxHealthModifier',
                            min: 0.1,
                            max: 5,
                            step: 0.1,
                            validator: validators.double
                        }),
                        slider({
                            label: i18n.t('gameSettings.fields.EquipmentStatModifiers_Global.ResourceYieldModifier'),
                            model: 'EquipmentStatModifiers_Global.ResourceYieldModifier',
                            min: 0.1,
                            max: 5,
                            step: 0.1,
                            validator: validators.double
                        }),
                        slider({
                            label: i18n.t('gameSettings.fields.EquipmentStatModifiers_Global.PhysicalPowerModifier'),
                            model: 'EquipmentStatModifiers_Global.PhysicalPowerModifier',
                            min: 0.1,
                            max: 5,
                            step: 0.1,
                            validator: validators.double
                        }),
                        slider({
                            label: i18n.t('gameSettings.fields.EquipmentStatModifiers_Global.SpellPowerModifier'),
                            model: 'EquipmentStatModifiers_Global.SpellPowerModifier',
                            min: 0.1,
                            max: 5,
                            step: 0.1,
                            validator: validators.double
                        }),
                        slider({
                            label: i18n.t('gameSettings.fields.EquipmentStatModifiers_Global.MovementSpeedModifier'),
                            model: 'EquipmentStatModifiers_Global.MovementSpeedModifier',
                            min: 0.1,
                            max: 5,
                            step: 0.1,
                            validator: validators.double
                        }),
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
                            step: 1,
                            validator: validators.double
                        },
                        slider({
                            label: i18n.t('gameSettings.fields.CastleDecayRateModifier'),
                            model: 'CastleDecayRateModifier',
                            min: 0,
                            max: 5,
                            step: 0.1,
                            validator: validators.double
                        }),
                        slider({
                            label: i18n.t('gameSettings.fields.CastleBloodEssenceDrainModifier'),
                            model: 'CastleBloodEssenceDrainModifier',
                            min: 0.1,
                            step: 0.1,
                            max: 5,
                            validator: validators.double
                        }),
                        slider({
                            label: i18n.t('gameSettings.fields.CastleSiegeTimer'),
                            model: 'CastleSiegeTimer',
                            min: 10,
                            max: 1800,
                            step: 10,
                            validator: validators.integer
                        }),
                        slider({
                            label: i18n.t('gameSettings.fields.CastleUnderAttackTimer'),
                            model: 'CastleUnderAttackTimer',
                            min: 1,
                            max: 180,
                            step: 1,
                            validator: validators.integer
                        }),
                        {
                            type: 'switch',
                            label: i18n.t('gameSettings.fields.AnnounceSiegeWeaponSpawn'),
                            model: 'AnnounceSiegeWeaponSpawn'
                        },
                        {
                            type: 'switch',
                            label: i18n.t('gameSettings.fields.ShowSiegeWeaponMapIcon'),
                            model: 'ShowSiegeWeaponMapIcon'
                        },
                    ]
                },
                {
                    legend: i18n.t('gameSettings.subgroup.Limits'),
                    fields: [
                        slider({
                            label: i18n.t('gameSettings.fields.CastleStatModifiers_Global.SafetyBoxLimit'),
                            model: 'CastleStatModifiers_Global.SafetyBoxLimit',
                            min: 0,
                            max: 20,
                            step: 1,
                            validator: validators.integer
                        }),
                        slider({
                            label: i18n.t('gameSettings.fields.CastleStatModifiers_Global.TombLimit'),
                            model: 'CastleStatModifiers_Global.TombLimit',
                            min: 0,
                            max: 20,
                            step: 1,
                            validator: validators.integer
                        }),
                        slider({
                            label: i18n.t('gameSettings.fields.CastleStatModifiers_Global.VerminNestLimit'),
                            model: 'CastleStatModifiers_Global.VerminNestLimit',
                            min: 0,
                            max: 20,
                            step: 1,
                            validator: validators.integer
                        }),
                        slider({
                            label: i18n.t('gameSettings.fields.CastleStatModifiers_Global.PrisonCellLimit'),
                            model: 'CastleStatModifiers_Global.PrisonCellLimit',
                            min: 0,
                            max: 20,
                            step: 1,
                            validator: validators.integer
                        }),
                        slider({
                            label: i18n.t('gameSettings.fields.CastleStatModifiers_Global.CastleLimit'),
                            model: 'CastleStatModifiers_Global.CastleLimit',
                            min: 0,
                            max: 5,
                            step: 1,
                            validator: validators.integer
                        }),
                    ],
                },
            ]
        },
        {
            title: i18n.t('gameSettings.subgroup.HeartLimits'),
            fields: [],
            groups: [1, 2, 3, 4, 5].map(level => ({
                    legend: i18n.t('gameSettings.fields.CastleStatModifiers_Global.HeartLimits.Level', {level}),
                    fields: [
                        slider({
                            label: i18n.t(`gameSettings.fields.CastleStatModifiers_Global.HeartLimits.FloorLimit`),
                            model: `CastleStatModifiers_Global.HeartLimits.Level${level}.FloorLimit`,
                            min: 9,
                            max: 600,
                            step: 1,
                            validator: validators.integer,
                            noUiSliderOptions: {
                                pips: {
                                    mode: 'values',
                                    values: [9, 100, 200, 300, 400, 500, 600],
                                    density: 10,
                                    filter(value) {
                                        if (value === 9 || value === 600) {
                                            return 1;
                                        }
                                        if (value % 100 === 0) {
                                            return 2;
                                        } else {
                                            return 0;
                                        }
                                    }
                                }
                            }
                        }),
                        slider({
                            label: i18n.t(`gameSettings.fields.CastleStatModifiers_Global.HeartLimits.ServantLimit`),
                            model: `CastleStatModifiers_Global.HeartLimits.Level${level}.ServantLimit`,
                            min: 0,
                            max: 20,
                            step: 1,
                            validator: validators.integer
                        }),
                        slider({
                            label: i18n.t(`gameSettings.fields.CastleStatModifiers_Global.HeartLimits.HeightLimit`),
                            model: `CastleStatModifiers_Global.HeartLimits.Level${level}.HeightLimit`,
                            min: 0,
                            max: 6,
                            step: 1,
                            noUiSliderOptions: {
                                pips: {
                                    mode: 'steps',
                                    density: 100
                                }
                            },
                            validator: validators.integer
                        })
                    ]
                })
            )
        },
        {
            title: i18n.t('gameSettings.subgroup.PlayerInteractionSettings'),
            fields: [],
            groups: [
                {
                    legend: i18n.t('gameSettings.subgroup.Configuration'),
                    fields: [
                        {
                            type: 'select',
                            label: i18n.t('gameSettings.fields.PlayerInteractionSettings.TimeZone'),
                            model: 'PlayerInteractionSettings.TimeZone',
                            required: true,
                            values: ['Local', 'UTC', 'PST', 'CET', 'CST'].map(timeZone => ({
                                id: timeZone,
                                name: i18n.t('gameSettings.values.TimeZone.' + timeZone)
                            }))
                        },
                        slider({
                            label: i18n.t('gameSettings.fields.PvPVampireRespawnModifier'),
                            model: 'PvPVampireRespawnModifier',
                            validator: validators.double,
                            min: 0,
                            max: 5,
                            step: 0.1
                        }),
                    ]
                },
                {
                    legend: i18n.t('gameSettings.subgroup.VSPlayerWeekdayTime'),
                    fields: [
                        {
                            type: 'timePicker',
                            label: i18n.t('gameSettings.fields.PlayerInteractionSettings.Start'),
                            model: 'PlayerInteractionSettings.VSPlayerWeekdayTime',
                            get(model) {
                                return getTime(model, this, 'Start');
                            },
                            set(model, value) {
                                setTime(model, value, this, 'Start');
                            }
                        },
                        {
                            type: 'timePicker',
                            label: i18n.t('gameSettings.fields.PlayerInteractionSettings.End'),
                            model: 'PlayerInteractionSettings.VSPlayerWeekdayTime',
                            get(model) {
                                return getTime(model, this, 'End');
                            },
                            set(model, value) {
                                setTime(model, value, this, 'End');
                            }
                        },
                    ]
                },
                {
                    legend: i18n.t('gameSettings.subgroup.VSPlayerWeekendTime'),
                    fields: [
                        {
                            type: 'timePicker',
                            label: i18n.t('gameSettings.fields.PlayerInteractionSettings.Start'),
                            model: 'PlayerInteractionSettings.VSPlayerWeekendTime',
                            get(model) {
                                return getTime(model, this, 'Start');
                            },
                            set(model, value) {
                                setTime(model, value, this, 'Start');
                            }
                        },
                        {
                            type: 'timePicker',
                            label: i18n.t('gameSettings.fields.PlayerInteractionSettings.End'),
                            model: 'PlayerInteractionSettings.VSPlayerWeekendTime',
                            get(model) {
                                return getTime(model, this, 'End');
                            },
                            set(model, value) {
                                setTime(model, value, this, 'End');
                            }
                        },
                    ]
                },
                {
                    legend: i18n.t('gameSettings.subgroup.VSCastleWeekdayTime'),
                    fields: [
                        {
                            type: 'timePicker',
                            label: i18n.t('gameSettings.fields.PlayerInteractionSettings.Start'),
                            model: 'PlayerInteractionSettings.VSCastleWeekdayTime',
                            get(model) {
                                return getTime(model, this, 'Start');
                            },
                            set(model, value) {
                                setTime(model, value, this, 'Start');
                            }
                        },
                        {
                            type: 'timePicker',
                            label: i18n.t('gameSettings.fields.PlayerInteractionSettings.End'),
                            model: 'PlayerInteractionSettings.VSCastleWeekdayTime',
                            get(model) {
                                return getTime(model, this, 'End');
                            },
                            set(model, value) {
                                setTime(model, value, this, 'End');
                            }
                        },
                    ]
                },
                {
                    legend: i18n.t('gameSettings.subgroup.VSCastleWeekendTime'),
                    fields: [
                        {
                            type: 'timePicker',
                            label: i18n.t('gameSettings.fields.PlayerInteractionSettings.Start'),
                            model: 'PlayerInteractionSettings.VSCastleWeekendTime',
                            get(model) {
                                return getTime(model, this, 'Start');
                            },
                            set(model, value) {
                                setTime(model, value, this, 'Start');
                            }
                        },
                        {
                            type: 'timePicker',
                            label: i18n.t('gameSettings.fields.PlayerInteractionSettings.End'),
                            model: 'PlayerInteractionSettings.VSCastleWeekendTime',
                            get(model) {
                                return getTime(model, this, 'End');
                            },
                            set(model, value) {
                                setTime(model, value, this, 'End');
                            }
                        },
                    ]
                }
            ]
        }
    ]
};
