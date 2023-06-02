<template>
	<b-toast
			toaster="b-toaster-bottom-right"
			variant="warning"
			id="host-settings-diff-detected"
			:visible="hostSettingsDiff.length > 0 && !scheduledOperation && isAdmin"
			no-close-button
			solid
			no-auto-hide
			append-toast
			:title="$t('hostSettings.diff.title')"
	>
		<b-row>
			<b-col>
				{{ $t('hostSettings.diff.text', {size: hostSettingsDiff.length}) }}
			</b-col>
		</b-row>
		<b-row>
			<b-col>
				<b-button v-b-modal:schedule-restart-server-modal class="mt-2" variant="warning">
					<b-icon icon="arrow-clockwise"/>
					{{ $t('server.dialogs.scheduleRestart.btn') }}
				</b-button>
				<b-button v-b-modal:show-host-settings-diff class="mt-2 ml-2" variant="info">
					<b-icon icon="info-circle"/>
					{{ $t('app.diff.showDiff') }}
				</b-button>
			</b-col>
		</b-row>
		<ShowSettingsDiffModal
				id="show-host-settings-diff"
				:title="$t('hostSettings.diffModal.title')"
				:diff="hostSettingsDiff"
				i18n-key="hostSettings"
				:definition="hostSettingsDefinition"
		/>
	</b-toast>
</template>

<script>
import {mapGetters} from "vuex";
import ShowSettingsDiffModal from "@/components/server/modal/ShowSettingsDiffModal.vue";
import {hostSettingsDefinitions} from "@/settings/hostSettingsDefinitions";

export default {
	name: "HostSettingsDiffDetectedToast",
	components: {ShowSettingsDiffModal},
	computed: {
		...mapGetters([
			'isAdmin',
			'scheduledOperation',
			'hostSettingsDiff'
		]),
		hostSettingsDefinition(){
			return hostSettingsDefinitions(this);
		},
	}
}
</script>

<style scoped>

</style>
