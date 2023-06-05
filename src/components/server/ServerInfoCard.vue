<template>
	<b-card
			bg-variant="dark"
			text-variant="white"
			no-body
	>
		<b-card-header>
			<div class="d-flex justify-content-between w-100 align-items-center">
				<h5>{{ serverName }}</h5>
				<ConnectToServerBtn size="sm"/>
			</div>
		</b-card-header>
		<b-card-body>
			<b-row class="mb-1">
				<b-col cols="4">
					<h6 class="text-muted">{{ $t('server.status') }}</h6>
				</b-col>
				<b-col cols="8">
					<div :class="`text-${status.color}`">
						{{ status.status }}
					</div>
				</b-col>
			</b-row>
			<b-row
					class="mb-1"
					v-for="({title, value, icon, iconClick, iconTitle}, index) in rows"
					:key="index"
			>
				<b-col cols="4">
					<h6 class="text-muted">{{ title }}</h6>
				</b-col>
				<b-col cols="8" class="d-flex align-items-center">
					<span class="text-sm">{{ value || '-' }}</span>
					<b-button
							v-b-tooltip v-if="icon"
							variant="outlined"
							size="sm"
							@click="iconClick"
							:title="iconTitle"
					>
						<b-icon variant="light" :icon="icon"></b-icon>
					</b-button>
				</b-col>
			</b-row>
		</b-card-body>
		<b-card-footer v-if="isAdmin">
			<StartServerBtn class="mx-2"/>
			<RestartServerBtn class="mx-2"/>
			<ScheduledStopServerBtn class="mx-2"/>
			<KillServerBtn class="mx-2"/>
		</b-card-footer>
	</b-card>
</template>

<script>
import {mapActions, mapGetters} from "vuex";
import dayjs from "dayjs";
import relativeTime from "dayjs/plugin/relativeTime";
import utc from 'dayjs/plugin/utc';
import {isFunction} from "lodash";
import {validationMixin} from "vuelidate";
import StartServerBtn from "@/components/server/buttons/StartServerBtn.vue";
import ScheduledStopServerBtn from "@/components/server/buttons/ScheduledStopServerBtn.vue";
import KillServerBtn from "@/components/server/buttons/KillServerBtn.vue";
import RestartServerBtn from "@/components/server/buttons/RestartServerBtn.vue";
import ConnectToServerBtn from "@/components/server/buttons/ConnectToServerBtn.vue";

dayjs.extend(relativeTime);
dayjs.extend(utc);

export default {
	name: "ServerInfoCard",
	components: {ConnectToServerBtn, RestartServerBtn, KillServerBtn, ScheduledStopServerBtn, StartServerBtn},
	mixins: [validationMixin],
	mounted() {
		this.loadServerInfo().catch(err => console.error('Failed to load server info', err));
	},
	computed: {
		...mapGetters('server', ['serverInfo', 'isOnline', 'isOffline', 'isLoading', 'serverName']),
		...mapGetters('auth', ['isAdmin']),
		status() {
			let color = 'danger';
			let status = this.$t('server.state.offline');

			if (this.isOnline) {
				color = 'success';
				status = this.$t('server.state.online');
			} else if (this.isLoading) {
				color = 'warning';
				status = this.$t('server.state.configReady');
			}

			return {color, status};
		},
		rows() {
			return [
				{
					title: this.$t('server.fields.time'),
					value: this.serverInfo.time && dayjs(this.serverInfo.time).isValid() ? dayjs().from(dayjs(this.serverInfo.time), true) : null,
					displayed: () => this.serverInfo.serverSetupComplete
				},
				{
					title: this.$t('server.fields.processExitCode'),
					value: this.serverInfo.processExitCode,
					displayed: () => this.isAdmin && this.serverInfo.processExitCode !== null
				},
				{
					title: this.$t('server.fields.version'),
					value: this.serverInfo.version,
					displayed: () => this.serverInfo.serverSetupComplete
				},
				{
					title: this.$t('server.fields.ip'),
					value: `${this.serverInfo.publicIp}:${this.serverInfo.gamePort}`,
					displayed: () => this.serverInfo.publicIp !== null && this.serverInfo.gamePort !== null,
					icon: 'clipboard',
					iconTitle: this.$t('server.events.copyIp.title'),
					iconClick: () => this.$copyText(`${this.serverInfo.publicIp}:${this.serverInfo.gamePort}`).then(() => {
						this.$bvToast.toast(this.$t('server.events.copyIp.success', {ip: `${this.serverInfo.publicIp}:${this.serverInfo.gamePort}`}), {
							autoHideDelay: 2000,
							title: this.$t('server.events.copyIp.title'),
							toaster: 'b-toaster-bottom-center',
							variant: 'success'
						})
					}).catch(err => {
						this.$bvToast.toast(this.$t('server.events.copyIp.error', {error: err}), {
							title: this.$t('server.events.copyIp.title'),
							autoHideDelay: 2000,
							toaster: 'b-toaster-bottom-center',
							variant: 'danger'
						})
					})
				},
				{
					title: this.$t('server.fields.steamID'),
					value: this.serverInfo.steamID,
					displayed: () => this.serverInfo.connectedToSteam,
					icon: 'clipboard',
					iconTitle: this.$t('server.events.copySteamId.title'),
					iconClick: () => this.$copyText(this.serverInfo.steamID).then(() => {
						this.$bvToast.toast(this.$t('server.events.copySteamId.success', {steamId: this.serverInfo.steamID}), {
							autoHideDelay: 2000,
							title: this.$t('server.events.copySteamId.title'),
							toaster: 'b-toaster-bottom-center',
							variant: 'success'
						})
					}).catch(err => {
						this.$bvToast.toast(this.$t('server.events.copySteamId.error', {error: err}), {
							title: this.$t('server.events.copySteamId.title'),
							autoHideDelay: 2000,
							toaster: 'b-toaster-bottom-center',
							variant: 'danger'
						})
					})
				},
				{
					title: this.$t('server.fields.currentSaveNumber'),
					value: this.serverInfo.currentSaveNumber,
					displayed: () => this.serverInfo.isSaveLoaded,
					icon: 'download',
					iconClick: () => this.$bvModal.show('download-backup-modal'),
					iconTitle: this.$t('server.dialogs.downloadBackup.title')
				},
				{
					title: this.$t('server.fields.loadedSaveGameVersion'),
					value: this.serverInfo.loadedSaveGameVersion,
					displayed: () => this.serverInfo.isSaveLoaded && !this.serverInfo.isSaveVersionIdentical
				},
				{
					title: this.$t('server.fields.currentGameVersion'),
					value: this.serverInfo.currentGameVersion,
					displayed: () => this.serverInfo.isSaveLoaded && !this.serverInfo.isSaveVersionIdentical
				}
			].filter(row => isFunction(row.displayed) ? row.displayed() : true);
		}
	},
	methods: {
		...mapActions('server', [
			'loadServerInfo'
		])
	}
}
</script>

<style scoped>

</style>
