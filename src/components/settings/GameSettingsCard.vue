<template>
	<div>
		<b-card-header class="d-flex justify-content-between align-items-center">
			<div>{{ $t('gameSettings.title') }}</div>
			<b-button v-if="isAdmin" class="ml-auto" :to="{name: 'editServerGameSettings'}">
				<b-icon icon="pencil"/>
				{{ $t('app.btn.edit') }}
			</b-button>
		</b-card-header>
		<AutoTabSettingsFields
				:tabs="tabs"
				:current-sub-tab-id="currentSubTabId"
				:current-tab-id="currentTabId"
				route-name="showGameSettings"
				namespace="gameSettings"
		>
			<template #tabFields="{fields}">
				<SettingsFieldItem
						v-for="(field, index) in fields"
						:field="field"
						:key="index"
						namespace="gameSettings"
				/>
			</template>
			<template #subTabFields="{fields}">
				<SettingsFieldItem
						v-for="(field, index) in fields"
						:field="field"
						:key="index"
						namespace="gameSettings"
				/>
			</template>
			<template #subGroupFields="{fields}">
				<SettingsFieldItem
						v-for="(field, index) in fields"
						:field="field"
						:key="index"
						namespace="gameSettings"
				/>
			</template>
		</AutoTabSettingsFields>
	</div>
</template>

<script>
import {mapGetters} from "vuex";
import {formatField} from "@/store/utils";
import {gameSettingsDefinitions} from "@/settings/gameSettingsDefinitions";
import SettingsFieldItem from "@/components/settings/SettingsFieldItem.vue";
import AutoTabSettingsFields from "@/components/settings/AutoTabSettingsFields.vue";

export default {
	name: "GameSettingsCard",
	components: {AutoTabSettingsFields, SettingsFieldItem},
	props: {
		currentTabId: Number,
		currentSubTabId: Number,
	},
	computed: {
		...mapGetters('settings', ['gameSettings']),
		...mapGetters('auth', ['isAdmin']),
		gameSettingsDefinition() {
			return gameSettingsDefinitions(this);
		},
		tabs() {
			return this.gameSettingsDefinition.tabs.map(tab => ({
				title: tab.title,
				fields: tab.fields ? tab.fields.map((field) => formatField(this.gameSettings, field)) : [],
				groups: tab.groups ? tab.groups.map(group => ({
					legend: group.legend,
					fields: group.fields.map((field) => formatField(this.gameSettings, field))
				})) : []
			}))
		}
	}
}
</script>

<style scoped>
.nav-small {
	padding-left: 0.75em !important;
	padding-right: 0.75em !important;
}
</style>
