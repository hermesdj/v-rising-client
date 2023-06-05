<template>
	<div>
		<b-card-header class="d-flex justify-content-between align-items-center">
			<div>{{ $t('hostSettings.title') }}</div>
			<b-button v-if="isAdmin" class="ml-auto" :to="{name: 'editServerHostSettings'}">
				<b-icon icon="pencil"/>
				{{ $t('app.btn.edit') }}
			</b-button>
		</b-card-header>
		<AutoTabSettingsFields
				:tabs="tabs"
				:current-tab-id="currentTabId"
				:current-sub-tab-id="currentSubTabId"
				namespace="hostSettings"
				route-name="showHostSettings"
		>
			<template #tabFields="{fields}">
				<SettingsFieldItem
						v-for="(field, index) in fields"
						:field="field"
						:key="index"
						namespace="hostSettings"
				/>
			</template>
			<template #subTabFields="{fields}">
				<SettingsFieldItem
						v-for="(field, index) in fields"
						:field="field"
						:key="index"
						namespace="hostSettings"
				/>
			</template>
			<template #subGroupFields="{fields}">
				<SettingsFieldItem
						v-for="(field, index) in fields"
						:field="field"
						:key="index"
						namespace="hostSettings"
				/>
			</template>
		</AutoTabSettingsFields>
	</div>
</template>

<script>
import {mapGetters} from "vuex";
import {formatFieldValue} from "@/store/utils";
import {hostSettingsDefinitions} from "@/settings/hostSettingsDefinitions";
import SettingsFieldItem from "@/components/settings/SettingsFieldItem.vue";
import AutoTabSettingsFields from "@/components/settings/AutoTabSettingsFields.vue";

export default {
	name: "HostSettingsCard",
	components: {AutoTabSettingsFields, SettingsFieldItem},
	props: {
		currentTabId: Number,
		currentSubTabId: Number,
	},
	computed: {
		...mapGetters('settings', ['hostSettings']),
		...mapGetters('auth', ['isAdmin']),
		hostSettingsDefinition() {
			return hostSettingsDefinitions(this);
		},
		currentTab() {
			return this.tabs[this.currentTabId];
		},
		currentSubTab() {
			return this.currentTab ? this.currentTab.groups[this.currentSubTabId] : null;
		},
		tabs() {
			return this.hostSettingsDefinition.tabs.map(tab => ({
				title: tab.title,
				fields: tab.fields ? tab.fields.map(field => ({
					label: field.label,
					value: formatFieldValue(this.hostSettings, field),
					model: field.model
				})) : [],
				groups: tab.groups ? tab.groups.map(group => ({
					legend: group.legend,
					fields: group.fields.map(field => ({
						label: field.label,
						value: formatFieldValue(this.gameSettings, field),
						model: field.model
					}))
				})) : []
			}))
		}
	}
}
</script>

<style scoped>

</style>
