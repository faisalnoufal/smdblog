<script>
  	import { formatDate } from '$lib/utils'
	import * as config from '$lib/config'

	export let data
</script>


 <!-- News Section -->
  <section class="py-10">
    <div class="container mx-auto px-4">
      <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        <!-- News Card 1 -->
		{#each data.posts as post}
        <div class="bg-white rounded-lg shadow-md p-6">
			<img src={post.thumbnail} alt={post.title} class="w-full h-48 object-cover mb-4">
			<h2 class="text-xl font-bold mb-2">{post.title}</h2>
			<p class="text-gray-600">{post.description}</p>
			<div class="flex justify-between items-center mt-2">
			  <p class="text-gray-400 text-sm">{formatDate(post.date)}</p> <!-- Add the date section here -->
			  <div>
				<a href={post.slug} class="text-blue-500 hover:underline">Read More</a>
				<button class="text-blue-500 hover:underline ml-4">Share</button>
			  </div>
			</div>
		  </div>
		{/each}

      </div>
    </div>
  </section>
