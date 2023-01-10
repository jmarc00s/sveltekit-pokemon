<script lang="ts">
	import PokemonFilter from '$lib/components/PokemonFilter.svelte';
	import PokemonGrid from '$lib/components/PokemonGrid.svelte';
	import type { ActionData, PageData } from './$types';

	export let data: PageData;

	export let form: ActionData;
</script>

{#if form?.pokemons}
	<h1 class="text-2xl font-semibold">
		Filtered by: <span class="font-bold underline"> {form.filteredValue}</span>
	</h1>
	<PokemonGrid pokemons={form.pokemons} />
{:else}
	<PokemonFilter />
	<PokemonGrid pokemons={data.pokemons} />
{/if}
