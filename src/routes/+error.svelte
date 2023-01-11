<script lang="ts">
	import { page } from '$app/stores';
</script>

<h1 class="text-3xl font-bold text-center mb-8">Something went unexpected</h1>
<p class="text-center font-semibold">{$page.error?.message}</p>
<div class="flex items-center justify-center w-full mt-4">
	<a href="/" class="btn btn-primary">Go to homepage</a>
</div>
