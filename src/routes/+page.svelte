<script lang="ts">
	import type { PageData } from './$types';

	export let data: PageData;
</script>

{#each data.pokemons as { name }}
	<p>
		{name}
	</p>
{/each}
