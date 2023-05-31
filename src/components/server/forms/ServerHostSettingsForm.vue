<template>
	<b-form @submit="onSubmit">
		<b-tabs pills vertical card v-model="currentTab">
			<b-tab v-for="(tab, index) in tabs" :key="index" :title="tab.title">
				<vue-form-generator
						:schema="{fields: tab.fields}"
						:model="model"
						:options="formOptions"
				>

				</vue-form-generator>
			</b-tab>
		</b-tabs>
		<b-card-footer class="text-right">
			<b-button type="submit" variant="primary">Submit</b-button>
		</b-card-footer>
	</b-form>
</template>

<script>
import {mapActions, mapGetters} from "vuex";
import {cloneDeep} from "lodash";
import {routerTabMixin} from "@/components/server/forms/router-tab-mixin";

export default {
	name: "ServerHostSettingsForm",
	mixins: [routerTabMixin],
	data() {
		return {
			model: {},
			formOptions: {
				validateAfterLoad: false,
				validateAfterChanged: true,
				validateAsync: true
			}
		}
	},
	mounted() {
		this.loadServerSettings().then(() => this.model = cloneDeep(this.hostSettings));
	},
	computed: {
		...mapGetters(['hostSettings', 'hostSettingsDefinition']),
		schema() {
			return this.hostSettingsDefinition;
		},
		tabs() {
			return this.schema.tabs.map(tab => ({
				title: tab.title,
				fields: tab.fields ? tab.fields.map(field => ({
					...field,
					help: this.$te('hostSettings.descriptions.' + field.model) ? this.$t('hostSettings.descriptions.' + field.model) : undefined
				})) : [],
				groups: tab.groups ? tab.groups.map(group => ({
					...group,
					fields: group.fields ? group.fields.map(field => ({
						...field,
						help: this.$te('hostSettings.descriptions.' + field.model) ? this.$t('hostSettings.descriptions.' + field.model) : undefined
					})) : []
				})) : []
			}))
		}
	},
	methods: {
		...mapActions(['loadServerSettings', 'updateHostSettings']),
		async onSubmit(event) {
			event.preventDefault()
			await this.updateHostSettings(this.model);
			await this.$router.push({name: 'showHostSettings', query: {...this.$router.currentRoute.query}});
		}
	}
}
</script>

<style scoped>

</style>
