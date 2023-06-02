<template>
	<div>
		<b-card-header class="d-flex justify-content-between align-items-center">
			<div>{{ $t('gameSettings.title') }}</div>
			<b-button v-if="isAdmin" class="ml-auto" :to="{name: 'editServerGameSettings', query: {...$route.query}}">
				<b-icon icon="pencil"/>
				{{ $t('app.btn.edit') }}
			</b-button>
		</b-card-header>
		<b-tabs card pills vertical v-model="currentTab">
			<b-tab
					v-for="({title, fields, groups}, index) in tabs"
					:key="index"
					:title="title"
					:no-body="groups && groups.length > 0"
			>
				<b-list-group flush v-if="fields && fields.length > 0">
					<SettingsFieldItem
							v-for="(field, index) in fields"
							:field="field"
							:key="index"
					/>
				</b-list-group>
				<b-tabs
						v-if="groups && groups.length > 0 && groups.length < 6"
						card
						pills
						small
						v-model="currentSubTab"
				>
					<b-tab
							v-for="({title, fields}, index) in groups"
							:key="index"
							:title="title"
					>
						<b-list-group flush v-if="fields && fields.length > 0">
							<SettingsFieldItem
									v-for="(field, index) in fields"
									:field="field"
									:key="index"
							/>
						</b-list-group>
					</b-tab>
				</b-tabs>
				<template v-else-if="groups && groups.length >= 6">
					<b-tabs
							v-model="currentSubTab"
							pills
							card
							small
					>
						<b-tab
								v-for="({letter, subGroups}, index) in splitGroups(groups)"
								:key="`tab-${index}`"
								:title="letter"
						>
							<div
									v-for="({title, fields}, index) in subGroups"
									:key="`subgroup-${index}`"
							>
								<p class="h4 mb-2">{{title}}</p>
								<b-list-group
										flush
								>
									<SettingsFieldItem
											v-for="(field, index) in fields"
											:field="field"
											:key="index"
									/>
								</b-list-group>
								<hr />
							</div>
						</b-tab>
					</b-tabs>
				</template>
			</b-tab>
		</b-tabs>
	</div>
</template>

<script>
import {mapGetters} from "vuex";
import {formatField, splitGroups} from "@/store/utils";
import {routerTabMixin} from "@/components/server/forms/router-tab-mixin";
import {gameSettingsDefinitions} from "@/settings/gameSettingsDefinitions";
import SettingsFieldItem from "@/components/server/SettingsFieldItem.vue";

export default {
	name: "GameSettingsCard",
	components: {SettingsFieldItem},
	mixins: [routerTabMixin],
	data() {
		return {
			categories: [
				{
					key: 'Inactivity',
					settings: [
						'InactivityKillEnabled',
						'InactivityKillTimeMin',
						'InactivityKillTimeMax',
						'InactivityKillSafeTimeAddition',
						'InactivityKillTimerMaxItemLevel'
					]
				}
			]
		}
	},
	computed: {
		...mapGetters(['gameSettings', 'isAdmin']),
		gameSettingsDefinition() {
			return gameSettingsDefinitions(this);
		},
		tabs() {
			return this.gameSettingsDefinition.tabs.map(tab => ({
				title: tab.title,
				fields: tab.fields ? tab.fields.map((field) => formatField(this.gameSettings, field)) : [],
				groups: tab.groups ? tab.groups.map(group => ({
					title: group.legend,
					fields: group.fields.map((field) => formatField(this.gameSettings, field))
				})) : []
			}))
		}
	},
	methods: {
		splitGroups(groups) {
			return splitGroups(groups);
		}
	}
}
</script>

<style scoped>

</style>
