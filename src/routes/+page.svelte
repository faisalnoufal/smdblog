<script lang="ts">
	// import Cards from '../components/Cards.svelte';
	import Hero from '../components/Hero.svelte';
	import { formatDate } from '$lib/utils';
	import * as config from '$lib/config';

	export let data;

	function isPostNew(postDate) {
		const twentyFourHoursAgo = new Date();
		twentyFourHoursAgo.setDate(twentyFourHoursAgo.getDate() - 1);
		return new Date(postDate) > twentyFourHoursAgo;
	}
</script>

<svelte:head>
	<title>{config.title}</title>
</svelte:head>

<Hero />

<!-- <Cards/> -->

<!-- News Section -->
<section class="py-10">
	<div class="container mx-auto px-8">
		<div class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 gap-8">
			<!-- News Card 1 -->
			{#each data.posts as post}
				<a href={post.slug}>
					<div class="card bg-base-100 shadow-xl">
						<figure><img src={post.thumbnail} alt={post.title} /></figure>
						<div class="card-body">
							<h2 class="card-title">
								{post.title}
								{#if isPostNew(post.date)}
									<div class="badge badge-secondary">NEW</div>
								{/if}
							</h2>
							<p>{post.description}</p>
							<div class="flex items-center justify-between">
								<p class="text-gray-400 text-sm mt-2">{formatDate(post.date)}</p>
								<div class="space-x-2">
									<!-- <a
										href={`https://twitter.com/intent/tweet?url=https://hello.webadder.com/${post.slug}&text=${post.title}`}
										class="text-blue-500 hover:underline"
										target="_blank"
									>
										<i class="fab fa-twitter" /> Twitter
									</a>
									<a
										href={`https://www.facebook.com/sharer/sharer.php?u=https://hello.webadder.com/${post.slug}`}
										class="text-blue-500 hover:underline"
										target="_blank"
									>
										<i class="fab fa-facebook" /> Facebook
									</a> -->
									<button class="material-symbols-outlined" on:click={copyPostURL}>Share</button>
								</div>
							</div>
						</div>
					</div>
				</a>
			{/each}
		</div>
	</div>
</section>


<!-- Posts -->
<!-- <section>
	<ul class="posts">
		{#each data.posts as post}
			<li class="post">
				<a href="/"><img src={post.thumbnail} alt=""></a>
				<a href={post.slug} class="title">{post.title}</a>
				<p class="date">{formatDate(post.date)}</p>
				<p class="description">{post.description}</p>
			</li>
		{/each}
	</ul>
</section> -->
