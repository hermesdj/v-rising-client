<template>
	<VModal
			id="download-backup-modal"
			:title="$t('server.dialogs.downloadBackup.title')"
			@ok="downloadBackup"
			header-bg-variant="info"
			header-text-variant="light"
			ok-variant="info"
			@change="() => loadBackupFileNames()"
	>
		<p>
			{{ $t('server.dialogs.downloadBackup.text') }}
		</p>
		<b-form-group id="fileName-input-group"
									:label="$t('server.dialogs.downloadBackup.fields.fileName')"
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
			<b-icon icon="download"/>
			{{ $t('server.dialogs.downloadBackup.btn') }}
		</template>
	</VModal>
</template>

<script>
import VModal from "@/components/VModal.vue";
import {validationMixin} from "vuelidate";
import {required} from "vuelidate/lib/validators";
import {mapActions, mapGetters} from "vuex";
import constants from "@/plugins/constants";

export default {
	name: "DownloadBackupModal",
	components: {VModal},
	mixins: [validationMixin],
	data() {
		return {
			form: {
				fileName: null
			}
		}
	},
	validations: {
		form: {
			fileName: {
				required
			}
		}
	},
	computed: {
		...mapGetters('backups', ['backupFileNames'])
	},
	methods: {
		...mapActions('backups', ['loadBackupFileNames']),
		validateState(name) {
			const {$dirty, $error} = this.$v.form[name];
			return $dirty ? !$error : null;
		},
		async downloadBackup(event) {
			this.$v.form.$touch();
			if (this.$v.form.$anyError) {
				event.preventDefault();
				return;
			}

			window.open(`${constants.host}api/autosave/backups/${this.form.fileName}`, 'blank');

			this.$nextTick(() => {
				this.$v.form.$reset();

				this.form = {
					fileName: null
				};
			});
		}
	}
}
</script>

<style scoped>

</style>
