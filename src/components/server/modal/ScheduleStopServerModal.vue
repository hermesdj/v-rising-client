<template>
	<VModal
			id="schedule-stop-server-modal"
			:title="$t('server.dialogs.scheduleStop.title')"
			@ok="scheduleStop"
			header-bg-variant="danger"
			header-text-variant="light"
			ok-variant="danger"
	>
		<p>
			{{ $t('server.dialogs.scheduleStop.text') }}
		</p>
		<b-form-group id="scheduleStopTime-input-group" :label="$t('server.dialogs.scheduleStop.fields.timeToStop')"
									label-for="scheduleStopTime-input">
			<b-form-input
					v-model.number="$v.form.scheduleStopTime.$model"
					id="scheduleStopTime-input"
					name="scheduleStopTime-input"
					type="range"
					:min="1"
					:max="120"
					:state="validateState('scheduleStopTime')"
					aria-describedby="scheduleStopTime-input-feedback"
			/>
			{{ $t('app.messages.delay', {delay: $v.form.scheduleStopTime.$model}) }}
			<b-form-invalid-feedback
					id="scheduleStopTime-input-feedback"
			>
				Ce champ est requis
			</b-form-invalid-feedback>
		</b-form-group>
		<template v-slot:modal-ok>
			<b-icon icon="stopwatch"/>
			{{ $t('server.dialogs.scheduleStop.btn') }}
		</template>
	</VModal>
</template>

<script>
import {validationMixin} from "vuelidate";
import {integer, maxValue, minValue, required} from "vuelidate/lib/validators";
import {mapActions} from "vuex";
import VModal from "@/components/VModal.vue";

export default {
	name: "ScheduleStopServerModal",
	components: {VModal},
	mixins: [validationMixin],
	data() {
		return {
			form: {
				scheduleStopTime: 10
			}
		}
	},
	validations: {
		form: {
			scheduleStopTime: {
				required,
				integer,
				minValue: minValue(1),
				maxValue: maxValue(120)
			}
		}
	},
	methods: {
		...mapActions([
			'scheduleServerStop'
		]),
		validateState(name) {
			const {$dirty, $error} = this.$v.form[name];
			return $dirty ? !$error : null;
		},
		async scheduleStop() {
			this.$v.form.scheduleStopTime.$touch();
			if (this.$v.form.scheduleStopTime.$anyError) {
				return;
			}

			await this.scheduleServerStop(this.form.scheduleStopTime);
		}
	}
}
</script>

<style scoped>

</style>
