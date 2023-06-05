<template>
	<b-button
			v-if="!isOffline"
			variant="danger"
			@click="() => $bvModal.show('schedule-stop-server-modal')"
	>
		{{ $t('server.dialogs.scheduleStop.btn') }}
	</b-button>
</template>

<script>
import {mapGetters} from "vuex";

export default {
	name: "ScheduledStopServerBtn",
	computed: {
		...mapGetters('server', ['isOffline'])
	}
}
</script>

<style scoped>

</style>
