<template>
	<b-container>
		<ApiLogViewer />
	</b-container>
</template>

<script>
import ApiLogViewer from "@/components/server/logs/ApiLogViewer.vue";

export default {
	name: "ServerLogPage",
	components: {ApiLogViewer},
}
</script>

<style scoped>

</style>
