<template>
	<b-form @submit="onSubmit">
		<b-tabs
				pills
				vertical
				card
				v-model="currentTab"
		>
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
				<b-tabs
						pills
						card
						v-if="tab.groups && tab.groups.length > 0 && tab.groups.length < 10"
						v-model="currentSubTab"
				>
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
				<template v-else-if="tab.groups && tab.groups.length >= 10">
					<b-tabs
							v-model="currentSubTab"
							pills
							card
							small
					>
						<b-tab
								v-for="({letter, subGroups}, index) in splitGroups(tab.groups)"
								:key="`tab-${index}`"
								:title="letter"
						>
							<vue-form-generator
									v-if="subGroups && subGroups.length > 0"
									:schema="{groups: subGroups}"
									:model="model"
									:options="formOptions"
							>

							</vue-form-generator>
						</b-tab>
					</b-tabs>
				</template>
			</b-tab>
		</b-tabs>
		<b-card-footer class="text-right">
			<b-button type="submit" variant="primary">{{$t('app.btn.submit')}}</b-button>
		</b-card-footer>
	</b-form>
</template>

<script>
import {mapActions, mapGetters} from "vuex";
import {cloneDeep} from "lodash";
import {routerTabMixin} from "@/components/server/forms/router-tab-mixin";
import {gameSettingsDefinitions} from "@/settings/gameSettingsDefinitions";
import {splitGroups} from "@/store/utils";

export default {
	name: "ServerGameSettingsForm",
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
		this.loadServerSettings().then(() => this.model = cloneDeep(this.gameSettings));
	},
	computed: {
		...mapGetters(['gameSettings']),
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
		...mapActions(['loadServerSettings', 'updateGameSettings']),
		async onSubmit(event) {
			event.preventDefault();
			await this.updateGameSettings(this.model);
			await this.$router.push({name: 'showGameSettings', query: {...this.$router.currentRoute.query}});
		},
		splitGroups(groups) {
			return splitGroups(groups);
		}
	}
}
</script>

<style scoped>

</style>
