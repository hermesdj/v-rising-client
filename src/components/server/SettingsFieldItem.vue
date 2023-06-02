<template>
	<b-list-group-item
			class="d-flex justify-content-between align-items-center"
			variant="dark"
	>
		<b-tooltip
				triggers="hover"
				:target="'tooltip-field-' + field.model"
				:disabled="!$te('gameSettings.descriptions.' + field.model)"
				v-if="$te('gameSettings.descriptions.' + field.model)"
		>
			{{ $t('gameSettings.descriptions.' + field.model) }}
		</b-tooltip>
		<div>
			{{ field.label }}
			&nbsp;<b-icon icon="question-circle" :id="'tooltip-field-' + field.model"
										v-if="$te('gameSettings.descriptions.' + field.model)"/>
		</div>
		<div>
			{{ field.value }}
			<b-button v-if="field.isMultiple">
				<b-icon icon="caret-down"></b-icon>
			</b-button>
		</div>
	</b-list-group-item>
</template>

<script>
export default {
	name: "SettingsFieldItem",
	props: {
		field: {
			type: Object,
			required: true
		}
	}
}
</script>

<style scoped>

</style>
