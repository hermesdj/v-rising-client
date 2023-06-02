<template>
	<b-dropdown
		variant="outlined-dark"
		size="sm"
		no-flip
	>
		<template #button-content>
			<CountryFlag :country="flagMap[$i18n.locale]" size="small"/>
		</template>
		<b-dropdown-item-btn
				v-for="({locale, flag, active}) in computedLocales"
				:key="locale"
				@click="switchLocale(locale)"
				:active="active"
		>
			<CountryFlag :country="flag" size="small"/> {{$t(`app.locales.${locale}`)}}
		</b-dropdown-item-btn>
	</b-dropdown>
</template>

<script>
import {supportedLocales} from "@/i18n/messages";

export default {
	name: "LocaleSwitcher",
	data() {
		return {
			locales: supportedLocales(),
			flagMap: {
				en: 'gb',
				fr: 'fr'
			}
		}
	},
	computed: {
		computedLocales() {
			return this.locales.map(locale => ({
				locale,
				flag: this.flagMap[locale],
				active: this.$i18n.locale === locale
			}))
		}
	},
	methods: {
		switchLocale(locale) {
			if (this.$i18n.locale !== locale) {
				this.$i18n.locale = locale;
			}
		}
	}
}
</script>

<style scoped>

</style>
