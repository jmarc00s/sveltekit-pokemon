<script lang="ts">
	export let page: number;
</script>

<div class="flex justify-between">
	<div>
		{#if page > 0}
			<a class="btn btn-primary" href={`/?page=${page - 1}`} target="_self">Previous page</a>
		{/if}
	</div>
	<div>
		<a class="btn btn-primary" href={`/?page=${page + 1}`} target="_self">Next page</a>
	</div>
</div>
