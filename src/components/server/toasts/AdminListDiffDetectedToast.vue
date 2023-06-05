<template>
	<b-toast
			toaster="b-toaster-bottom-right"
			variant="warning"
			id="admin-list-diff-detected"
			:visible="adminListDiff.length > 0 && !scheduledOperation && isAdmin"
			no-close-button
			solid
			no-auto-hide
			append-toast
			:title="$t('users.admin.diffModal.title')"
	>
		<b-row>
			<b-col>{{ $t('users.admin.diffModal.text', {size: adminListDiff.length}) }}</b-col>
		</b-row>
		<b-row>
			<b-col>
				<b-button v-b-modal:schedule-restart-server-modal class="mt-2" variant="warning">
					<b-icon icon="arrow-clockwise"/>
					{{ $t('server.dialogs.scheduleRestart.btn') }}
				</b-button>
				<b-button v-b-modal:show-admin-list-diff class="mt-2 ml-2" variant="info">
					<b-icon icon="info-circle"/>
					{{ $t('app.diff.showDiff') }}
				</b-button>
			</b-col>
		</b-row>
		<ShowSettingsDiffModal
				id="show-admin-list-diff"
				:title="$t('users.admin.diffModal.title')"
				:diff="adminListDiff"
				i18n-key="users.admin"
		/>
	</b-toast>
</template>

<script>
import {mapGetters} from "vuex";
import ShowSettingsDiffModal from "@/components/server/modal/ShowSettingsDiffModal.vue";

export default {
	name: "AdminListDiffDetectedToast",
	components: {ShowSettingsDiffModal},
	computed: {
		...mapGetters('auth', ['isAdmin']),
		...mapGetters('operations', ['scheduledOperation']),
		...mapGetters('settings', ['adminListDiff'])
	}
}
</script>

<style scoped>

</style>
