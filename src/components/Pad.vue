<template>
	<div class="pad">
		<input type="text" class="pad__title" placeholder="Untitled note" v-model="note.title" v-on:keydown="save">
		<textarea class="pad__text" placeholder="Start writing..." v-model="note.body" v-on:keydown="save"></textarea>

		<div class="pad__footer">
			<ul class="pad__footer-items">
				<li class="pad__footer-item">Words: {{ wordCount }}</li>
				<li class="pad__footer-item pad__footer-item--right">Last Saved: {{ lastSaved }}</li>
			</ul>
		</div>
	</div>
</template>

<script>
	import { mapGetters, mapActions } from 'vuex'

	export default {
		computed: {
			...mapGetters([
				'note',
				'lastSaved',
				'wordCount'
			])
		},

		methods: {
			...mapActions([
				'saveNote',
				'startSaveTimeout'
			]),

			save () {
				if (!this.note.id) {
					this.saveNote()
					return
				}

				this.startSaveTimeout()
			}
		}
	}
</script>

<style lang="sass" scoped>
	@import '../assets/sass/placeholders'

	.pad
		flex: 4
		flex-direction: column
		display: flex
		width: 100%

		&__title
			border: 0
			outline: none
			padding: 20px
			padding-top: 25px
			padding-left: 30px
			font: inherit
			font-size: 1.5em
		
		&__text
			border: 0
			outline: none
			padding: 30px
			flex: 2
			font: inherit
			resize: none
			line-height: 2
			letter-spacing: 2px

		&__footer
			padding: 20px 30px

		&__footer-items
			@extend %inline-list
		
		.pad__footer-item
			flex: 1
			font-size: .9em
			
			&--right
				margin-left: auto
				text-align: right


</style>
