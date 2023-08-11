<script lang="ts">
	import { formatDate } from '$lib/utils'

	export let data
</script>

<!-- SEO -->
<svelte:head>
	<title>{data.meta.title}</title>
	<meta property="og:type" content="article" />
	<meta property="og:title" content={data.meta.title} />
</svelte:head>


<article class="py-12 px-4">
	<h1 class="text-4xl text-center mb-4 font-semibold font-heading font-semibold">{data.meta.title}</h1>
	<p class="text-center">
	  <span>Published on: {formatDate(data.meta.date)}</span>
	  <a class="ml-1 text-indigo-600 hover:underline" href="#">Michael Scott</a>
	</p>

	<div class="text-center">
		{#each data.meta.categories as category}
			<span class="surface-4">&num;{category}</span>
		{/each}
	</div>

	<div class="max-w-3xl mx-auto">
	  <p class="mb-4"><svelte:component this={data.content} /></p>

	</div>
  </article>