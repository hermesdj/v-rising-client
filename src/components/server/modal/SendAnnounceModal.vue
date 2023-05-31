<template>
	<VModal
			id="send-announce-modal"
			:title="$t('server.dialogs.sendAnnounce.title')"
			@ok="sendAnnounce"
			header-bg-variant="info"
			header-text-variant="light"
			ok-variant="info"
	>
		<p>
			{{ $t('server.dialogs.sendAnnounce.text') }}
		</p>
		<b-form-group id="message-input-group"
									:label="$t('server.dialogs.sendAnnounce.fields.message')"
									label-for="message-input"
		>
			<b-form-input
					type="text"
					min="1"
					max="512"
					v-model="$v.form.message.$model"
					id="message-input"
					name="message-input"
					aria-describedby="message-input-feedback"
					:state="validateState('message')"
			/>
			<b-form-invalid-feedback
					id="message-input-feedback"
			>
				Ce champ est requis
			</b-form-invalid-feedback>
		</b-form-group>
		<template v-slot:modal-ok>
			<b-icon icon="megaphone"/>
			{{ $t('server.dialogs.sendAnnounce.btn') }}
		</template>
	</VModal>
</template>

<script>
import VModal from "@/components/VModal.vue";
import {validationMixin} from "vuelidate";
import {maxLength, minLength, required} from "vuelidate/lib/validators";

export default {
	name: "SendAnnounceModal",
	components: {VModal},
	mixins: [validationMixin],
	data() {
		return {
			form: {
				message: null
			}
		}
	},
	validations: {
		form: {
			message: {
				required,
				minLength: minLength(1),
				maxLength: maxLength(512)
			}
		}
	},
	methods: {
		validateState(name) {
			const {$dirty, $error} = this.$v.form[name];
			return $dirty ? !$error : null;
		},
		async sendAnnounce(event) {
			this.$v.form.$touch();
			if (this.$v.form.$anyError) {
				event.preventDefault();
				return;
			}

			try {
				const {data} = await this.$http.post('/server/send-announce', {message: this.form.message}, {withCredentials: true});

				if (data.success) {
					await this.$bvToast.toast(this.$t('server.dialogs.sendAnnounce.success.content'), {
						title: this.$t('server.dialogs.sendAnnounce.success.title'),
						variant: 'success'
					})
				} else {
					await this.$bvToast.toast(this.$t('server.dialogs.sendAnnounce.failure.content', {message: data.message}), {
						title: this.$t('server.dialogs.sendAnnounce.failure.title'),
						variant: 'danger'
					})
				}
			} catch (err) {
				console.error('Error sending announce to server !');
				await this.$bvToast.toast(this.$t('server.dialogs.sendAnnounce.failure.content', {message: err.message}), {
					title: this.$t('server.dialogs.sendAnnounce.failure.title'),
					variant: 'danger'
				})
			}

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
