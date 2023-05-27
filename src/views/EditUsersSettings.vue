<template>
	<b-container>
		<b-card no-body bg-variant="dark" text-variant="white">
			<b-card-header>{{ $t('users.edit') }}</b-card-header>
			<ServerUsersSettingsForm/>
		</b-card>
	</b-container>
</template>

<script>
import ServerUsersSettingsForm from "@/components/server/forms/ServerUsersSettingsForm.vue";

export default {
	name: "EditUsersSettings",
	components: {ServerUsersSettingsForm}
}
</script>

<style scoped>

</style>
