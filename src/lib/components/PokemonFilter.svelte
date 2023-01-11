<script lang="ts">
	import { enhance } from '$app/forms';

	let filter = '';
</script>

<form method="POST" class="flex gap-2 border-b-2 border-base-200 py-4" use:enhance>
	<input
		class="input w-full border border-base-200"
		placeholder="Filter pokemon..."
		type="text"
		name="filter"
		id="filter"
		bind:value={filter}
	/>
	<button class="btn btn-primary" type="submit">Filter</button>
</form>
