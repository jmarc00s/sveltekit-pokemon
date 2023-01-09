<script lang="ts">
	import PokemonFilter from '$lib/components/PokemonFilter.svelte';
	import PokemonGrid from '$lib/components/PokemonGrid.svelte';
	import type { PageData } from './$types';

	export let data: PageData;
</script>

<PokemonFilter />
<PokemonGrid pokemons={data.pokemons} />
