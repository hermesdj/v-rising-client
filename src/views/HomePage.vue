<template>
	<b-container>
		<b-row>
			<b-col>
				<ServerToolbar/>
			</b-col>
		</b-row>
		<b-row>
			<b-col>
				<ServerInfoCard/>
			</b-col>
			<b-col>
				<ConnectedPlayersCard/>
			</b-col>
		</b-row>
	</b-container>
</template>

<script>

import ConnectedPlayersCard from "@/components/players/ConnectedPlayersCard.vue";
import ServerInfoCard from "@/components/server/ServerInfoCard.vue";
import ServerToolbar from "@/components/server/ServerToolbar.vue";

export default {
	name: "HomePage",
	components: {ServerToolbar, ServerInfoCard, ConnectedPlayersCard}
}

</script>

<style scoped>

</style>
