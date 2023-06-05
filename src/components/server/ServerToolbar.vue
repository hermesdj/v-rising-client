<template>
	<b-button-toolbar v-if="isAdmin" class="mb-3">
		<template v-if="isAdmin">
			<b-button-group class="mx-2">
				<b-button v-b-modal:schedule-restore-server-modal variant="warning">
					<b-icon icon="file-earmark-zip"></b-icon>
					{{ $t('server.dialogs.scheduleRestore.btn') }}
				</b-button>
			</b-button-group>
			<b-button-group class="mx-2">
				<b-button v-b-modal:send-announce-modal variant="info">
					<b-icon icon="megaphone"></b-icon>
					{{ $t('server.dialogs.sendAnnounce.btn') }}
				</b-button>
			</b-button-group>
		</template>

	</b-button-toolbar>
</template>

<script>
import {mapGetters} from "vuex";

export default {
	name: "ServerToolbar",
	computed: {
		...mapGetters('auth', ['isAdmin']),
		...mapGetters('server', ['serverInfo'])
	}
}
</script>

<style scoped>

</style>
