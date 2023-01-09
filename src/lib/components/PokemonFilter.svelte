<script lang="ts">
	let filter = '';
</script>

<div class="flex gap-2">
	<input
		class="input w-full border border-base-200"
		placeholder="Filter pokemon..."
		type="text"
		name="filter"
		id="filter"
		bind:value={filter}
	/>
	<button class="btn btn-primary" type="submit" disabled={!filter.length}>Filter</button>
</div>
