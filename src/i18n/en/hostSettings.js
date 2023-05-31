export default {
    title: 'Host Settings',
    edit: 'Edit Server Host Settings',
    fields: {
        Name: 'Server Name',
        Description: 'Server Description',
        Port: 'Game Port',
        QueryPort: 'Query Port',
        Address: 'Bind Address',
        MaxConnectedUsers: 'Max Connected Users',
        MaxConnectedAdmins: 'Max Connected Admins',
        ServerFps: 'Server FPS',
        SaveName: 'Save Name',
        Password: 'Server Password',
        CompressSaveFiles: 'Compress Save Files',
        Secure: 'Secured',
        ListOnMasterServer: 'List on Master server',
        ListOnSteam: 'List on Steam',
        ListOnEOS: 'List on EOS',
        AutoSaveCount: 'Auto Save Count',
        AutoSaveInterval: 'Auto Save Interval',
        GameSettingsPreset: 'Game Settings Preset',
        AdminOnlyDebugEvents: 'Admin Only Debug Events',
        DisableDebugEvents: 'Disable Debug Events',
        Rcon: {
            Password: 'RCon Password',
            Port: 'RCon Port',
            Enabled: 'RCon Enabled'
        },
        API: {
            Enabled: 'API Enabled',
            BindAddress: 'Bind Address',
            BindPort: 'Bind Port',
            BasePath: 'Base Path',
            AccessList: 'Access List',
            PrometheusDelay: "Prometheus Delay"
        }
    },
    group: {
        Identity: 'Identity',
        Security: 'Security',
        Connection: 'Connection',
        Rcon: 'RCon',
        API: 'API',
        SaveFiles: 'Save Files',
        Configuration: 'Configuration'
    },
    diff: {
        title: 'Host Settings Not Applied !',
        text: 'Host Settings have received {size} changes, you must restart the server to apply them !'
    },
    diffModal: {
        title: 'Host Settings Diff Modal'
    }
}
