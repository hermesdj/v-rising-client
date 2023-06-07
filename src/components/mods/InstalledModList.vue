<template>
	<ModListPaginator
			:page="page"
			:mods="installedMods"
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
import dayjs from "dayjs";

export default {
	name: "InstalledModList",
	components: {DisplayModRowItem, ModListPaginator},
	props: {
		page: {
			type: Number,
			default: 1
		}
	},
	mounted() {
		if (this.installedMods.length === 0) {
			this.loadInstalledMods();
		}
	},
	filters: {
		fromNow(value) {
			return dayjs(value).fromNow();
		}
	},
	computed: {
		...mapGetters('mods', ['installedMods'])
	},
	methods: {
		...mapActions('mods', ['loadInstalledMods'])
	}
}
</script>

<style scoped>

</style>
