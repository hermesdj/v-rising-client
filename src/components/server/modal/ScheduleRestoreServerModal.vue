<template>
	<VModal
			id="schedule-restore-server-modal"
			:title="$t('server.dialogs.scheduleRestore.title')"
			@ok="scheduleRestore"
			header-bg-variant="warning"
			header-text-variant="dark"
			ok-variant="warning"
			@change="() => loadBackupFileNames()"
	>
		<p>
			{{ $t('server.dialogs.scheduleRestore.text') }}
		</p>
		<b-form-group id="scheduleRestoreTime-input-group" :label="$t('server.dialogs.scheduleRestore.fields.timeToStop')"
									label-for="scheduleRestoreTime-input">
			<b-form-input
					v-model.number="$v.form.scheduleRestoreTime.$model"
					id="scheduleRestoreTime-input"
					name="scheduleRestoreTime-input"
					type="range"
					:min="1"
					:max="120"
					:state="validateState('scheduleRestoreTime')"
					aria-describedby="scheduleRestoreTime-input-feedback"
			/>
			{{ $t('app.messages.delay', {delay: $v.form.scheduleRestoreTime.$model}) }}
			<b-form-invalid-feedback
					id="scheduleRestoreTime-input-feedback"
			>
				Ce champ est requis
			</b-form-invalid-feedback>
		</b-form-group>
		<b-form-group id="fileName-input-group"
									:label="$t('server.dialogs.scheduleRestore.fields.fileName')"
									label-for="fileName-input"
		>
			<b-form-select
					v-model="$v.form.fileName.$model"
					id="fileName-input"
					name="fileName-input"
					aria-describedby="fileName-input-feedback"
					:state="validateState('fileName')"
					:options="backupFileNames"
			/>
			<b-form-invalid-feedback
					id="fileName-input-feedback"
			>
				Ce champ est requis
			</b-form-invalid-feedback>
		</b-form-group>
		<template v-slot:modal-ok>
			<b-icon icon="stopwatch"/>
			{{ $t('server.dialogs.scheduleRestore.btn') }}
		</template>
	</VModal>
</template>

<script>
import VModal from "@/components/VModal.vue";
import {mapActions, mapGetters} from "vuex";
import {validationMixin} from "vuelidate";
import {integer, maxValue, minValue, required} from "vuelidate/lib/validators";

export default {
	name: "ScheduleRestoreServerModal",
	mixins: [validationMixin],
	components: {VModal},
	data() {
		return {
			form: {
				fileName: null,
				scheduleRestoreTime: 10
			}
		}
	},
	validations: {
		form: {
			scheduleRestoreTime: {
				required,
				integer,
				minValue: minValue(1),
				maxValue: maxValue(120)
			},
			fileName: {
				required
			}
		}
	},
	computed: {
		...mapGetters(['backupFileNames'])
	},
	methods: {
		...mapActions(['loadBackupFileNames', 'scheduleRestoreBackup']),
		validateState(name) {
			const {$dirty, $error} = this.$v.form[name];
			return $dirty ? !$error : null;
		},
		async scheduleRestore(event) {
			this.$v.form.$touch();
			if (this.$v.form.$anyError) {
				event.preventDefault();
				return;
			}

			await this.scheduleRestoreBackup({
				backupFileName: this.form.fileName,
				delay: this.form.scheduleRestoreTime
			});

			this.$v.form.$reset();

			this.form = {
				fileName: null,
				scheduleRestoreTime: 10
			};
		}
	}
}
</script>

<style scoped>

</style>
