<template>
	<b-button
			v-if="!isOffline"
			@click="() => $bvModal.show('force-stop-server-modal')"
			variant="outline"
			class="text-muted"
	>
		{{ $t('server.dialogs.forceStop.btn') }}
	</b-button>
</template>

<script>
import {mapGetters} from "vuex";

export default {
	name: "KillServerBtn",
	computed: {
		...mapGetters('server', ['isOffline'])
	}
}
</script>

<style scoped>

</style>
