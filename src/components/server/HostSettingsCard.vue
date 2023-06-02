<template>
	<div>
		<b-card-header class="d-flex justify-content-between align-items-center">
			<div>{{ $t('hostSettings.title') }}</div>
			<b-button v-if="isAdmin" class="ml-auto" :to="{name: 'editServerHostSettings', query: {...$route.query}}">
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
							namespace="hostSettings"
					/>
				</b-list-group>
				<b-tabs v-if="groups && groups.length > 0" card pills small v-model="currentSubTab">
					<b-tab
							v-for="({title, fields}, index) in groups"
							:key="index"
							:title="title"
					>
						<b-list-group
								flush
								v-if="fields && fields.length > 0"
						>
							<SettingsFieldItem
									v-for="(field, index) in fields"
									:field="field"
									:key="index"
									namespace="hostSettings"
							/>
						</b-list-group>
					</b-tab>
				</b-tabs>
			</b-tab>
		</b-tabs>
	</div>
</template>

<script>
import {mapGetters} from "vuex";
import {formatFieldValue} from "@/store/utils";
import {routerTabMixin} from "@/components/server/forms/router-tab-mixin";
import {hostSettingsDefinitions} from "@/settings/hostSettingsDefinitions";
import SettingsFieldItem from "@/components/server/SettingsFieldItem.vue";

export default {
	name: "HostSettingsCard",
	components: {SettingsFieldItem},
	mixins: [routerTabMixin],
	computed: {
		...mapGetters(['hostSettings', 'isAdmin']),
		hostSettingsDefinition() {
			return hostSettingsDefinitions(this);
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
					title: group.legend,
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
