<template>
	<div>
		<div class="d-flex w-100 justify-content-between">
			<h6 class="mb-1">
				<router-link :to="{name: 'modPage', params: {uuid: mod.uuid4}}">
					{{ mod.name.replace(/_/g, ' ') }}
				</router-link>
				<b-badge
						v-for="(category, index) in mod.categories"
						:key="index"
						class="mr-1"
						variant="dark"
				>
					{{ category }}
				</b-badge>
				<b-btn size="sm" variant="link" :href="mod.package_url" target="_blank">
					<b-icon variant="info" icon="link45deg"></b-icon>
				</b-btn>
			</h6>
			<small class="text-muted">
				{{ mod.date_updated | fromNow }}
			</small>
		</div>
		<p class="text-muted text-sm" v-if="mod.versions && mod.versions.length > 0">
			{{ mod.versions[0].description }}
		</p>
	</div>
</template>

<script>
import dayjs from "dayjs";

export default {
	name: "DisplayModRowItem",
	props: {
		mod: {
			type: Object,
			required: true
		}
	},
	filters: {
		fromNow(value) {
			return dayjs(value).fromNow();
		}
	},
}
</script>

<style scoped>

</style>
