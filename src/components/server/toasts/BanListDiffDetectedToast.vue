<template>
	<b-toast
			toaster="b-toaster-bottom-right"
			variant="warning"
			id="ban-list-diff-detected"
			:visible="banListDiff.length > 0 && !scheduledOperation && isAdmin"
			no-close-button
			solid
			no-auto-hide
			append-toast
			:title="$t('users.ban.diffModal.title')"
	>
		<b-row>
			<b-col>{{ $t('users.ban.diffModal.text', {size: banListDiff.length}) }}</b-col>
		</b-row>
		<b-row>
			<b-col>
				<b-button v-b-modal:schedule-restart-server-modal class="mt-2" variant="warning">
					<b-icon icon="arrow-clockwise"/>
					{{ $t('server.dialogs.scheduleRestart.btn') }}
				</b-button>
				<b-button v-b-modal:show-ban-list-diff class="mt-2 ml-2" variant="info">
					<b-icon icon="info-circle"/>
					{{ $t('app.diff.showDiff') }}
				</b-button>
			</b-col>
		</b-row>
		<ShowSettingsDiffModal
				id="show-ban-list-diff"
				:title="$t('users.ban.diffModal.title')"
				:diff="banListDiff"
				i18n-key="users.ban"
		/>
	</b-toast>
</template>

<script>
import {mapGetters} from "vuex";
import ShowSettingsDiffModal from "@/components/server/modal/ShowSettingsDiffModal.vue";

export default {
	name: "BanListDiffDetectedToast",
	components: {ShowSettingsDiffModal},
	computed: {
		...mapGetters('auth', ['isAdmin']),
		...mapGetters('settings', ['banListDiff']),
		...mapGetters('operations', [
			'scheduledOperation'
		]),
	}
}
</script>

<style scoped>

</style>
