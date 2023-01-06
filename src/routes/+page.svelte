<script lang="ts">
	import PokemonGrid from '$lib/components/PokemonGrid.svelte';
	import type { PageData } from './$types';

	export let data: PageData;
</script>

<PokemonGrid pokemons={data.pokemons} />
