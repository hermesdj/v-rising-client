<template>
	<b-alert
			v-model="showScheduledRestartAlert"
			class="position-fixed fixed-bottom m-0 rounded-0"
			style="z-index: 2000;"
			variant="warning"
			id="scheduled-restart-alert"
	>
		<div class="d-flex justify-content-between align-items-center">
			{{ $t('server.operations.scheduledRestart.text', mappedOperationValues) }}
			<b-button variant="warning" @click="stopScheduledOperation">
				{{ $t('server.operations.stopOperation.btn') }}
			</b-button>
		</div>
	</b-alert>
</template>

<script>
import {mapActions, mapGetters} from "vuex";

export default {
	name: "ScheduledRestartAlert",
	computed: {
		...mapGetters([
			'isAdmin',
			'scheduledOperation',
			'mappedOperationValues'
		]),
		showScheduledRestartAlert() {
			return this.scheduledOperation && this.scheduledOperation.type === 'restart';
		},
	},
	methods: {
		...mapActions([
			'stopScheduledOperation'
		])
	}
}
</script>

<style scoped>

</style>
