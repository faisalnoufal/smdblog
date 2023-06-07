export type Categories = 'sveltekit' | 'svelte'

export type Post = {
	title: string
	slug: string
	description: string
	date: string
	// thumbnail: string
	categories: Categories[]
	published: boolean
}
