import Vue from "vue";

export default {
    saveOperationInfo(state, operationInfo) {
        if (operationInfo && operationInfo.background) {
            const index = state.operations.findIndex(op => op.name === operationInfo.name);

            if (index > -1) {
                Vue.set(state.operations, index, operationInfo);
            } else {
                state.operations.push(operationInfo);
            }
        } else {
            Vue.set(state, 'currentOperation', operationInfo);
        }
    },
    saveOperationError(state, error) {
        Vue.set(state, 'operationError', error);
    },
    clearPreviousOperation(state) {
        Vue.set(state, 'operationError', null);
        Vue.set(state, 'currentOperation', null);
    },
}
