<template>
	<VModal
			id="start-server-modal"
			:title="$t('server.dialogs.start.title')"
			ok-variant="success"
			@ok="startServer"
	>
		<p>
			{{ $t('server.dialogs.start.text') }}
		</p>
		<template v-slot:modal-ok>
			<b-icon icon="play"/>
			{{ $t('server.dialogs.start.btn') }}
		</template>
	</VModal>
</template>

<script>
import {mapActions} from "vuex";
import VModal from "@/components/VModal.vue";

export default {
	name: "StartServerModal",
	components: {VModal},
	methods: {
		...mapActions(['startServer'])
	}
}
</script>

<style scoped>

</style>
