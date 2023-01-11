import { API_URL } from '$lib/constants/api';
import type { Pokemon } from '$lib/types';
import { error } from '@sveltejs/kit';
import type { PageServerLoadEvent, RequestEvent } from './$types';

export async function load({ fetch, url }: PageServerLoadEvent) {
	const page = url.searchParams.get('page');
	let response;

	if (page) response = await fetch(`${API_URL}/pokemons/paged?page=${page}&size=20`);
	else response = await fetch(`${API_URL}/pokemons/paged?page=0&size=20`);

	const pokemons = (await response.json()) as Pokemon[];

	return {
		pokemons,
		page
	};
}

export const actions = {
	default: async ({ request, fetch }: RequestEvent) => {
		const data = await request.formData();

		const filteredValue = data.get('filter') as string;

		if (!filteredValue) throw error(400, 'Invalid filter');

		const response = await fetch(`${API_URL}/pokemons/filter?filter=${filteredValue}`);

		const pokemons = (await response.json()) as Pokemon[];

		return { pokemons, filteredValue };
	}
};
