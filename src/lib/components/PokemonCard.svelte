<script lang="ts">
	import type { Pokemon } from '../types';
	export let pokemon: Pokemon;

	let { name, id } = pokemon;
</script>

<article class="card card-compact shadow-xl">
	<figure>
		<img
			class="max-w-full"
			src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${id}.png`}
			alt={name}
			width="200"
			height="200"
		/>
	</figure>
	<div class="card-body">
		<h2 class="card-title">{pokemon.name}</h2>
	</div>
</article>
