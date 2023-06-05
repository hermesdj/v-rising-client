<template>
	<b-alert
			v-model="showScheduledStopAlert"
			class="position-fixed fixed-bottom m-0 rounded-0"
			style="z-index: 2000;"
			variant="warning"
			id="scheduled-stop-alert"
	>
		<div class="d-flex justify-content-between align-items-center">
			{{ $t('server.operations.scheduledStop.text', mappedOperationValues) }}
			<b-button variant="warning" @click="stopScheduledOperation">
				{{ $t('server.operations.stopOperation.btn') }}
			</b-button>
		</div>
	</b-alert>
</template>

<script>
import {mapActions, mapGetters} from "vuex";

export default {
	name: "ScheduledStopAlert",
	computed: {
		...mapGetters('auth', ['isAdmin']),
		...mapGetters('operations', [
			'scheduledOperation',
			'mappedOperationValues'
		]),
		showScheduledStopAlert() {
			return this.scheduledOperation && this.scheduledOperation.type === 'stop';
		},
	},
	methods: {
		...mapActions('operations', [
			'stopScheduledOperation'
		])
	}
}
</script>

<style scoped>

</style>
