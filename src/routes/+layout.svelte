<script>
	import Container from '$lib/components/template/Container.svelte';
	import Navbar from '$lib/components/template/Navbar.svelte';
	import '../app.css';
</script>

<main class="h-screen">
	<Navbar />
	<Container>
		<slot />
	</Container>
</main>
