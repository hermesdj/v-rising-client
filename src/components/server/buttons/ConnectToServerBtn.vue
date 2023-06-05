<template>
	<b-button
			v-if="isReady"
			:href="connectSteam"
			variant="primary"
			class="text-light"
			v-bind="$attrs"
	>
		{{ $t('server.connect') }}
	</b-button>
</template>

<script>
import {mapGetters} from "vuex";

export default {
	name: "ConnectToServerBtn",
	computed: {
		...mapGetters('server', ['serverInfo', 'isReady']),
		connectSteam() {
			return process.env.NODE_ENV === 'development' ? 'steam://connect/127.0.0.1:9877' : `steam://connect/${this.serverInfo.publicIp}:${this.serverInfo.queryPort}`
		}
	}
}
</script>

<style scoped>

</style>
