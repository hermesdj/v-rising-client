<template>
	<div>
		<!-- Modals -->
		<StartServerModal/>
		<ForceStopServerModal/>
		<ScheduleStopServerModal/>
		<RestartServerModal/>
		<ScheduleRestoreServerModal/>
		<DownloadBackupModal/>
		<SendAnnounceModal/>

		<!-- Alerts -->
		<ScheduledRestartAlert/>
		<ScheduledRestoreAlert/>
		<ScheduledStopAlert/>
		<OperationErrorAlert/>

		<!-- Toasts -->
		<HostSettingsDiffDetectedToast/>
		<GameSettingsDiffDetectedToast/>
		<AdminListDiffDetectedToast/>
		<BanListDiffDetectedToast/>


	</div>
</template>

<script>
import {mapActions, mapGetters} from "vuex";
import RestartServerModal from "@/components/server/modal/RestartServerModal.vue";
import ScheduleStopServerModal from "@/components/server/modal/ScheduleStopServerModal.vue";
import ScheduleRestoreServerModal from "@/components/server/modal/ScheduleRestoreServerModal.vue";
import StartServerModal from "@/components/server/modal/StartServerModal.vue";
import ForceStopServerModal from "@/components/server/modal/ForceStopServerModal.vue";
import ScheduledRestartAlert from "@/components/operations/alerts/ScheduledRestartAlert.vue";
import ScheduledRestoreAlert from "@/components/operations/alerts/ScheduledRestoreAlert.vue";
import ScheduledStopAlert from "@/components/operations/alerts/ScheduledStopAlert.vue";
import OperationErrorAlert from "@/components/operations/alerts/OperationErrorAlert.vue";
import HostSettingsDiffDetectedToast from "@/components/server/toasts/HostSettingsDiffDetectedToast.vue";
import GameSettingsDiffDetectedToast from "@/components/server/toasts/GameSettingsDiffDetectedToast.vue";
import AdminListDiffDetectedToast from "@/components/server/toasts/AdminListDiffDetectedToast.vue";
import BanListDiffDetectedToast from "@/components/server/toasts/BanListDiffDetectedToast.vue";
import DownloadBackupModal from "@/components/server/modal/DownloadBackupModal.vue";
import SendAnnounceModal from "@/components/server/modal/SendAnnounceModal.vue";
import {hostSettingsDefinitions} from "@/settings/hostSettingsDefinitions";

export default {
	name: "ServerAlerts",
	components: {
		SendAnnounceModal,
		DownloadBackupModal,
		BanListDiffDetectedToast,
		AdminListDiffDetectedToast,
		GameSettingsDiffDetectedToast,
		HostSettingsDiffDetectedToast,
		OperationErrorAlert,
		ScheduledStopAlert,
		ScheduledRestoreAlert,
		ScheduledRestartAlert,
		ForceStopServerModal,
		StartServerModal,
		ScheduleRestoreServerModal,
		ScheduleStopServerModal,
		RestartServerModal
	},
	sockets: {
		'server started'({serverInfo}) {
			this.$bvToast.toast(this.$t('server.events.started', serverInfo), {
				toaster: 'b-toaster-top-right',
				appendToast: true,
				autoHideDelay: 3000,
				title: this.$t('server.events.title'),
				variant: 'success'
			})
		},
		'server stopped'({serverInfo}) {
			this.$bvToast.toast(this.$t('server.events.stopped', serverInfo), {
				toaster: 'b-toaster-top-right',
				appendToast: true,
				autoHideDelay: 3000,
				title: this.$t('server.events.title'),
				variant: 'danger'
			})
		}
	},

	mounted() {
		this.loadServerSettings();
		this.loadUsers();
	},
	computed: {
		...mapGetters('auth', ['isAdmin']),
		...mapGetters('operations', [
			'scheduledOperation',
			'operationError',
		]),
		...mapGetters('settings', [
			'hostSettingsDiff',
			'gameSettingsDiff',
			'adminListDiff',
			'banListDiff'
		]),
		hostSettingsDefinition() {
			return hostSettingsDefinitions(this);
		},
		mappedValues() {
			const options = this.scheduledOperation && this.scheduledOperation.options ? this.scheduledOperation.options : {};
			return {
				...this.scheduledOperation,
				...options,
				username: this.scheduledOperation && this.scheduledOperation.user ? this.scheduledOperation.user.username : 'unknown',
				remainingTimeMinutes: this.scheduledOperation ? this.scheduledOperation.remainingTime / 60000 : 0
			}
		}
	},
	methods: {
		...mapActions('operations', [
			'stopScheduledOperation'
		]),
		...mapActions('settings', [
			'loadServerSettings',
			'loadUsers'
		])
	}
}
</script>

<style scoped>

</style>
