<template>
	<ModListPaginator
			:page="page"
			:mods="availableMods"
	>
		<template #default="{mod}">
			<DisplayModRowItem :mod="mod"/>
		</template>
	</ModListPaginator>
</template>

<script>
import {mapActions, mapGetters} from "vuex";
import ModListPaginator from "@/components/mods/ModListPaginator.vue";
import DisplayModRowItem from "@/components/mods/DisplayModRowItem.vue";

export default {
	name: "AvailableModList",
	components: {DisplayModRowItem, ModListPaginator},
	props: {
		page: {
			type: Number,
			default: 1
		}
	},
	mounted() {
		if (this.availableMods.length === 0) {
			this.loadAvailableMods();
		}
	},
	computed: {
		...mapGetters('mods', ['availableMods'])
	},
	methods: {
		...mapActions('mods', ['loadAvailableMods'])
	}
}
</script>

<style scoped>

</style>
