<template>
	<b-button
			v-if="isOnline"
			variant="success"
			@click="() => $bvModal.show('schedule-restart-server-modal')"
	>
		{{ $t('server.dialogs.scheduleRestart.btn') }}
	</b-button>
</template>

<script>
import {mapGetters} from "vuex";

export default {
	name: "RestartServerBtn",
	computed: {
		...mapGetters('server', ['isOnline'])
	}
}
</script>

<style scoped>

</style>
