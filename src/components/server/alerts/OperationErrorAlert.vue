<template>
	<b-alert
			v-model="showOperationError"
			class="position-fixed fixed-bottom m-0 rounded-0"
			style="z-index: 2000;"
			variant="danger"
			id="operation-error-alert"
	>
		{{ $t('server.operations.operationError.text', operationError) }}
	</b-alert>
</template>

<script>
import {mapGetters} from "vuex";

export default {
	name: "OperationErrorAlert",
	computed: {
		...mapGetters('operations', [
			'operationError'
		]),
		showOperationError() {
			return this.operationError !== null;
		},
	}
}
</script>

<style scoped>

</style>
