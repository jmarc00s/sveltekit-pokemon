<script>
	import Menu from './Menu.svelte';
</script>

<div class="navbar bg-base-100 border-b border-base-200 shadow-sm">
	<div class="flex-1">
		<a href="/"><p class="text-xl pl-2">SvelteKit Pokedex</p></a>
	</div>
	<div class="flex-none">
		<Menu />
	</div>
</div>
