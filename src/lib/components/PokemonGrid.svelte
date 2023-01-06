<script lang="ts">
	import type { Pokemon } from '$lib/types';
	import PokemonCard from './PokemonCard.svelte';

	export let pokemons: Pokemon[];
</script>

<section class="grid grid-cols-1 xl:grid-cols-4 lg:grid-cols-3 md:grid-cols-2">
	{#each pokemons as pokemon}
		<PokemonCard {pokemon} />
	{/each}
</section>
