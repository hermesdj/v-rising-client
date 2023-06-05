<template>
	<b-row
			class="mb-1"
	>
		<b-tooltip
				triggers="hover"
				:target="`tooltip-field-${field.model}`"
				:disabled="!helpExistsByModel"
				v-if="helpExistsByModel"
		>
			{{ modelHelpText }}
		</b-tooltip>
		<b-col cols="6">
			<h6 class="text-muted">
				{{ field.label }}
				&nbsp;
				<b-icon
						icon="question-circle"
						:id="`tooltip-field-${field.model}`"
						variant="light"
						v-if="helpExistsByModel"
				/>
			</h6>
		</b-col>
		<b-col cols="6">
			<div>
				<span v-if="!field.isMultiple || field.currentValue.length === 0">{{ field.value }}</span>
				<b-dropdown
						class="ml-1"
						v-else-if="field.isMultiple && field.currentValue.length > 0"
						:text="field.value + ''"
				>
					<b-dropdown-item v-for="({label}, index) in field.currentValue" :key="index">
						{{ label }}
					</b-dropdown-item>
				</b-dropdown>
			</div>
		</b-col>
	</b-row>
</template>

<script>
import {isObject} from "lodash";

export default {
	name: "SettingsFieldItem",
	props: {
		field: {
			type: Object,
			required: true
		},
		namespace: {
			type: String,
			default: 'gameSettings'
		}
	},
	computed: {
		helpExistsByModel() {
			if (!this.$te(`${this.namespace}.descriptions.${this.field.model}`)) {
				return false;
			}
			return !isObject(this.$t(`${this.namespace}.descriptions.${this.field.model}`));
		},
		modelHelpText() {
			return this.helpExistsByModel ? this.$t(`${this.namespace}.descriptions.${this.field.model}`) : null;
		}
	}
}
</script>

<style scoped>

</style>
