<script lang="ts">
	import { enhance } from '$app/forms';
	import { goto } from '$app/navigation';
	import Pagination from '$lib/components/Pagination.svelte';
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
	<div class="mb-8">
		<PokemonFilter />
	</div>
	<Pagination page={Number(data.page)} />
	<PokemonGrid pokemons={data.pokemons} />
{/if}
