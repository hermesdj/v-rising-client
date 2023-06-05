<template>
	<b-button
			v-show="serverInfo.pid === null"
			variant="success"
			@click="() => $bvModal.show('start-server-modal')"
	>
		{{ $t('server.dialogs.start.btn') }}
	</b-button>
</template>

<script>
import {mapGetters} from "vuex";

export default {
	name: "StartServerBtn",
	computed: {
		...mapGetters('server', ['serverInfo'])
	}
}
</script>

<style scoped>

</style>
