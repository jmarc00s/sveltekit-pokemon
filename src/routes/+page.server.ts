import { API_URL } from '$lib/constants/api';
import type { Pokemon } from '$lib/types';
import type { PageServerLoadEvent, RequestEvent } from './$types';

export async function load({ fetch }: PageServerLoadEvent) {
	const response = await fetch('http://localhost:4000/pokemons/paged?page=0&size=20');

	const pokemons = (await response.json()) as Pokemon[];

	return {
		pokemons
	};
}

export const actions = {
	filter: async ({ request, fetch }: RequestEvent) => {
		const data = await request.formData();

		const filteredValue = data.get('filter');

		console.log(filteredValue);

		const response = await fetch(`${API_URL}/pokemons/filter?filter=${filteredValue}`);

		const pokemons = (await response.json()) as Pokemon[];

		return { pokemons };
	}
};
