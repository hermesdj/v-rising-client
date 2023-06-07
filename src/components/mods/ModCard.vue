<template>
	<b-card
			v-if="mod"
			bg-variant="dark"
			text-variant="light"
	>
		<b-card-title>{{ mod.name.replace(/_/g, ' ') }}</b-card-title>
		<p
				v-if="mod.versions.length > 0"
				class="text-muted"
		>
			{{ mod.versions[0].description }}
		</p>
	</b-card>
</template>

<script>
import {mapGetters} from "vuex";

export default {
	name: "ModCard",
	props: {
		uuid: {
			type: String,
			required: true
		}
	},
	computed: {
		...mapGetters('mods', ['getModByUuid']),
		mod() {
			return this.getModByUuid(this.uuid);
		}
	}
}
</script>

<style scoped>

</style>
