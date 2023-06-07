export default {
    scheduledOperation(state) {
        return state.currentOperation;
    },
    currentOperation(state) {
        return state.currentOperation;
    },
    mappedOperationValues(state, getters) {
        const {currentOperation} = getters;
        const options = currentOperation && currentOperation.options ? currentOperation.options : {};
        return {
            ...currentOperation,
            ...options,
            username: currentOperation && currentOperation.user ? currentOperation.user.username : 'unknown',
            remainingTimeMinutes: currentOperation ? currentOperation.remainingTime / 60000 : 0
        }
    },
    operationError(state) {
        return state.operationError;
    },
}
