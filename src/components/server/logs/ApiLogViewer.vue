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
						@click="pausePolling"
				>
					<b-icon icon="pause-circle"></b-icon>
				</b-button>
				<b-button
						:disabled="isPolling"
						variant="success"
						@click="resumePolling"
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
	data() {
		return {
			log: '',
			pollDelay: 5000,
			logName: 'api-logs',
			activeTab: 0,
			isPaused: false,
			logCache: new Map()
		}
	},
	mounted() {
		this.pollLog();
	},
	watch: {
		activeTab(val) {
			const tab = this.tabs[val];
			if (tab) {
				if (this.logCache.has(tab.value)) {
					this.log = this.logCache.get(tab.value);
				} else {
					this.log = '';
				}
				this.logName = tab.value;
			}
		}
	},
	computed: {
		isPolling() {
			return !this.isPaused;
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
		resumePolling() {
			this.isPaused = false;
			this.pollLog();
		},
		async pollLog() {
			for await (const log of this.logData()) {
				this.updateLog(this.logName, log);
			}
		},
		updateLog(logName, data) {
			this.log += data;
			this.logCache.set(logName, data);
		},
		pausePolling() {
			this.isPaused = true;
		},
		async* logData() {
			while (!this.isPaused) {
				try {
					const {data} = await this.$http.get(`/logs/${this.logName}`, {
						params: {from: this.log.length},
						withCredentials: true
					});
					if (data.length > 0) {
						yield data;
					}
				} catch (err) {
					this.$bvToast.toast(this.$t('server.logs.pollError.content', err), {
						title: this.$t('server.logs.pollError.title'),
						variant: 'danger'
					})
				}

				await new Promise((resolve) => setTimeout(resolve, this.pollDelay));
			}
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
