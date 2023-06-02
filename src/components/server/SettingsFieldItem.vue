<template>
	<b-list-group-item
			class="d-flex justify-content-between align-items-center"
			variant="dark"
	>
		<b-tooltip
				triggers="hover"
				:target="`tooltip-field-${field.model}`"
				:disabled="!helpExistsByModel"
				v-if="helpExistsByModel"
		>
			{{ modelHelpText }}
		</b-tooltip>
		<b-tooltip
				triggers="hover"
				:target="`tooltip-field-${field.model}-${field.currentValue}`"
				:disabled="!helpExistsByValue"
				v-if="helpExistsByValue"
		>
			{{ valueHelpText }}
		</b-tooltip>
		<div>
			{{ field.label }}
			&nbsp;
			<b-icon
					icon="question-circle"
					:id="`tooltip-field-${field.model}`"
					variant="dark"
					v-if="helpExistsByModel"
			/>
		</div>
		<div>
			{{ field.value }}
			<b-icon
					icon="question-circle" :id="`tooltip-field-${field.model}-${field.currentValue}`"
					v-if="helpExistsByValue"
					variant="dark"
			/>
			<b-button v-if="field.isMultiple">
				<b-icon icon="caret-down"></b-icon>
			</b-button>
		</div>
	</b-list-group-item>
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
		helpExistsByValue() {
			return this.$te(`${this.namespace}.descriptions.${this.field.model}.${this.field.currentValue}`);
		},
		modelHelpText() {
			return this.helpExistsByModel ? this.$t(`${this.namespace}.descriptions.${this.field.model}`) : null;
		},
		valueHelpText() {
			return this.helpExistsByValue ? this.$t(`${this.namespace}.descriptions.${this.field.model}.${this.field.currentValue}`) : null;
		}
	}
}
</script>

<style scoped>

</style>
