<template>
	<b-form @submit="onSubmit">
		<AutoTabSettingsFields
				:current-tab-id="currentTabId"
				:current-sub-tab-id="currentSubTabId"
				:tabs="tabs"
				namespace="hostSettings"
				route-name="editServerHostSettings"
		>
			<template #tabFields="{fields}">
				<vue-form-generator
						v-if="fields && fields.length > 0"
						:schema="{fields}"
						:model="model"
						:options="formOptions"
				>

				</vue-form-generator>
			</template>
			<template #subTabFields="{fields}">
				<vue-form-generator
						v-if="fields && fields.length > 0"
						:schema="{fields}"
						:model="model"
						:options="formOptions"
				>

				</vue-form-generator>
			</template>
			<template #subGroup="{subGroup}">
				<vue-form-generator
						v-if="subGroup && subGroup.subGroups && subGroup.subGroups.length > 0"
						:schema="{groups: subGroup.subGroups}"
						:model="model"
						:options="formOptions"
				>

				</vue-form-generator>
			</template>
		</AutoTabSettingsFields>
		<b-card-footer class="text-right">
			<b-button
					type="submit"
					class="text-white"
					variant="primary"
			>
				{{ $t('app.btn.submit') }}
			</b-button>
		</b-card-footer>
	</b-form>
</template>

<script>
import {mapActions, mapGetters} from "vuex";
import {cloneDeep} from "lodash";
import {hostSettingsDefinitions} from "@/settings/hostSettingsDefinitions";
import AutoTabSettingsFields from "@/components/settings/AutoTabSettingsFields.vue";

export default {
	name: "ServerHostSettingsForm",
	components: {AutoTabSettingsFields},
	props: {
		currentTabId: Number,
		currentSubTabId: Number,
	},
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
		...mapGetters('settings', ['hostSettings']),
		hostSettingsDefinition() {
			return hostSettingsDefinitions(this);
		},
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
		...mapActions('settings', ['loadServerSettings', 'updateHostSettings']),
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
