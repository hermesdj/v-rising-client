<template>
	<b-container>
		<AvailableModList/>
	</b-container>
</template>

<script>
import AvailableModList from "@/components/mods/AvailableModList.vue";

export default {
	name: "ModsPage",
	components: {AvailableModList}
}
</script>

<style scoped>

</style>
