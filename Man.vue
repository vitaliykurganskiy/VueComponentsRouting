<template>
	<div class="main1">
		{{ msg }}
	</div>
</template>

<script>
	import {eventEmitter} from './main.js'
	
	export default {
		props: {
			
		},
		data() {
			return {
				msg: '23'
			}
		},
		methods: {
			
		},
		created() {
			eventEmitter.$on('msg', (msg) => {
				this.msg = msg;
			})
		}


	}

</script>

<style>

.main1 {
	width: 600px;
	min-height: 20px; 
	border: 1px solid red
}


</style>

