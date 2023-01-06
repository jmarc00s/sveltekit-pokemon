import { API_URL } from '$lib/constants/api';
import type { Pokemon } from '$lib/types';
import type { PageLoadEvent } from './$types';

export async function load({ params, fetch }: PageLoadEvent) {
	const response = await fetch(`${API_URL}/pokemon/${params.id}`);

	const pokemon = (await response.json()) as Pokemon;

	return {
		pokemon
	};
}
