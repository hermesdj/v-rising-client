import Vue from 'vue';
import axios from 'axios';
import VueAxios from 'vue-axios';
import constants from "@/plugins/constants";

export const http = axios.create({
    baseURL: constants.host + 'api'
});

Vue.use(VueAxios, http);
