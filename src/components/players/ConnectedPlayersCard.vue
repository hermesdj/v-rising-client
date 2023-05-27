<template>
	<b-card
			bg-variant="dark"
			text-variant="white"
			no-body
	>
		<b-card-header>
			<div class="d-flex justify-content-between w-100 h3 card-title">
				<div>{{ $t('player.list') }}</div>
			</div>
			<div class="text-muted card-subtitle">{{ $tc('player.count', players.length, {count: players.length}) }}</div>
		</b-card-header>
		<b-table
				:fields="fields"
				:items="players"
				v-if="players.length > 0"
		>

		</b-table>
	</b-card>
</template>

<script>
import {mapActions, mapGetters} from "vuex";

export default {
	name: "ConnectedPlayersCard",
	data() {
		return {
			fields: [
				{
					key: 'characterName',
					title: 'Character'
				}
			]
		}
	},
	mounted() {
		this.loadPlayerList().catch(err => console.error('error loading player list', err));
	},
	computed: {
		...mapGetters(['players'])
	},
	methods: {
		...mapActions(['loadPlayerList'])
	}
}
</script>

<style scoped>

</style>
