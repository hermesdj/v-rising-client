<template>
	<b-card no-body bg-variant="dark" class="rounded-0">
		<b-card-header>
			<b-tabs
					pills
					v-model="activeTab"
			>
				<b-tab
						v-for="(tab, index) in tabs"
						:key="index"
						:title="tab.title"
						:value="tab.value"
				>

				</b-tab>
			</b-tabs>
		</b-card-header>
		<b-card-body>
			<log-viewer class="log-wrapper" has-number :loading="isPolling" :log="log"/>
		</b-card-body>
		<b-card-footer>
			<b-button-group>
				<b-button
						variant="warning"
						:disabled="!isPolling"
						@click="stopPolling"
				>
					<b-icon icon="pause-circle"></b-icon>
				</b-button>
				<b-button
						:disabled="isPolling"
						variant="success"
						@click="startPolling"
				>
					<b-icon icon="play-circle"></b-icon>
				</b-button>
			</b-button-group>
		</b-card-footer>
	</b-card>
</template>

<script>
export default {
	name: "ApiLogViewer",
	data: () => ({
		log: '',
		timeout: null,
		pollDelay: 5000,
		logName: 'api-logs',
		activeTab: 0
	}),
	watch: {
		activeTab(val) {
			const tab = this.tabs[val];
			if (tab) {
				this.stopPolling();
				this.logName = tab.value;
			}
		},
		logName: {
			immediate: true,
			handler(oldVal, newVal) {
				if (oldVal !== newVal) {
					this.log = '';
				}

				if (!this.timeout) {
					this.startPolling();
				}
			}
		}
	},
	computed: {
		lineIndex() {
			return this.log.split('\n').length - 1;
		},
		isPolling() {
			return this.timeout !== null;
		},
		tabs() {
			return [
				{
					title: this.$t('app.logs.apiLogs'),
					value: 'api-logs'
				},
				{
					title: this.$t('app.logs.vServerLogs'),
					value: 'v-server-logs'
				},
				{
					title: this.$t('app.logs.processLogs'),
					value: 'process-logs'
				}
			]
		}
	},
	methods: {
		startPolling() {
			if (this.timeout) {
				this.stopPolling();
			}
			this.loadLog().then(() => this.pollLog());
		},
		pollLog() {
			this.timeout = setTimeout(
					() => this.loadLog().then(this.pollLog), this.pollDelay)
		},
		stopPolling() {
			if (!this.timeout) return;
			clearTimeout(this.timeout);
			this.timeout = null;
		},
		loadLog() {
			return this.$http.get(`/logs/${this.logName}`, {params: {from: this.lineIndex}, withCredentials: true})
					.then(({data}) => {
						if (data && data.length > 0) {
							this.log += data;
							this.pollDelay = 5000;
						} else {
							this.pollDelay += 5000;
						}
					})
					.catch(err => console.error('Error retrieving logs !', err.response));
		}
	}
}
</script>

<style scoped>
.log-wrapper .line-content {
	max-width: 300px;
	text-overflow: ellipsis;
	display: inline-block;
	overflow: hidden;
	white-space: nowrap;
}
</style>
