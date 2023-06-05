<template>
	<b-card
			bg-variant="dark"
			text-variant="light"
			header-bg-variant="dark"
			header-text-variant="light"
			no-body
	>
		<b-card-header>
			<h6>{{ $t('mods.available.title') }}</h6>
		</b-card-header>
		<b-list-group flush>
			<b-list-group-item
					v-for="(mod, index) in availableMods"
					variant="dark"
					:key="index"
			>
				<div class="d-flex w-100 justify-content-between">
					<h5 class="mb-1">{{ mod.name }}</h5>
					<small class="text-muted">{{ mod.date_updated | fromNow }}</small>
				</div>
				<p class="mb-1" v-if="mod.versions && mod.versions.length > 0">
					{{ mod.versions[0].description }}
				</p>
			</b-list-group-item>
		</b-list-group>
	</b-card>
</template>

<script>
import {mapActions, mapGetters} from "vuex";
import dayjs from "dayjs";

export default {
	name: "AvailableModList",
	mounted() {
		this.loadAvailableMods();
	},
	filters: {
		fromNow(value) {
			return dayjs(value).fromNow();
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
