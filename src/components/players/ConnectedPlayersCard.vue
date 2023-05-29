<template>
	<b-card
			bg-variant="dark"
			text-variant="white"
			no-body
	>
		<b-card-header>
			<div class="d-flex justify-content-between align-items-center w-100 h3 card-title">
				<div>{{ $t('player.list.title') }}</div>
				<b-button
						:title="showConnected ? $t('player.list.connectedOnly') : $t('player.list.all')"
						v-if="isAdmin"
						@click="showConnected = !showConnected"
						variant="outline-dark"
				>
					<b-icon icon="circle-fill" :variant="showConnected ? 'success' : 'danger'"></b-icon>
				</b-button>
			</div>
			<div class="text-muted card-subtitle">
				{{ $tc('player.count', connectedPlayers.length, {connected: connectedPlayers.length, total: players.length}) }}
			</div>
		</b-card-header>
		<b-table
				:fields="fields"
				:items="displayedPlayers"
				v-if="displayedPlayers.length > 0"
				table-variant="dark"
				hover
				sticky-header="500px"
				fixed
		>
			<template #cell(characterName)="{item}">
				<b-button variant="outline-dark" class="text-white"
									@click="() => $bvModal.show(`player-info-modal-${item.userIndex}`)">
					{{ item.characterName }}
				</b-button>
			</template>
			<template #cell(status)="{item}">
				<div class="d-flex justify-content-end align-items-center">
					<div v-b-tooltip.hover.top :title="$t('player.tooltips.isBanned', item)" class="mx-2" v-if="item.isBanned">
						<b-icon icon="person-x" variant="danger"></b-icon>
					</div>
					<div v-b-tooltip.hover.top :title="$t('player.tooltips.isAdmin', item)" v-if="item.isAdmin" class="mx-2">
						<b-icon icon="person-circle" variant="success"></b-icon>
					</div>
					<div
							v-b-tooltip.hover.top
							:title="item.isConnected ? $t('player.tooltips.isConnected', item) : $t('player.tooltips.isOffline', item)"
							class="mx-2"
					>
						<b-icon :variant="item.isConnected ? 'success' : 'danger'" icon="circle-fill">
						</b-icon>
					</div>
					<b-dropdown variant="outline-dark" v-if="isAdmin" size="sm" :text="$t('player.edit.title')" no-caret>
						<template #button-content>
							<b-icon variant="light" icon="pencil"></b-icon>
						</template>
						<b-dropdown-item
								variant="success" v-if="!item.isAdmin"
								@click="() => execUpdatePlayer({player: item, action: 'set-admin'})"
						>
							<b-icon icon="person-check"></b-icon>
							{{ $t('player.actions.set-admin.btn') }}
						</b-dropdown-item>
						<b-dropdown-item
								variant="danger" v-else
								@click="() => execUpdatePlayer({player: item, action: 'unset-admin'})"
						>
							<b-icon icon="person-check-fill"></b-icon>
							{{ $t('player.actions.unset-admin.btn') }}
						</b-dropdown-item>
						<b-dropdown-divider/>
						<b-dropdown-item
								variant="danger"
								v-if="!item.isBanned"
								@click="() => execUpdatePlayer({player: item, action: 'ban'})"
						>
							<b-icon icon="person-x-fill" variant="danger"></b-icon>
							{{ $t('player.actions.ban.btn') }}
						</b-dropdown-item>
						<b-dropdown-item
								variant="success"
								v-else
								@click="() => execUpdatePlayer({player: item, action: 'unban'})"
						>
							<b-icon icon="person-x" variant="success"></b-icon>
							{{ $t('player.actions.unban.btn') }}
						</b-dropdown-item>
					</b-dropdown>
				</div>
			</template>
		</b-table>
	</b-card>
</template>

<script>
import {mapActions, mapGetters} from "vuex";
import lodash, {sortBy} from "lodash";

export default {
	name: "ConnectedPlayersCard",
	data() {
		return {
			showConnected: true,
			fields: [
				{
					key: 'characterName',
					label: this.$t('player.fields.characterName'),
					formatter: (value) => lodash.isEmpty(value) ? 'Unknown' : value
				},
				{
					key: 'status',
					label: this.$t('player.fields.status'),
					sortable: false,
					class: 'text-right'
				}
			]
		}
	},
	mounted() {
		this.loadPlayerList().catch(err => console.error('error loading player list', err));
	},
	computed: {
		...mapGetters(['players', 'connectedPlayers', 'isAdmin']),
		displayedPlayers() {
			return sortBy(this.players.filter(player => !this.showConnected || player.isConnected), 'characterName');
		}
	},
	methods: {
		...mapActions([
			'loadPlayerList',
			'updatePlayer'
		]),
		async execUpdatePlayer({player, action}) {
			try {
				await this.updatePlayer({player, action});
				await this.$bvToast.toast(this.$t(`player.actions.${action}.success.content`, player), {
					title: this.$t(`player.actions.${action}.success.title`, player),
					variant: 'success',
					toaster: 'b-toaster-bottom-center',
					autoHideDelay: 2000
				});
			} catch (err) {
				console.error(err);
				await this.$bvToast.toast(this.$t(`player.actions.${action}.failure.content`, player), {
					title: this.$t(`player.actions.${action}.failure.title`, {...player, error: err.message}),
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
