<script lang="ts">
	import type { Pokemon } from '$lib/types';

	export let pokemon: Pokemon;

	$: columns = [
		{
			title: 'Attack',
			value: pokemon.attack
		},
		{
			title: 'Defense',
			value: pokemon.defense
		},
		{
			title: 'Hp',
			value: pokemon.hp
		},
		{
			title: 'Speed',
			value: pokemon.speed
		},
		{
			title: 'Special attack',
			value: pokemon.special_attack
		},
		{
			title: 'Special defense',
			value: pokemon.special_defense
		}
	];
</script>

<table class="table table-zebra w-full">
	<thead>
		<tr>
			<th>Attributes</th>
			<th>Value</th>
		</tr>
	</thead>
	<tbody>
		{#each columns as { title, value }}
			<tr>
				<td>{title}</td>
				<td>{value}</td>
			</tr>
		{/each}
	</tbody>
</table>
