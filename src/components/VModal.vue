<template>
	<b-modal
			:id="id"
			centered
			:title="title"
			v-on="$listeners"
			v-bind="$attrs"
	>
		<slot></slot>
		<template v-slot:modal-ok>
			<slot name="modal-ok"></slot>
		</template>
	</b-modal>
</template>

<script>
export default {
	name: "VModal",
	props: {
		title: {
			type: String,
			required: true
		},
		id: {
			type: String,
			required: true
		}
	}
}
</script>

<style scoped>

</style>
