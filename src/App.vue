<template>
	<div id="app">
		<router-view/>
	</div>
</template>

<script>
import {mapActions, mapGetters} from "vuex";

export default {
	name: 'App',
	metaInfo() {
		return {
			title: this.serverInfo.serverName ? this.serverInfo.serverName : this.$t('app.title')
		}
	},
	mounted() {
		this.whoami();
		this.$store.subscribeAction({
			error: (action, state, error) => {
				const err = {
					message: error.message
				};

				this.$bvToast.toast(this.$t('app.error.message', {name: action.type, message: err.message}), {
					title: this.$t('app.error.title'),
					autoHideDelay: 5000,
					toaster: 'b-toaster-top-center',
					variant: 'danger'
				});
			}
		})
	},
	computed: {
		...mapGetters('server', ['serverInfo'])
	},
	methods: {
		...mapActions('auth', ['whoami'])
	}
}
</script>

<style>
</style>
