<template>
	<b-modal
			v-bind="$attrs"
			centered
			header-bg-variant="info"
			header-text-variant="light"
			ok-variant="info"
	>
		<b-table
				:items="mappedValues"
				small
				sticky-header
				table-variant="light"
		>

		</b-table>
	</b-modal>
</template>

<script>
import {formatFieldValue} from "@/store/utils";

export default {
	name: "ShowSettingsDiffModal",
	props: {
		diff: {
			type: Array,
			default: () => []
		},
		i18nKey: {
			type: String,
			required: true
		},
		definition: {
			type: Object,
			default: null
		}
	},
	computed: {
		mappedValues() {
			return this.diff.map(d => {
				if (d.kind === 'E') {
					const model = d.path[0];
					const fieldDefinition = this.findFieldDefinition(model);

					return ({
						label: this.$t(this.i18nKey + '.fields.' + model),
						type: this.$t('app.diff.type.element'),
						oldValue: formatFieldValue({[model]: d.rhs}, fieldDefinition),
						newValue: formatFieldValue({[model]: d.lhs}, fieldDefinition)
					});
				} else if (d.kind === 'A') {
					return ({
						label: this.$t('app.diff.array.index', d),
						type: this.$t('app.diff.type.array'),
						oldValue: d.item.rhs,
						newValue: d.item.lhs
					})
				}
			})
		}
	},
	methods: {
		findFieldDefinition(model) {
			let definition = {model};

			for (const {fields = [], groups = []} of this.definition.tabs) {
				for (const field of fields) {
					if (field.model === model) {
						definition = field;
						break;
					}
				}
				for (const {fields} of groups) {
					for (const field of fields) {
						if (field.model === model) {
							definition = field;
							break;
						}
					}
				}
			}

			return definition;
		}
	}
}
</script>

<style scoped>

</style>
