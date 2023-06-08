<template>
	<div>
		<b-list-group flush>
			<b-list-group-item v-if="mods.length === 0" variant="dark">
				{{ $t('mods.empty') }}
			</b-list-group-item>
			<b-list-group-item
					v-for="(mod, index) in pageItems"
					variant="dark"
					:key="index"
			>
				<slot :mod="mod" :index="index"></slot>
			</b-list-group-item>
		</b-list-group>
		<b-card-footer v-if="mods.length > 0">
			<b-pagination-nav align="center" :link-gen="linkGen" use-router :number-of-pages="totalPages" replace/>
		</b-card-footer>
	</div>
</template>

<script>
export default {
	name: "ModListPaginator",
	props: {
		page: {
			type: Number,
			default: 1
		},
		mods: {
			type: Array,
			default: () => []
		},
		modsPerPage: {
			type: Number,
			default: 5
		}
	},
	computed: {
		currentPage: {
			get() {
				return this.page;
			},
			set(val) {
				this.$emit('update:page', val);
			}
		},
		pageItems() {
			return this.paginate(this.mods, this.modsPerPage, this.page);
		},
		totalPages() {
			return this.calculatePageCount(this.modsPerPage, this.mods.length);
		}
	},
	methods: {
		calculatePageCount(pageSize, totalCount) {
			return totalCount < pageSize ? 1 : Math.ceil(totalCount / pageSize);
		},
		paginate(array, pageSize, pageNumber) {
			return array.slice((pageNumber - 1) * pageSize, pageNumber * pageSize);
		},
		linkGen(pageNum) {
			return {name: this.$route.name, params: {page: pageNum}};
		}
	}
}
</script>

<style scoped>

</style>
