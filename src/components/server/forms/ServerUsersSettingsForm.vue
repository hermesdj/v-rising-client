<template>
	<b-form @submit="onSubmit">
		<b-card-body>
			<vue-form-generator
					:schema="schema"
					:model="model"
					:options="formOptions"
			>

			</vue-form-generator>
		</b-card-body>
		<b-card-footer class="text-right">
			<b-button type="submit" variant="primary">Submit</b-button>
		</b-card-footer>
	</b-form>
</template>

<script>
import {mapActions, mapGetters} from "vuex";
import {validators} from "vue-form-generator";
import {isEmpty, uniq} from "lodash";

export default {
	name: "ServerUsersSettingsForm",
	data() {
		return {
			model: {
				admins: "",
				banned: ""
			},
			formOptions: {
				validateAfterLoad: true,
				validateAfterChanged: true,
				validateAsync: true
			}
		}
	},
	mounted() {
		this.loadUsers().then(() => this.model = {
			admins: this.currentAdminList.join('\n'),
			banned: this.currentBanList.join('\n')
		});
	},
	computed: {
		...mapGetters(['currentAdminList', 'currentBanList']),
		schema() {
			return {
				fields: [
					{
						type: 'textArea',
						label: this.$t('users.admin.title'),
						model: 'admins',
						hint: this.$t('users.stringSeparationHint'),
						validator: validators.string,
						rows: this.currentAdminList.length + 1
					},
					{
						type: 'textArea',
						label: this.$t('users.ban.title'),
						model: 'banned',
						hint: this.$t('users.stringSeparationHint'),
						validator: validators.string,
						rows: this.currentBanList.length + 1
					}
				]
			}
		}
	},
	methods: {
		...mapActions(['loadUsers', 'updateUsersSettings']),
		async onSubmit(event) {
			event.preventDefault();
			const {admins, banned} = this.model;
			const adminList = uniq(admins.split('\n').filter(val => !isEmpty(val)));
			const banList = uniq(banned.split('\n').filter(val => !isEmpty(val)));

			await this.updateUsersSettings({adminList, banList});

			await this.$router.push({name: 'showUsersSettings'});
		}
	}
}
</script>

<style scoped>

</style>
