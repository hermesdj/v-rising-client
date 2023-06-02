<template>
	<div>
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
	</div>
</template>

<script>
export default {
	name: "ApiLogViewer",
	props: {
		logName: String
	},
	data() {
		return {
			log: '',
			pollDelay: 5000,
			activeTab: 0,
			isPaused: false,
			logCache: new Map(),
			controller: null
		}
	},
	mounted() {
		this.pollLog();
	},
	watch: {
		logName: {
			immediate: true,
			handler(val) {
				if (this.logCache.has(val)) {
					this.log = this.logCache.get(val);
				} else {
					this.log = '';
				}
				this.pausePolling();
				this.resumePolling();
			}
		},
	},
	computed: {
		isPolling() {
			return !this.isPaused;
		},
	},
	methods: {
		resumePolling() {
			this.isPaused = false;
			this.pollLog();
		},
		pausePolling() {
			this.controller.abort();
		},
		async pollLog() {
			this.controller = new AbortController();
			const signal = this.controller.signal;
			try {
				for await (const log of this.logData(signal)) {
					this.updateLog(this.logName, log);
				}
			} catch (err) {
				console.error(err);
				if (err.code === 'ERR_CANCELED') {
					this.isPaused = true;
				} else {
					this.$bvToast.toast(this.$t('server.logs.pollError.content', err), {
						title: this.$t('server.logs.pollError.title'),
						variant: 'danger'
					})
				}
			}
		},
		updateLog(logName, data) {
			this.log += data;
			this.logCache.set(logName, data);
		},
		async* logData(signal) {
			let timerId;

			const cleanup = () => {
				console.log('cleanup called');
				this.isPaused = true;
				clearTimeout(timerId);
			};

			try {
				while (!this.isPaused) {
					const {data} = await this.$http.get(`/logs/${this.logName}`, {
						params: {from: this.log.length},
						withCredentials: true,
						signal
					});

					if (data.length > 0) {
						yield data;
					}

					await new Promise((resolve) => {
						timerId = setTimeout(resolve, this.pollDelay);
						signal.addEventListener('abort', cleanup, {once: true});
					});

					if (signal.aborted) {
						break;
					}
				}
			} finally {
				cleanup();
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
