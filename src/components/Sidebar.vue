<template>
	<div class="sidebar">
		<div v-if="notes.length">
			<note v-for="note in notes" :key="note" :note="note"></note>
		</div>	

		<div class="sidebar__content" v-else>
			Boo, no notes.Get writing!
		</div>

		<div class="sidebar__content">
			<a href="#" @click.prevent="clearCurrentNote">Start a new note</a>
		</div>


	</div>
</template>

<script>
	import Note from './Note'
	import { mapGetters,mapActions } from 'vuex'

	export default {
		computed:{
			...mapGetters([
				'notes'
			])
		},

		components: {
			Note
		},

		methods: {
			...mapActions([
				'clearCurrentNote'
			])
		}
	}
</script>

<style lang="sass" scoped>
	.sidebar
		flex: 1
		background-color: #f9f9f9
		height: 100%
		min-width: 28%
		border-right: 2px solid #eee

		&__content
			padding: 30px

			a
				text-decoration: none
				color: inherit
</style>
