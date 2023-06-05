import {http} from "@/plugins/http";

export default {
    async logout({commit}) {
        const {data} = await http.post('/auth/logout', {}, {withCredentials: true});
        if (data.success) {
            commit('saveUser', {username: null});
            this._vm.$socket.client.disconnect();
        }
    },
    async whoami({commit}) {
        const {data} = await http.get('/auth', {withCredentials: true});
        commit('saveUser', data);
        if (data.username) {
            this._vm.$socket.client.connect((err) => console.error('socket connect error', err));
        }
    },
}
