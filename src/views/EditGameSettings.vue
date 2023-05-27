<template>
	<b-container>
		<b-card no-body bg-variant="dark" text-variant="white">
			<b-card-header>{{ $t('gameSettings.edit')}}</b-card-header>
			<ServerGameSettingsForm/>
		</b-card>
	</b-container>
</template>

<script>
import ServerGameSettingsForm from "@/components/server/forms/ServerGameSettingsForm.vue";

export default {
	name: "EditGameSettings",
	components: {ServerGameSettingsForm}
}
</script>

<style scoped>

</style>
