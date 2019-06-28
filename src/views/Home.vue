<template>
	<div class="home">
		<img alt="Vue logo" src="../assets/images/logo.png">
		<HelloWorld msg="Welcome to Your Vue.js App" />
		<textarea rows="5" cols="50" :placeholder='ss'></textarea>
		<router-view :ss="counter" name='a' />
		<router-view name='b' />
	<!-- 	<hy-row>
			<hy-col :col="12">2221221</hy-col>
		</hy-row> -->
			<hy-col :col="12">2221221</hy-col>
	</div>
</template>

<script>
	// @ is an alias to /src
	import HelloWorld from '@/components/HelloWorld.vue'
	export default {
		name: 'home',
		data() {
			return {
				counter: 'ss',
				ss: '维维多low\n是呀是呀\n牛逼呀海荣'
			};
		},
		components: {
			HelloWorld
		},
		created() {}
	}
</script>
