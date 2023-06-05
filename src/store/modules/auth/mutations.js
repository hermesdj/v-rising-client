export default {
    saveUser(state, payload) {
        state.user.username = payload.username;
        state.user.id = payload.id;
        state.user.isPlayer = payload.isPlayer;
        state.user.isAdmin = payload.isAdmin;
    },
}
