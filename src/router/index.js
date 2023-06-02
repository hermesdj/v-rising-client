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
                path: 'logs',
                component: () => import('@/views/ServerLogPage.vue'),
                children: [
                    {
                        path: 'api-logs',
                        name: 'api-logs',
                        component: () => import('@/components/server/logs/ApiLogViewer.vue'),
                        props: (route) => ({logName: route.name})
                    },
                    {
                        path: 'v-server-logs',
                        name: 'v-server-logs',
                        component: () => import('@/components/server/logs/ApiLogViewer.vue'),
                        props: (route) => ({logName: route.name})
                    },
                    {
                        path: 'process-logs',
                        name: 'process-logs',
                        component: () => import('@/components/server/logs/ApiLogViewer.vue'),
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
                        path: 'host',
                        name: 'showHostSettings',
                        component: () => import('@/components/server/HostSettingsCard.vue')
                    },
                    {
                        path: 'game',
                        name: 'showGameSettings',
                        component: () => import('@/components/server/GameSettingsCard.vue')
                    },
                    {
                        path: 'users',
                        name: 'showUsersSettings',
                        component: () => import('@/components/server/UsersSettingsCard.vue'),
                        meta: {auth: true}
                    }
                ]
            },
            {
                path: 'edit',
                component: () => import('@/views/EditSettings.vue'),
                meta: {auth: true},
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
                        path: 'host',
                        name: 'editServerHostSettings',
                        component: () => import('@/components/server/forms/ServerHostSettingsForm.vue'),
                        props: {title: ''}
                    },
                    {
                        path: 'game',
                        name: 'editServerGameSettings',
                        component: () => import('@/components/server/forms/ServerGameSettingsForm.vue'),
                        props: {title: 'gameSettings.edit'}
                    },
                    {
                        path: 'users',
                        name: 'editUsersSettings',
                        component: () => import('@/components/server/forms/ServerUsersSettingsForm.vue'),
                        props: {title: 'users.edit'}
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
    if (to.meta && to.meta.auth && !store.getters['isAdmin']) {
        next({name: 'home'});
    } else {
        next();
    }
});
