import {i18n} from "@/i18n";
import {validators} from "vue-form-generator";

export const hostSettingsDefinitions = {
    tabs: [
        {
            title: i18n.t('hostSettings.group.Identity'),
            fields: [
                {
                    type: 'input',
                    inputType: 'text',
                    label: i18n.t('hostSettings.fields.Name'),
                    model: 'Name'
                },
                {
                    type: 'input',
                    inputType: 'text',
                    label: i18n.t('hostSettings.fields.Description'),
                    model: 'Description'
                },
                {
                    type: 'checkbox',
                    label: i18n.t('hostSettings.fields.ListOnMasterServer'),
                    model: 'ListOnMasterServer'
                },
                {
                    type: 'checkbox',
                    label: i18n.t('hostSettings.fields.ListOnSteam'),
                    model: 'ListOnSteam'
                },
                {
                    type: 'checkbox',
                    label: i18n.t('hostSettings.fields.ListOnEOS'),
                    model: 'ListOnEOS'
                }
            ]
        },
        {
            title: i18n.t('hostSettings.group.Configuration'),
            fields: [
                {
                    type: 'input',
                    inputType: 'number',
                    label: i18n.t('hostSettings.fields.MaxConnectedUsers'),
                    model: 'MaxConnectedUsers',
                    min: 1,
                    max: 50,
                    validator: validators.integer
                },
                {
                    type: 'input',
                    inputType: 'number',
                    label: i18n.t('hostSettings.fields.MaxConnectedAdmins'),
                    model: 'MaxConnectedAdmins',
                    min: 1,
                    max: 10,
                    validator: validators.integer
                },
                {
                    type: 'input',
                    inputType: 'number',
                    label: i18n.t('hostSettings.fields.ServerFps'),
                    model: 'ServerFps',
                    min: 10,
                    max: 60,
                    validator: validators.integer
                },
                {
                    type: 'select',
                    label: i18n.t('hostSettings.fields.GameSettingsPreset'),
                    model: 'GameSettingsPreset',
                    values: [
                        {name: 'No Preset', id: '', group: ''},
                        {name: 'StandardPvP', id: 'StandardPvP', group: 'PvP'},
                        {name: 'StandardPvP Easy', id: 'StandardPvP_Easy', group: 'PvP'},
                        {name: 'StandardPvP Hard', id: 'StandardPvP_Hard', group: 'PvP'},
                        {name: 'Level30PvP', id: 'Level30PvP', group: 'PvP'},
                        {name: 'Level50PvP', id: 'Level50PvP', group: 'PvP'},
                        {name: 'Level70PvP', id: 'Level70PvP', group: 'PvP'},
                        {name: 'StandardPvE', id: 'StandardPvE', group: 'PvE'},
                        {name: 'StandardPvE_Easy', id: 'StandardPvE_Easy', group: 'PvE'},
                        {name: 'StandardPvE_Hard', id: 'StandardPvE_Hard', group: 'PvE'},
                        {name: 'Level30PvE', id: 'Level30PvE', group: 'PvE'},
                        {name: 'Level50PvE', id: 'Level50PvE', group: 'PvE'},
                        {name: 'Level70PvE', id: 'Level70PvE', group: 'PvE'},
                        {name: 'SoloPvP', id: 'SoloPvP', group: 'PvP'},
                        {name: 'DuoPvP', id: 'DuoPvP', group: 'PvP'},
                        {name: 'HardcorePvP', id: 'HardcorePvP', group: 'PvP'},
                    ]
                },
                {
                    type: 'checkbox',
                    label: i18n.t('hostSettings.fields.AdminOnlyDebugEvents'),
                    model: 'AdminOnlyDebugEvents'
                },
                {
                    type: 'checkbox',
                    label: i18n.t('hostSettings.fields.DisableDebugEvents'),
                    model: 'DisableDebugEvents'
                }
            ]
        },
        {
            title: i18n.t('hostSettings.group.Connection'),
            fields: [
                {
                    type: 'input',
                    inputType: 'number',
                    label: i18n.t('hostSettings.fields.Port'),
                    model: 'Port'
                },
                {
                    type: 'input',
                    inputType: 'number',
                    label: i18n.t('hostSettings.fields.QueryPort'),
                    model: 'QueryPort'
                },
                {
                    type: 'input',
                    inputType: 'text',
                    label: i18n.t('hostSettings.fields.Address'),
                    model: 'Address'
                }
            ]
        },
        {
            title: i18n.t('hostSettings.group.SaveFiles'),
            fields: [
                {
                    type: 'input',
                    inputType: 'number',
                    label: i18n.t('hostSettings.fields.AutoSaveCount'),
                    model: 'AutoSaveCount',
                    min: 0,
                    validator: validators.integer
                },
                {
                    type: 'input',
                    inputType: 'number',
                    label: i18n.t('hostSettings.fields.AutoSaveInterval'),
                    model: 'AutoSaveInterval',
                    min: 0,
                    validator: validators.integer
                },
                {
                    type: 'checkbox',
                    label: i18n.t('hostSettings.fields.CompressSaveFiles'),
                    model: 'CompressSaveFiles'
                },
            ]
        },
        {
            title: i18n.t('hostSettings.group.Security'),
            fields: [
                {
                    type: 'input',
                    inputType: 'password',
                    label: i18n.t('hostSettings.fields.Password'),
                    model: 'Password'
                },
                {
                    type: 'checkbox',
                    label: i18n.t('hostSettings.fields.Secure'),
                    model: 'Secure'
                },
            ]
        },
        {
            title: i18n.t('hostSettings.group.Rcon'),
            fields: [
                {
                    type: 'input',
                    inputType: 'password',
                    label: i18n.t('hostSettings.fields.Rcon.Password'),
                    model: 'Rcon.Password'
                },
                {
                    type: 'input',
                    inputType: 'number',
                    label: i18n.t('hostSettings.fields.Rcon.Port'),
                    model: 'Rcon.Port'
                },
                {
                    type: 'checkbox',
                    label: i18n.t('hostSettings.fields.Rcon.Enabled'),
                    model: 'Rcon.Enabled'
                }
            ]
        }
    ]
}
