<template>
	<b-navbar
			toggleable="lg"
			type="dark"
			class="main-navbar"
			fixed="top"
	>
		<b-navbar-brand :to="{name: 'home'}" class="header-logo">
			<img src="../../assets/logo-v.png" class="logo-image"/>
		</b-navbar-brand>

		<b-navbar-nav class="main-menu-items">
			<b-nav-item class="menu-item mx-2" :to="{name: 'home'}"  exact exact-active-class="active">Server State</b-nav-item>
			<b-nav-item class="menu-item mx-2" :to="{name: 'showHostSettings'}" exact exact-active-class="active">Server Settings</b-nav-item>
			<b-nav-item class="menu-item mx-2" v-if="isLoggedIn" :to="{name: 'server-logs'}" exact exact-active-class="active">Server Logs</b-nav-item>
		</b-navbar-nav>

		<b-navbar-nav class="ml-auto">
			<b-nav-item-dropdown right v-if="isLoggedIn">
				<template #button-content>
					<b-icon icon="person-circle"></b-icon>&nbsp;
					<strong>{{ user.username | upperFirst }}</strong>
				</template>
				<b-dropdown-item @click="logout">{{$t('app.auth.signOut')}}</b-dropdown-item>
			</b-nav-item-dropdown>
			<b-button v-else :href="loginUrl">{{$t('app.auth.signIn')}}</b-button>
		</b-navbar-nav>
	</b-navbar>
</template>

<script>
import {mapActions, mapGetters} from "vuex";
import {upperFirst} from "lodash";
import constants from "@/plugins/constants";

export default {
	name: "MainNavBar",
	filters: {
		upperFirst(value) {
			return upperFirst(value);
		}
	},
	computed: {
		...mapGetters(['isLoggedIn', 'user']),
		loginUrl(){
			return `${constants.host}api/auth/steam`
		}
	},
	methods: {
		...mapActions(['logout'])
	}
}
</script>

<style scoped>
.main-menu-items {
	margin-left: 120px;
}

.header-logo {
	align-items: center;
	justify-content: center;
	padding: 0.5rem;
	top: 0;
	z-index: 20;
	overflow: hidden;
	display: flex;
	height: 8rem;
	left: 2.5rem;
	width: 6rem;
	position: fixed;
}

.main-navbar {
	justify-content: space-between;
	align-items: center;
	display: flex;
	background-color: rgba(0, 0, 0, 0.5);
}

.logo-image {
	width: 3rem;
	height: auto;
	max-width: 100%;
	display: block;
	vertical-align: middle;
}

.menu-item {
	color: #93b3ca;
	text-transform: uppercase;
	font-size: .875em;
	line-height: 1.25rem;
	font-weight: 600;
	letter-spacing: .2em;
}
</style>
