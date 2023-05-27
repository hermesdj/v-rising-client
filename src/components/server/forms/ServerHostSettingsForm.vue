<template>
	<b-form @submit="onSubmit">
		<b-tabs pills vertical card>
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

export default {
	name: "ServerHostSettingsForm",
	data() {
		return {
			model: {},
			formOptions: {
				validateAfterLoad: true,
				validateAfterChanged: true,
				validateAsync: true
			}
		}
	},
	mounted() {
		this.loadServerSettings().then(() => this.model = {...this.hostSettings});
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
			await this.$router.push({name: 'showHostSettings'});
		}
	}
}
</script>

<style scoped>

</style>
