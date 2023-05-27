import Vue from 'vue';
import VueSocketIOExt from "vue-socket.io-extended";
import {io} from 'socket.io-client';
import constants from "@/plugins/constants";
import {store} from "@/store";

export const socket = io(constants.host, {
    autoConnect: false,
    withCredentials: true
});

socket.on('connect', () => {
    console.log('socket is connected !');
    socket.emit('whoami', (user) => store.commit('saveUser', user));
});
socket.on('disconnect', () => {
    console.log('socket is disconnected !');
    store.commit('saveUser', {username: null});
});

Vue.use(VueSocketIOExt, socket, {store});
