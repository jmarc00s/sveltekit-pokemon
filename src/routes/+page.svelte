<script lang="ts">
	import PokemonFilter from '$lib/components/PokemonFilter.svelte';
	import PokemonGrid from '$lib/components/PokemonGrid.svelte';
	import type { ActionData, PageData } from './$types';

	export let data: PageData;

	export let form: ActionData;
</script>

<PokemonFilter />

{#if form?.pokemons}
	<PokemonGrid pokemons={form.pokemons} />
{:else}
	<PokemonGrid pokemons={data.pokemons} />
{/if}
