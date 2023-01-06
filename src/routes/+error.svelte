<script lang="ts">
	import { page } from '$app/stores';
</script>

<h1 class="text-3xl font-bold text-center mb-8">Something went unexpected</h1>
<p class="text-center font-semibold">{$page.error?.message}</p>
