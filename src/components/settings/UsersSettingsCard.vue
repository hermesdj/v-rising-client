<template>
	<div>
		<b-card-header class="d-flex justify-content-between align-items-center">
			<div>{{ $t('users.title') }}</div>
			<b-button v-if="isAdmin" class="ml-auto" :to="{name: 'editUsersSettings'}">
				<b-icon icon="pencil"/>
				{{ $t('app.btn.edit') }}
			</b-button>
		</b-card-header>
		<b-row class="mb-4 px-4">
			<b-col>
				<b-card no-body bg-variant="dark" text-variant="light" border-variant="dark" class="rounded-0">
					<b-card-header header-bg-variant="dark">
						{{ $t('users.admin.title', {size: currentAdminList.length}) }} <small
							class="text-muted">{{ $tc('users.admin.size', currentAdminList.length, {size: currentAdminList.length}) }}</small>
					</b-card-header>
					<b-list-group flush class="rounded-0">
						<b-list-group-item
								v-for="(admin, index) in currentAdminList"
								:key="index"
								variant="dark"
						>
							{{ admin }}
						</b-list-group-item>
						<b-list-group-item
								variant="info"
								v-if="!currentAdminList || currentAdminList.length === 0"
						>
							<b-icon icon="info-circle"></b-icon>
							{{ $t('users.admin.empty') }}
						</b-list-group-item>
					</b-list-group>
				</b-card>
			</b-col>
			<b-col>
				<b-card no-body bg-variant="dark" text-variant="light" border-variant="dark" class="rounded-0">
					<b-card-header header-bg-variant="dark">
						{{ $t('users.ban.title') }} <small
							class="text-muted">{{ $tc('users.ban.size', currentAdminList.length, {size: currentBanList.length}) }}</small>
					</b-card-header>
					<b-list-group flush class="rounded-0">
						<b-list-group-item
								v-for="(admin, index) in currentBanList"
								:key="index"
								variant="dark"
						>
							{{ admin }}
						</b-list-group-item>
						<b-list-group-item
								variant="info"
								v-if="!currentBanList || currentBanList.length === 0"
						>
							<b-icon icon="info-circle"></b-icon>
							{{ $t('users.ban.empty') }}
						</b-list-group-item>
					</b-list-group>
				</b-card>
			</b-col>
		</b-row>
	</div>
</template>

<script>
import {mapGetters} from "vuex";

export default {
	name: "UsersSettingsCard",
	computed: {
		...mapGetters('auth', ['isAdmin']),
		...mapGetters('settings', ['currentAdminList', 'currentBanList'])
	}
}
</script>

<style scoped>

</style>
