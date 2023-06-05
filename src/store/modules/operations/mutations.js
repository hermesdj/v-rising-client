import Vue from "vue";

export default {
    saveOperationError(state, error) {
        Vue.set(state, 'operationError', error);
    },
    clearPreviousOperation(state) {
        Vue.set(state, 'operationError', null);
        Vue.set(state, 'currentOperation', null);
    },
}
