<template>
	<b-container>
		<b-row>
			<b-col cols="8" class="mx-auto">
				<b-card
						bg-variant="dark"
						text-variant="light"
						header-bg-variant="dark"
						header-text-variant="light"
						no-body
				>
					<b-card-header>
						<b-nav pills card-header>
							<b-nav-item
									v-for="({title, to}, index) in tabs"
									:key="index"
									:to="to"
									:active="$route.name === to.name"
							>
								{{ title }}
							</b-nav-item>
						</b-nav>
					</b-card-header>
					<router-view/>
				</b-card>
			</b-col>
		</b-row>
	</b-container>
</template>

<script>
export default {
	name: "ModsPage",
	computed: {
		tabs() {
			return [
				{
					title: this.$t('mods.installed.title'),
					to: {name: 'installedModList', params: {page: 1}}
				},
				{
					title: this.$t('mods.available.title'),
					to: {name: 'availableModList', params: {page: 1}}
				}
			]
		}
	}
}
</script>

<style scoped>

</style>
