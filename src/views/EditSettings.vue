<template>
	<b-container>
		<b-card no-body bg-variant="dark" text-variant="white">
			<b-card-header>
				<b-button variant="link">
					<b-icon variant="light" icon="arrow-left" @click="$router.back()"></b-icon>
				</b-button>
				{{ $t(title) }}
			</b-card-header>
			<router-view :key="$route.path"/>
		</b-card>
	</b-container>
</template>

<script>
export default {
	name: "EditSettings",
	props: {
		title: {
			type: String,
			required: true
		}
	}
}
</script>

<style scoped>

</style>
