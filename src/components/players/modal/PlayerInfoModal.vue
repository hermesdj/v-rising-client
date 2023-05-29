<template>
	<b-modal
			centered
			size="md"
			:id="`player-info-modal-${userIndex}`"
			ok-only
	>
		<template #modal-title>
			{{ $t('player.info.title', player) }}
			<b-icon icon="circle-fill" :variant="player.isConnected ? 'success' : 'danger'"></b-icon>
		</template>
		<div class="text-muted text-sm d-flex justify-content-between align-items-center">
			<em>
				{{ $t('player.fields.userIndex') }} {{ player.userIndex }} <span
					v-if="player.approvedUserIndex !== null"> - {{
					$t('player.fields.approvedUserIndex')
				}} {{ player.approvedUserIndex }}</span>
			</em>
			<em>
				<span v-if="player.isConnected">{{ $t('player.info.connected') }} {{ player.connectedAt | fromNow }}</span>
				<span v-else>{{ $t('player.info.disconnected') }} {{ player.disconnectedAt | fromNow }}</span>
			</em>
		</div>
		<b-alert show variant="info" v-if="player.disconnectReason">
			{{$t('player.info.disconnectReason', {message: player.disconnectReason})}}
		</b-alert>
	</b-modal>
</template>

<script>
import {mapGetters} from "vuex";
import dayjs from "dayjs";

export default {
	name: "PlayerInfoModal",
	props: {
		userIndex: {
			required: true
		}
	},
	filters: {
		fromNow(value) {
			return dayjs(value).fromNow();
		}
	},
	computed: {
		...mapGetters(['playerByUserIndex']),
		player() {
			return this.playerByUserIndex(this.userIndex);
		}
	}
}
</script>

<style scoped>

</style>
