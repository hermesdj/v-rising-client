<template>
	<b-container>
		<b-table
				:fields="fields"
				sticky-header="calc(100vh - 250px)"
				:items="serverLogs"
				title="Server Logs"
				:sort-desc="sortDesc"
				:sort-by="sortBy"
				striped
				bordered
				hover
				small
				dark
		>
		</b-table>
	</b-container>
</template>

<script>
import {socket} from "@/plugins";
import {mapGetters} from "vuex";
import dayjs from "dayjs";
import {truncate} from "lodash";

export default {
	name: "ServerLogPage",
	beforeRouteEnter(to, from, next) {
		socket.emit('subscribe server logs')
		next();
	},
	beforeRouteLeave(to, from, next) {
		socket.emit('unsubscribe server logs');
		next();
	},
	data() {
		return {
			sortBy: 'time',
			sortDesc: true,
			fields: [
				{
					key: 'time',
					label: 'Time',
					formatter: value => dayjs(value).format('DD/MM/YYYY HH:mm:ss'),
					sortable: true,
					stickyColumn: true
				},
				{
					key: 'text',
					label: 'Log',
					sortable: false,
					tdClass: 'text-left',
					formatter: value => truncate(value, {length: 256})
				}
			]
		}
	},
	computed: {
		...mapGetters(['serverLogs'])
	}
}
</script>

<style scoped>

</style>
