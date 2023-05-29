<template>
	<b-button-toolbar v-if="isAdmin" class="mb-3">
		<b-button-group>
			<b-button v-b-modal:start-server-modal v-if="serverInfo.pid === null" variant="success">
				<b-icon icon="play"/>
				{{ $t('server.dialogs.start.btn') }}
			</b-button>
			<b-button v-b-modal:schedule-restart-server-modal v-if="serverInfo.pid !== null" variant="success">
				<b-icon icon="arrow-clockwise"/>
				{{ $t('server.dialogs.scheduleRestart.btn') }}
			</b-button>
		</b-button-group>
		<b-button-group class="mx-2">
			<b-dropdown split v-if="serverInfo.pid !== null" variant="danger" @click="() => $bvModal.show('schedule-stop-server-modal')">
				<template #button-content>
					<b-icon icon="stopwatch"/>
					{{ $t('server.dialogs.scheduleStop.btn') }}
				</template>
				<b-dropdown-item @click="() => $bvModal.show('force-stop-server-modal')" variant="danger">
					<b-icon icon="stop-fill"/>
					{{ $t('server.dialogs.forceStop.btn') }}
				</b-dropdown-item>
			</b-dropdown>
		</b-button-group>
		<b-button-group>
			<b-button v-b-modal:schedule-restore-server-modal variant="warning">
				<b-icon icon="file-earmark-zip"></b-icon>
				{{ $t('server.dialogs.scheduleRestore.btn') }}
			</b-button>
		</b-button-group>
	</b-button-toolbar>
</template>

<script>
import {mapGetters} from "vuex";

export default {
	name: "ServerToolbar",
	computed: {
		...mapGetters(['isAdmin', 'serverInfo'])
	}
}
</script>

<style scoped>

</style>
