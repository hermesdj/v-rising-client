<template>
	<div>
		<PlayerInfoModal
				:user-index="player.userIndex"
				v-for="player in players"
				:key="player.userIndex"
		>

		</PlayerInfoModal>
	</div>
</template>

<script>
import PlayerInfoModal from "@/components/players/modal/PlayerInfoModal.vue";
import {mapGetters} from "vuex";

export default {
	name: "PlayerModals",
	components: {PlayerInfoModal},
	computed: {
		...mapGetters('players', ['players'])
	}
}
</script>

<style scoped>

</style>
