<template>
	<div id="app">
		<sidebar></sidebar>
		<pad></pad>
	</div>
</template>


<script>
	import Sidebar from './components/Sidebar'
	import Pad from './components/Pad'

	export default {
		components: {
			Sidebar,
			Pad
		}
	}
</script>

<style>
	html, body {
		height: 100%;
		margin: 0;
		padding: 0;
	}

	body {
		color: #2c3e50;
	}

	#app {
		font-family: 'Avenir', Helvetica, Arial, sans-derif;
		-webkit-font-smoothing: antialiased;
		-moz-osx-font-smoothing: grayscale;
		height: 100%;
		display: flex;
	}
</style>
