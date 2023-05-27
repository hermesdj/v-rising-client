<template>
	<div>
		<b-card-header class="d-flex justify-content-between align-items-center">
			<div>{{ $t('hostSettings.title') }}</div>
			<b-button v-if="isLoggedIn" class="ml-auto" :to="{name: 'editServerHostSettings'}">
				<b-icon icon="pencil"/>
				{{ $t('app.btn.edit') }}
			</b-button>
		</b-card-header>
		<b-tabs card pills vertical>
			<b-tab
					v-for="({title, fields, groups}, index) in tabs"
					:key="index"
					:title="title"
					:no-body="groups && groups.length > 0"
			>
				<b-list-group flush v-if="fields && fields.length > 0">
					<b-list-group-item
							v-for="(field, index) in fields"
							:key="index"
							class="d-flex justify-content-between align-items-center"
							variant="dark"
					>
						<b-tooltip
								triggers="hover"
								:target="'tooltip-field-' + field.model"
								:disabled="!$te('hostSettings.descriptions.' + field.model)"
								v-if="$te('gameSettings.descriptions.' + field.model)"
						>
							{{ $t('hostSettings.descriptions.' + field.model) }}
						</b-tooltip>
						<div>{{ field.label }}&nbsp;<b-icon icon="question-circle" :id="'tooltip-field-' + field.model"
																								v-if="$te('hostSettings.descriptions.' + field.model)"/>
						</div>
						<div>{{ field.value }}</div>
					</b-list-group-item>
				</b-list-group>
				<b-tabs v-if="groups && groups.length > 0" card pills small>
					<b-tab
							v-for="({title, fields}, index) in groups"
							:key="index"
							:title="title"
					>
						<b-list-group flush v-if="fields && fields.length > 0">
							<b-list-group-item
									v-for="(field, index) in fields"
									:key="index"
									class="d-flex justify-content-between align-items-center"
									variant="dark"
							>
								<b-tooltip
										triggers="hover"
										:target="'tooltip-field-' + field.model"
										:disabled="!$te('hostSettings.descriptions.' + field.model)"
										v-if="$te('gameSettings.descriptions.' + field.model)"
								>
									{{ $t('hostSettings.descriptions.' + field.model) }}
								</b-tooltip>
								<div>{{ field.label }}&nbsp;<b-icon icon="question-circle" :id="'tooltip-field-' + field.model"
																										v-if="$te('hostSettings.descriptions.' + field.model)"/>
								</div>
								<div>{{ field.value }}</div>
							</b-list-group-item>
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

export default {
	name: "HostSettingsCard",
	computed: {
		...mapGetters(['hostSettings', 'hostSettingsDefinition', 'isLoggedIn']),
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
