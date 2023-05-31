<template>
	<b-container>
		<b-card no-body bg-variant="dark" header-border-variant="dark" text-variant="white">
			<b-row no-gutters>
				<b-col cols="shrink">
					<b-card-header header-border-variant="dark" header-tag="nav">
						<b-nav pills vertical card-header>
							<b-nav-item to="/settings/host" exact-path exact-active-class="active">
								{{ $t('hostSettings.title') }}
							</b-nav-item>
							<b-nav-item to="/settings/game" exact-path exact-active-class="active">
								{{ $t('gameSettings.title') }}
							</b-nav-item>
							<b-nav-item v-if="isAdmin" to="/settings/users" exact-path exact-active-class="active">
								{{ $t('users.title') }}
							</b-nav-item>
						</b-nav>
					</b-card-header>
				</b-col>
				<b-col>
					<router-view/>
				</b-col>
			</b-row>
		</b-card>
	</b-container>
</template>

<script>
import {mapActions, mapGetters} from "vuex";

export default {
	name: "ServerSettingsPage",
	mounted() {
		this.loadServerSettings().catch(err => console.error('Failed to load server settings', err));
	},
	computed: {
		...mapGetters(['isAdmin'])
	},
	methods: {
		...mapActions(['loadServerSettings'])
	}
}
</script>

<style scoped>

</style>
