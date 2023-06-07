import VueRouter from 'vue-router';
import {store} from "@/store";

const routes = [
    {
        path: '/',
        component: () => import('@/layouts/MainAppLayout.vue'),
        children: [
            {
                path: '',
                name: 'home',
                component: () => import('@/views/HomePage.vue')
            },
            {
                path: 'players',
                name: 'players',
                component: () => import('@/views/PlayersPage.vue')
            },
            {
                path: 'logs',
                component: () => import('@/views/ServerLogPage.vue'),
                meta: {admin: true},
                children: [
                    {
                        path: 'api-logs',
                        name: 'api-logs',
                        component: () => import('@/components/logs/ApiLogViewer.vue'),
                        props: (route) => ({logName: route.name})
                    },
                    {
                        path: 'v-server-logs',
                        name: 'v-server-logs',
                        component: () => import('@/components/logs/ApiLogViewer.vue'),
                        props: (route) => ({logName: route.name})
                    },
                    {
                        path: 'process-logs',
                        name: 'process-logs',
                        component: () => import('@/components/logs/ApiLogViewer.vue'),
                        props: (route) => ({logName: route.name})
                    }
                ]
            },
            {
                path: 'settings',
                name: 'server-settings',
                component: () => import('@/views/ServerSettingsPage.vue'),
                children: [
                    {
                        path: 'host/:currentTabId/:currentSubTabId',
                        name: 'showHostSettings',
                        component: () => import('@/components/settings/HostSettingsCard.vue'),
                        props: route => ({
                            currentTabId: parseInt(route.params.currentTabId),
                            currentSubTabId: parseInt(route.params.currentSubTabId)
                        })
                    },
                    {
                        path: 'game/:currentTabId/:currentSubTabId',
                        name: 'showGameSettings',
                        component: () => import('@/components/settings/GameSettingsCard.vue'),
                        props: route => ({
                            currentTabId: parseInt(route.params.currentTabId),
                            currentSubTabId: parseInt(route.params.currentSubTabId)
                        })
                    },
                    {
                        path: 'users',
                        name: 'showUsersSettings',
                        component: () => import('@/components/settings/UsersSettingsCard.vue'),
                        meta: {admin: true}
                    }
                ]
            },
            {
                path: 'edit',
                component: () => import('@/views/EditSettings.vue'),
                meta: {admin: true},
                props: (route) => {
                    const props = {title: 'No Title'};

                    if (route.name === 'editServerHostSettings') {
                        props.title = 'hostSettings.edit';
                    } else if (route.name === 'editServerGameSettings') {
                        props.title = 'gameSettings.edit';
                    } else if (route.name === 'editUsersSettings') {
                        props.title = 'users.edit';
                    }

                    return props;
                },
                children: [
                    {
                        path: 'host/:currentTabId/:currentSubTabId',
                        name: 'editServerHostSettings',
                        component: () => import('@/components/settings/forms/ServerHostSettingsForm.vue'),
                        props: route => ({
                            currentTabId: parseInt(route.params.currentTabId),
                            currentSubTabId: parseInt(route.params.currentSubTabId)
                        })
                    },
                    {
                        path: 'game/:currentTabId/:currentSubTabId',
                        name: 'editServerGameSettings',
                        component: () => import('@/components/settings/forms/ServerGameSettingsForm.vue'),
                        props: route => ({
                            currentTabId: parseInt(route.params.currentTabId),
                            currentSubTabId: parseInt(route.params.currentSubTabId)
                        })
                    },
                    {
                        path: 'users',
                        name: 'editUsersSettings',
                        component: () => import('@/components/settings/forms/ServerUsersSettingsForm.vue'),
                        props: route => ({
                            currentTabId: parseInt(route.params.currentTabId),
                            currentSubTabId: parseInt(route.params.currentSubTabId)
                        })
                    }
                ]
            },
            {
                path: 'backups',
                name: 'backups',
                component: () => import('@/views/BackupsPage.vue'),
                meta: {admin: true}
            },
            {
                path: 'mods',
                component: () => import('@/views/ModsPage.vue'),
                meta: {admin: true},
                children: [
                    {
                        path: 'installed/:page',
                        name: 'installedModList',
                        component: () => import('@/components/mods/InstalledModList.vue'),
                        meta: {admin: true},
                        props: route => ({page: parseInt(route.params.page)})
                    },
                    {
                        path: 'available/:page',
                        name: 'availableModList',
                        component: () => import('@/components/mods/AvailableModList.vue'),
                        meta: {admin: true},
                        props: route => ({page: parseInt(route.params.page)})
                    }
                ]
            },
            {
                path: 'mod',
                component: () => import('@/views/ModPage.vue'),
                children: [
                    {
                        path: ':uuid',
                        name: 'modPage',
                        component: () => import('@/components/mods/ModCard.vue'),
                        props: true
                    }
                ]
            }
        ]
    }
];

export const router = new VueRouter({
    mode: 'history',
    routes
});

router.beforeEach((to, from, next) => {
    if (to.meta && to.meta.auth && !store.getters['auth/isLoggedIn']) {
        next({name: 'home'});
    } else if (to.meta && to.meta.admin && !store.getters['auth/isAdmin']) {
        next({name: 'home'});
    } else {
        next();
    }
});
