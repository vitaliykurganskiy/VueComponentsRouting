<template>
	<div class="main">
		<h2>Компонетн Car</h2>
		<h3>Name: {{ carName }}</h3>
		<p>Year: {{ carYear }}</p>
		<button @click="changeName">Изменить имя</button>
		<div style="color:red">Переданный {{ msg }}</div>
	</div>	
</template>

<script>
	
	import {eventEmitter} from './main.js'
	
	export default {
		props: {
			msg: String
		},
		data() {
			return {
				carName: 'Ford',
				carYear: 2015,
				test: 'test2323'
			}
		},
		methods: {
			changeName() {
				this.msg = "Audi"
				// this.$emit('changeMsg', this.msg)
				eventEmitter.$emit('msg', this.msg)
			}
		}


	}

</script>

<style>

.main {
	border: 1px solid green
}


</style>

