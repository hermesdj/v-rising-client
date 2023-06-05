<template>
	<b-row no-gutters>
		<b-col cols="shrink" class="nav-border-right">
			<b-card-header header-border-variant="dark" header-tag="nav">
				<b-nav card-header pills vertical>
					<b-nav-item
							v-for="({title}, index) in tabs"
							:key="index"
							:title="title"
							:to="{name: routeName, params: {currentTabId: index, currentSubTabId: 0}}"
							:active="$route.matched.some(match => match.name === routeName && currentTabId === index)"
							replace
					>
						{{ title }}
					</b-nav-item>
				</b-nav>
			</b-card-header>
		</b-col>
		<b-col>
			<b-card-body v-if="currentTab && currentTab.fields && currentTab.fields.length > 0">
				<slot name="tabFields" :fields="currentTab.fields"/>
			</b-card-body>
			<template v-if="currentTab.groups && currentTab.groups.length > 0 && currentTab.groups.length < 10">
				<b-card-header>
					<b-nav
							pills
							small
							card-header
					>
						<b-nav-item
								v-for="({legend}, index) in currentTab.groups"
								:key="index"
								:to="{name: routeName, params: {currentTabId, currentSubTabId: index}}"
								exact-active-class="active"
								replace
						>
							{{ legend }}
						</b-nav-item>
					</b-nav>
				</b-card-header>
				<b-card-body v-if="currentSubTab">
					<slot name="subTabFields" :fields="currentSubTab.fields"></slot>
				</b-card-body>
			</template>
			<template v-else-if="currentTab.groups && currentTab.groups.length >= 10">
				<b-card-header>
					<b-nav
							pills
							small
							card-header
							replace
					>
						<b-nav-item
								v-for="({letter}, index) in currentSubGroups"
								:key="index"
								:to="{name: routeName, params: {currentTabId, currentSubTabId: index}}"
								exact-active-class="active"
								link-classes="nav-small"
						>
							{{ letter }}
						</b-nav-item>
					</b-nav>
				</b-card-header>
				<b-card-body v-if="currentSubGroup">
					<slot name="subGroup" :subGroup="currentSubGroup">
						<b-row>
							<b-col cols="6" v-for="({legend, fields}, index) in currentSubGroup.subGroups" :key="index">
								<h6 class="mb-2">{{ legend }}</h6>
								<slot name="subGroupFields" :fields="fields"/>
							</b-col>
						</b-row>
					</slot>
				</b-card-body>
			</template>
		</b-col>
	</b-row>
</template>

<script>
import {splitGroups} from "@/store/utils";

export default {
	name: "AutoTabSettingsFields",
	props: {
		tabs: Array,
		currentTabId: {
			type: Number,
			default: 0
		},
		currentSubTabId: {
			type: Number,
			default: 0
		},
		routeName: String,
		namespace: String
	},
	computed: {
		currentTab() {
			return this.tabs[this.currentTabId];
		},
		currentSubTab() {
			return this.currentTab ? this.currentTab.groups[this.currentSubTabId] : null;
		},
		currentSubGroup() {
			return this.currentSubGroups ? this.currentSubGroups[this.currentSubTabId] : null;
		},
		currentSubGroups() {
			return this.currentTab ? splitGroups(this.currentTab.groups) : null;
		},
	}
}
</script>

<style scoped>

</style>
