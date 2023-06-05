<template>
	<VModal
			id="schedule-restart-server-modal"
			:title="$t('server.dialogs.scheduleRestart.title')"
			@ok="scheduleRestart"
			header-bg-variant="success"
			header-text-variant="light"
			ok-variant="success"
	>
		<p>
			{{ $t('server.dialogs.scheduleRestart.text') }}
		</p>
		<b-form-group id="scheduleRestartTime-input-group" :label="$t('server.dialogs.scheduleRestart.fields.timeToStop')"
									label-for="scheduleRestartTime-input">
			<b-form-input
					v-model.number="$v.form.scheduleRestartTime.$model"
					id="scheduleRestartTime-input"
					name="scheduleRestartTime-input"
					type="range"
					:min="1"
					:max="120"
					:state="validateState('scheduleRestartTime')"
					aria-describedby="scheduleRestartTime-input-feedback"
			/>
			{{ $t('app.messages.delay', {delay: $v.form.scheduleRestartTime.$model}) }}
			<b-form-invalid-feedback
					id="scheduleRestartTime-input-feedback"
			>
				Ce champ est requis
			</b-form-invalid-feedback>
		</b-form-group>
		<template v-slot:modal-ok>
			<b-icon icon="stopwatch"/>
			{{ $t('server.dialogs.scheduleRestart.btn') }}
		</template>
	</VModal>
</template>

<script>
import {integer, maxValue, minValue, required} from "vuelidate/lib/validators";
import {mapActions} from "vuex";
import {validationMixin} from "vuelidate";
import VModal from "@/components/VModal.vue";

export default {
	name: "RestartServerModal",
	components: {VModal},
	mixins: [validationMixin],
	data() {
		return {
			form: {
				scheduleRestartTime: 10
			}
		}
	},
	validations: {
		form: {
			scheduleRestartTime: {
				required,
				integer,
				minValue: minValue(1),
				maxValue: maxValue(120)
			}
		}
	},
	methods: {
		...mapActions('operations', [
			'scheduleServerRestart'
		]),
		validateState(name) {
			const {$dirty, $error} = this.$v.form[name];
			return $dirty ? !$error : null;
		},
		async scheduleRestart(event) {
			this.$v.form.$touch();
			if (this.$v.form.$anyError) {
				event.preventDefault();
				return;
			}

			await this.scheduleServerRestart(this.form.scheduleRestartTime);
		}
	}
}
</script>

<style scoped>

</style>
