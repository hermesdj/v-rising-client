<template>
	<div>
		<b-form @submit.stop.prevent="onSubmit">
			<b-form-group id="username-input-group" label="Username" label-for="username-input">
				<b-form-input
						id="username-input"
						name="username-input"
						v-model="$v.form.username.$model"
						:state="validateState('username')"
						aria-describedby="username-input-feedback"
						autocomplete="username"
				/>
				<b-form-invalid-feedback
						id="username-input-feedback"
				>
					Ce champ est requis
				</b-form-invalid-feedback>
			</b-form-group>
			<b-form-group id="password-input-group" label="Password" label-for="password-input">
				<b-form-input
						id="password-input"
						name="password-input"
						type="password"
						v-model="$v.form.password.$model"
						:state="validateState('password')"
						aria-describedby="password-input-feedback"
						autocomplete="current-password"
				/>
				<b-form-invalid-feedback
						id="password-input-feedback"
				>
					Ce champ est requis
				</b-form-invalid-feedback>
			</b-form-group>
			<b-button type="submit" variant="primary">Envoyer</b-button>
			<b-button class="ml-2" @click="resetForm()">Reset</b-button>
		</b-form>
	</div>
</template>

<script>
import {validationMixin} from "vuelidate";
import {required} from "vuelidate/lib/validators";
import {mapActions} from "vuex";

export default {
	mixins: [validationMixin],
	name: "LoginForm",
	data() {
		return {
			form: {
				username: null,
				password: null
			}
		}
	},
	validations: {
		form: {
			username: {required},
			password: {required}
		}
	},
	methods: {
		...mapActions(['login']),
		validateState(name) {
			const {$dirty, $error} = this.$v.form[name];
			return $dirty ? !$error : null;
		},
		resetForm() {
			this.form = {
				username: null,
				password: null
			};

			this.$nextTick(() => this.$v.$reset());
		},
		async onSubmit() {
			this.$v.form.$touch();
			if (this.$v.form.$anyError) {
				return;
			}

			await this.login(this.form);
			this.$emit('ok');
		}
	}
}
</script>

<style scoped>

</style>
