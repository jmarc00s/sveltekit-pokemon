<script lang="ts">
	import PokemonCard from '$lib/components/PokemonCard.svelte';
	import PokemonTable from '$lib/components/PokemonTable.svelte';
	import type { PageData } from './$types';

	export let data: PageData;
</script>

<section class="flex gap-4">
	<div class="w-1/2">
		<PokemonCard pokemon={data.pokemon} />
	</div>
	<PokemonTable pokemon={data.pokemon} />
</section>
