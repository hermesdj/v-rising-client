<template>
	<b-toast
			toaster="b-toaster-bottom-right"
			variant="warning"
			id="game-settings-diff-detected"
			:visible="gameSettingsDiff.length > 0 && !scheduledOperation && isAdmin"
			no-close-button
			solid
			no-auto-hide
			append-toast
			:title="$t('gameSettings.diff.title')"
	>
		<b-row>
			<b-col>
				{{ $t('gameSettings.diff.text', {size: gameSettingsDiff.length}) }}
			</b-col>
		</b-row>
		<b-row>
			<b-col>
				<b-button v-b-modal:schedule-restart-server-modal class="mt-2" variant="warning">
					<b-icon icon="arrow-clockwise"/>
					{{ $t('server.dialogs.scheduleRestart.btn') }}
				</b-button>
				<b-button v-b-modal:show-game-settings-diff class="mt-2 ml-2" variant="info">
					<b-icon icon="info-circle"/>
					{{ $t('app.diff.showDiff') }}
				</b-button>
			</b-col>
		</b-row>
		<ShowSettingsDiffModal
				id="show-game-settings-diff"
				:title="$t('gameSettings.diffModal.title')"
				:diff="gameSettingsDiff"
				i18n-key="gameSettings"
				:definition="gameSettingsDefinition"
		/>
	</b-toast>
</template>

<script>
import {mapGetters} from "vuex";
import ShowSettingsDiffModal from "@/components/server/modal/ShowSettingsDiffModal.vue";
import {gameSettingsDefinitions} from "@/settings/gameSettingsDefinitions";

export default {
	name: "GameSettingsDiffDetectedToast",
	components: {ShowSettingsDiffModal},
	computed: {
		...mapGetters('auth', ['isAdmin']),
		...mapGetters('operations', ['scheduledOperation']),
		...mapGetters('settings', ['gameSettingsDiff']),
		gameSettingsDefinition() {
			return gameSettingsDefinitions(this);
		},
	}
}
</script>

<style scoped>

</style>
