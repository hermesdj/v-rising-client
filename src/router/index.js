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
                name: 'server-logs',
                component: () => import('@/views/ServerLogPage.vue')
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
                component: () => import('@/views/RouterProxyPage.vue'),
                meta: {auth: true},
                children: [
                    {
                        path: 'host',
                        name: 'editServerHostSettings',
                        component: () => import('@/views/EditHostSettings.vue')
                    },
                    {
                        path: 'game',
                        name: 'editServerGameSettings',
                        component: () => import('@/views/EditGameSettings.vue')
                    },
                    {
                        path: 'users',
                        name: 'editUsersSettings',
                        component: () => import('@/views/EditUsersSettings.vue')
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
    if (to.meta && to.meta.auth && !store.getters['isLoggedIn']) {
        next({name: 'home'});
    } else {
        next();
    }
});
