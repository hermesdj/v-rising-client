<template>
	<div>
		<b-alert
				v-model="showScheduledRestartAlert"
				class="position-fixed fixed-bottom m-0 rounded-0"
				style="z-index: 2000;"
				variant="warning"
				id="scheduled-restart-alert"
		>
			<div class="d-flex justify-content-between align-items-center">
				{{ $t('server.operations.scheduledRestart.text', mappedValues) }}
				<b-button variant="warning" @click="stop">
					{{ $t('server.operations.stopOperation.btn') }}
				</b-button>
			</div>
		</b-alert>
		<b-alert
				v-model="showScheduledRestoreAlert"
				class="position-fixed fixed-bottom m-0 rounded-0"
				style="z-index: 2000;"
				variant="warning"
				id="scheduled-restore-alert"
		>
			<div class="d-flex justify-content-between align-items-center">
				{{ $t('server.operations.scheduledRestore.text', mappedValues) }}
				<b-button variant="warning" @click="stop">
					{{ $t('server.operations.stopOperation.btn') }}
				</b-button>
			</div>
		</b-alert>
		<b-alert
				v-model="showScheduledStopAlert"
				class="position-fixed fixed-bottom m-0 rounded-0"
				style="z-index: 2000;"
				variant="warning"
				id="scheduled-stop-alert"
		>
			<div class="d-flex justify-content-between align-items-center">
				{{ $t('server.operations.scheduledStop.text', mappedValues) }}
				<b-button variant="warning" @click="stop">
					{{ $t('server.operations.stopOperation.btn') }}
				</b-button>
			</div>
		</b-alert>
		<b-alert
				v-model="showOperationError"
				class="position-fixed fixed-bottom m-0 rounded-0"
				style="z-index: 2000;"
				variant="danger"
				id="operation-error-alert"
		>
			{{ $t('server.operations.operationError.text', operationError) }}
		</b-alert>
		<b-toast
				toaster="b-toaster-bottom-right"
				variant="warning"
				id="host-settings-diff-detected"
				:visible="hostSettingsDiff.length > 0 && !scheduledOperation && isLoggedIn"
				no-close-button
				solid
				no-auto-hide
				append-toast
				:title="$t('hostSettings.diff.title')"
		>
			<b-row>
				<b-col>
					{{ $t('hostSettings.diff.text', {size: hostSettingsDiff.length}) }}
				</b-col>
			</b-row>
			<b-row>
				<b-col>
					<b-button v-b-modal:schedule-restart-server-modal class="mt-2" variant="warning">
						<b-icon icon="arrow-clockwise"/>
						{{ $t('server.dialogs.scheduleRestart.btn') }}
					</b-button>
					<b-button v-b-modal:show-host-settings-diff class="mt-2 ml-2" variant="info">
						<b-icon icon="info-circle"/>
						{{ $t('app.diff.showDiff') }}
					</b-button>
				</b-col>
			</b-row>
		</b-toast>
		<b-toast
				toaster="b-toaster-bottom-right"
				variant="warning"
				id="game-settings-diff-detected"
				:visible="gameSettingsDiff.length > 0 && !scheduledOperation && isLoggedIn"
				no-close-button
				solid
				no-auto-hide
				append-toast
				:title="$t('gameSettings.diff.title')"
		>
			<b-row>
				<b-col>
					{{ $t('gameSettings.diff.text', {size: gameSettingsDiff.length}) }}
				</b-col>
			</b-row>
			<b-row>
				<b-col>
					<b-button v-b-modal:schedule-restart-server-modal class="mt-2" variant="warning">
						<b-icon icon="arrow-clockwise"/>
						{{ $t('server.dialogs.scheduleRestart.btn') }}
					</b-button>
					<b-button v-b-modal:show-game-settings-diff class="mt-2 ml-2" variant="info">
						<b-icon icon="info-circle"/>
						{{ $t('app.diff.showDiff') }}
					</b-button>
				</b-col>
			</b-row>
		</b-toast>
		<b-toast
				toaster="b-toaster-bottom-right"
				variant="warning"
				id="admin-list-diff-detected"
				:visible="adminListDiff.length > 0 && !scheduledOperation && isLoggedIn"
				no-close-button
				solid
				no-auto-hide
				append-toast
				:title="$t('users.admin.diffModal.title')"
		>
			<b-row>
				<b-col>{{ $t('users.admin.diffModal.text', {size: adminListDiff.length}) }}</b-col>
			</b-row>
			<b-row>
				<b-col>
					<b-button v-b-modal:schedule-restart-server-modal class="mt-2" variant="warning">
						<b-icon icon="arrow-clockwise"/>
						{{ $t('server.dialogs.scheduleRestart.btn') }}
					</b-button>
					<b-button v-b-modal:show-admin-list-diff class="mt-2 ml-2" variant="info">
						<b-icon icon="info-circle"/>
						{{ $t('app.diff.showDiff') }}
					</b-button>
				</b-col>
			</b-row>
		</b-toast>
		<b-toast
				toaster="b-toaster-bottom-right"
				variant="warning"
				id="ban-list-diff-detected"
				:visible="banListDiff.length > 0 && !scheduledOperation && isLoggedIn"
				no-close-button
				solid
				no-auto-hide
				append-toast
				:title="$t('users.ban.diffModal.title')"
		>
			<b-row>
				<b-col>{{ $t('users.ban.diffModal.text', {size: banListDiff.length}) }}</b-col>
			</b-row>
			<b-row>
				<b-col>
					<b-button v-b-modal:schedule-restart-server-modal class="mt-2" variant="warning">
						<b-icon icon="arrow-clockwise"/>
						{{ $t('server.dialogs.scheduleRestart.btn') }}
					</b-button>
					<b-button v-b-modal:show-ban-list-diff class="mt-2 ml-2" variant="info">
						<b-icon icon="info-circle"/>
						{{ $t('app.diff.showDiff') }}
					</b-button>
				</b-col>
			</b-row>
		</b-toast>
		<StartServerModal/>
		<ForceStopServerModal/>
		<ScheduleStopServerModal/>
		<RestartServerModal/>
		<ScheduleRestoreServerModal/>
		<ShowSettingsDiffModal
				id="show-game-settings-diff"
				:title="$t('gameSettings.diffModal.title')"
				:diff="gameSettingsDiff"
				i18n-key="gameSettings"
				:definition="gameSettingsDefinition"
		/>
		<ShowSettingsDiffModal
				id="show-host-settings-diff"
				:title="$t('hostSettings.diffModal.title')"
				:diff="hostSettingsDiff"
				i18n-key="hostSettings"
				:definition="hostSettingsDefinition"
		/>
		<ShowSettingsDiffModal
				id="show-admin-list-diff"
				:title="$t('users.admin.diffModal.title')"
				:diff="adminListDiff"
				i18n-key="users.admin"
		/>
		<ShowSettingsDiffModal
				id="show-ban-list-diff"
				:title="$t('users.ban.diffModal.title')"
				:diff="banListDiff"
				i18n-key="users.ban"
		/>
	</div>
</template>

<script>
import {mapActions, mapGetters} from "vuex";
import RestartServerModal from "@/components/server/modal/RestartServerModal.vue";
import ScheduleStopServerModal from "@/components/server/modal/ScheduleStopServerModal.vue";
import ShowSettingsDiffModal from "@/components/server/modal/ShowSettingsDiffModal.vue";
import ScheduleRestoreServerModal from "@/components/server/modal/ScheduleRestoreServerModal.vue";
import StartServerModal from "@/components/server/modal/StartServerModal.vue";
import ForceStopServerModal from "@/components/server/modal/ForceStopServerModal.vue";

export default {
	name: "ServerAlerts",
	components: {
		ForceStopServerModal,
		StartServerModal,
		ScheduleRestoreServerModal, ShowSettingsDiffModal, ScheduleStopServerModal, RestartServerModal
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
		...mapGetters([
			'isLoggedIn',
			'scheduledOperation',
			'operationError',
			'hostSettingsDiff',
			'gameSettingsDiff',
			'gameSettingsDefinition',
			'hostSettingsDefinition',
			'adminListDiff',
			'banListDiff'
		]),
		showScheduledRestartAlert() {
			return this.scheduledOperation && this.scheduledOperation.type === 'restart';
		},
		showScheduledStopAlert() {
			return this.scheduledOperation && this.scheduledOperation.type === 'stop';
		},
		showScheduledRestoreAlert() {
			return this.scheduledOperation && this.scheduledOperation.type === 'restore-backup';
		},
		showOperationError() {
			return this.operationError !== null;
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
		...mapActions(['stopScheduledOperation', 'loadServerSettings', 'loadUsers']),
		async stop() {
			try {
				await this.stopScheduledOperation();
				await this.$bvToast.toast(this.$t('server.operations.stopOperation.success'), {
					title: this.$t('server.operations.stopOperation.success'),
					variant: 'success',
					toaster: 'b-toaster-bottom-center',
					autoHideDelay: 2000
				});
			} catch (err) {
				await this.$bvToast.toast(this.$t('server.operations.stopOperation.success'), {
					title: this.$t('server.operations.stopOperation.error', {error: err}),
					variant: 'danger',
					toaster: 'b-toaster-bottom-center',
					autoHideDelay: 2000
				});
			}
		}
	}
}
</script>

<style scoped>

</style>
