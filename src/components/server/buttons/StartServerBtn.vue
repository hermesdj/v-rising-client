<template>
	<b-button
			v-show="isOffline"
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
		...mapGetters('server', ['isOffline'])
	}
}
</script>

<style scoped>

</style>
