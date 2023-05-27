<template>
	<b-form @submit="onSubmit">
		<b-tabs pills vertical card>
			<b-tab
					v-for="(tab, index) in tabs"
					:key="index"
					:title="tab.title"
					:no-body="!tab.fields || tab.fields.length === 0"
			>
				<vue-form-generator
						v-if="tab.fields && tab.fields.length > 0"
						:schema="{fields: tab.fields}"
						:model="model"
						:options="formOptions"
				>

				</vue-form-generator>
				<b-tabs pills card v-if="tab.groups && tab.groups.length > 0">
					<b-tab
						v-for="(group, index) in tab.groups"
						:key="index"
						:title="group.legend"
					>
						<vue-form-generator
								v-if="group.fields && group.fields.length > 0"
								:schema="{fields: group.fields}"
								:model="model"
								:options="formOptions"
						>

						</vue-form-generator>
					</b-tab>
				</b-tabs>
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
	name: "ServerGameSettingsForm",
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
		this.loadServerSettings().then(() => this.model = {...this.gameSettings});
	},
	computed: {
		...mapGetters(['gameSettings', 'gameSettingsDefinition']),
		schema() {
			return this.gameSettingsDefinition;
		},
		tabs() {
			return this.schema.tabs.map(tab => ({
				title: tab.title,
				fields: tab.fields ? tab.fields.map(field => ({
					...field,
					help: this.$te('gameSettings.descriptions.' + field.model) ? this.$t('gameSettings.descriptions.' + field.model) : undefined
				})) : [],
				groups: tab.groups ? tab.groups.map(group => ({
					...group,
					fields: group.fields ? group.fields.map(field => ({
						...field,
						help: this.$te('gameSettings.descriptions.' + field.model) ? this.$t('gameSettings.descriptions.' + field.model) : undefined
					})) : []
				})) : []
			}))
		}
	},
	methods: {
		...mapActions(['loadServerSettings', 'updateGameSettings']),
		async onSubmit(event) {
			event.preventDefault();
			await this.updateGameSettings(this.model);
			await this.$router.push({name: 'showGameSettings'});
		}
	}
}
</script>

<style scoped>

</style>
