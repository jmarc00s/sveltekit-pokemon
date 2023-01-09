<script lang="ts">
	import PokemonFilter from '$lib/components/PokemonFilter.svelte';
	import PokemonGrid from '$lib/components/PokemonGrid.svelte';
	import type { ActionData, PageData } from './$types';

	export let data: PageData;

	export let formData: ActionData;
</script>

<PokemonFilter />

{#if formData?.pokemons}
	<PokemonGrid pokemons={formData.pokemons} />
{:else}
	<PokemonGrid pokemons={data.pokemons} />
{/if}
