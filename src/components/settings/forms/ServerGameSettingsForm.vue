<template>
	<b-form @submit="onSubmit">
		<AutoTabSettingsFields
				:current-tab-id="currentTabId"
				:current-sub-tab-id="currentSubTabId"
				:tabs="tabs"
				namespace="gameSettings"
				route-name="editServerGameSettings"
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
			<b-button type="submit" variant="primary" class="text-light">{{ $t('app.btn.submit') }}</b-button>
		</b-card-footer>
	</b-form>
</template>

<script>
import {mapActions, mapGetters} from "vuex";
import {cloneDeep} from "lodash";
import {gameSettingsDefinitions} from "@/settings/gameSettingsDefinitions";
import AutoTabSettingsFields from "@/components/settings/AutoTabSettingsFields.vue";

export default {
	name: "ServerGameSettingsForm",
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
		this.loadServerSettings().then(() => this.model = cloneDeep(this.gameSettings));
	},
	computed: {
		...mapGetters('settings', ['gameSettings']),
		gameSettingsDefinition() {
			return gameSettingsDefinitions(this);
		},
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
		...mapActions('settings', ['loadServerSettings', 'updateGameSettings']),
		async onSubmit(event) {
			event.preventDefault();
			await this.updateGameSettings(this.model);
			await this.$router.push({name: 'showGameSettings', query: {...this.$router.currentRoute.query}});
		}
	}
}
</script>

<style scoped>

</style>
