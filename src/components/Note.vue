<template>
	<div class="note">
		<a href="#" class="note__delete" @click.prevent="deleteNote(note.id)">
			<span class="note__delete-icon">&times;</span>
		</a>

		<div class="note__content">
			<a href="#" class="note__title" @click.prevent="openNote(note)">
				<span v-if="note.title">{{ note.title }}</span>
				<span v-else>Untitled note</span>
			</a>
			<p class="note__body">
				<span v-if="note.body">{{ note.body }}</span>
				<span v-else><em>Empty</em></span>
			</p>
		</div>
	</div>
</template>

<script>
	import { mapActions } from 'vuex'

	export default {
		props: [
			'note'
		],

		methods: {
			...mapActions([
				'openNote',
				'deleteNote'
			])
		}
	}
</script>

<style lang="sass" scoped>
	.note
		display: flex
		opacity: .3
		max-height: 100%
		flex-direction: row
		border-bottom: 2px solid #eee
		text-decoration: none
		color: inherit

		&:hover
			opacity: 1

			.note__delete
				margin-left: 0

		&__content
			padding: 30px
			overflow: hidden
			flex: 2
			
		&__title
			text-decoration: none
			color: inherit
			forn-size: 1em
			font-weight: 500
			overflow: hidden
			white-space: nowrap
			text-overflow: ellipsis

			&:hover
				text-decoration: underline

		&__body
			margin-bottom: 0
			font-size: .9em
			overflow: hidden
			white-space: nowrap
			text-overflow: ellipsis

		&__delete
			position: relative
			display: block
			background-color: #cc4466
			color: #fff
			width: 50px
			min-height: 100%
			margin-left: -50px
			transition: margin-left 200ms ease-in-out

		&__delete-icon
			position: absolute
			top: 50%
			left: 50%
			transform: translate(-50%, -50%)
			font-size: 1.5em
			font-weight: 600
			
</style>
