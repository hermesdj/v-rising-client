<template>
	<b-alert
			v-model="showScheduledRestoreAlert"
			class="position-fixed fixed-bottom m-0 rounded-0"
			style="z-index: 2000;"
			variant="warning"
			id="scheduled-restore-alert"
	>
		<div class="d-flex justify-content-between align-items-center">
			{{ $t('server.operations.scheduledRestore.text', mappedOperationValues) }}
			<b-button variant="warning" @click="stopScheduledOperation">
				{{ $t('server.operations.stopOperation.btn') }}
			</b-button>
		</div>
	</b-alert>
</template>

<script>
import {mapActions, mapGetters} from "vuex";

export default {
	name: "ScheduledRestoreAlert",
	computed: {
		...mapGetters('auth', ['isAdmin']),
		...mapGetters('operations', [
			'scheduledOperation',
			'mappedOperationValues'
		]),
		showScheduledRestoreAlert() {
			return this.scheduledOperation && this.scheduledOperation.type === 'restore-backup';
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
