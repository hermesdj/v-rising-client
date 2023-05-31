<template>
	<b-form-group>
		<b-form-timepicker
				v-model="value"
				:disabled="disabled"
				locale="en"
				hide-header
				:hour12="false"
				style="display: flex !important;"
		>

		</b-form-timepicker>
	</b-form-group>
</template>

<script>
import {abstractField} from "vue-form-generator";
import {padStart} from "lodash";

export default {
	name: "TimePickerField",
	mixins: [abstractField],
	computed: {
		timeValue: {
			get() {
				return `${this.value ? padStart(this.value.hours, '0') : '00'}:${this.value ? padStart(this.value.minutes, '0') : '00'}:00`;
			},
			set(val) {
				const [hours, minutes] = val.split(':');
				this.value = {
					hours: parseInt(hours),
					minutes: parseInt(minutes)
				};
			}
		}
	}
}
</script>

<style scoped>

</style>
