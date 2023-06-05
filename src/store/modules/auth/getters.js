export default {
    isLoggedIn(state) {
        return state.user && state.user.username !== null;
    },
    isAdmin(state) {
        return state.user && state.user.isAdmin;
    },
    user(state) {
        return state.user || {username: null, steamID: null};
    },
}
