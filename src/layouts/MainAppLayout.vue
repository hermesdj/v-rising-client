<template>
	<div id="layout">
		<ServerAlerts/>
		<PlayerModals/>
		<VampireThroneBackground/>
		<MainNavBar class="site-header"/>
		<router-view class="main-content"/>
	</div>
</template>

<script>
import MainNavBar from "@/components/app/MainNavBar.vue";
import VampireThroneBackground from "@/layouts/VampireThroneBackground.vue";
import ServerAlerts from "@/components/server/ServerAlerts.vue";
import PlayerModals from "@/components/players/PlayerModals.vue";

export default {
	name: "MainAppLayout",
	components: {PlayerModals, ServerAlerts, VampireThroneBackground, MainNavBar}
}
</script>

<style scoped>
.site-header {
	left: 0;
	position: fixed;
	top: 30px;
	width: 100%;
	z-index: 200;
}

.main-content {
	margin-top: 150px;
	margin-bottom: 150px;
	margin-left: 60px;
	z-index: 100;
	position: absolute;
	max-width: 1300px !important;
}
</style>
