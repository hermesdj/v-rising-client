<template>
	<b-container>
		<b-card no-body bg-variant="dark" class="rounded-0">
			<b-card-header>
				<b-nav
						pills
						v-model="selectedNav"
				>
					<b-nav-item
							v-for="(tab, index) in tabs"
							:key="index"
							:title="tab.title"
							:to="{name: tab.value}"
							exact
							exact-active-class="active"
					>
						{{ tab.title }}
					</b-nav-item>
				</b-nav>
			</b-card-header>
			<router-view/>
		</b-card>
	</b-container>
</template>

<script>
export default {
	name: "ServerLogPage",
	data() {
		return {
			selectedNav: 0
		}
	},
	computed: {
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
}
</script>

<style scoped>

</style>
