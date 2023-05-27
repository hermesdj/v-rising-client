<template>
	<b-container>
		<b-card no-body bg-variant="dark" text-variant="white">
			<b-card-header>{{$t('hostSettings.edit')}}</b-card-header>
			<ServerHostSettingsForm/>
		</b-card>
	</b-container>
</template>

<script>
import ServerHostSettingsForm from "@/components/server/forms/ServerHostSettingsForm.vue";

export default {
	name: "EditHostSettings",
	components: {ServerHostSettingsForm}
}
</script>

<style scoped>

</style>
