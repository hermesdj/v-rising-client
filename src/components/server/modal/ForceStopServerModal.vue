<template>
	<VModal
			id="force-stop-server-modal"
			:title="$t('server.dialogs.forceStop.title')"
			@ok="forceStopServer"
			header-bg-variant="danger"
			header-text-variant="light"
			ok-variant="danger"
	>
		<p>
			{{ $t('server.dialogs.forceStop.text') }}
		</p>
		<template v-slot:modal-ok>
			<b-icon icon="stop-fill"/>
			{{ $t('server.dialogs.forceStop.btn') }}
		</template>
	</VModal>
</template>

<script>
import {mapActions} from "vuex";
import VModal from "@/components/VModal.vue";

export default {
	name: "ForceStopServerModal",
	components: {VModal},
	methods: {
		...mapActions(['forceStopServer'])
	}
}
</script>

<style scoped>

</style>
