import type { Pokemon } from '$lib/types';
import type { PageLoadEvent } from './$types';

export async function load({ fetch }: PageLoadEvent) {
	const response = await fetch('http://localhost:4000/pokemons/paged?page=0&size=20');

	const pokemons = (await response.json()) as Pokemon[];

	return {
		pokemons
	};
}
