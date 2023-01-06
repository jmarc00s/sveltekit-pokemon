<script lang="ts">
	let showDropdown = false;
	let ref: any = null;

	const toggleShowDropdown = () => (showDropdown = !showDropdown);

	const handleClickOutside = (target: EventTarget | null) => {
		if (!ref || !target) return;

		if (!ref.contains(target)) {
			showDropdown = false;
		}
	};
</script>

<svelte:window on:click={({ target }) => handleClickOutside(target)} />

<div class="dropdown" bind:this={ref}>
	<!-- svelte-ignore a11y-label-has-associated-control -->
	<button class="btn btn-ghost btn-circle" on:click={toggleShowDropdown}>
		<svg
			xmlns="http://www.w3.org/2000/svg"
			class="h-5 w-5"
			fill="none"
			viewBox="0 0 24 24"
			stroke="currentColor"
			><path
				stroke-linecap="round"
				stroke-linejoin="round"
				stroke-width="2"
				d="M4 6h16M4 12h16M4 18h7"
			/></svg
		>
	</button>
	{#if showDropdown}
		<ul class="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52">
			<li><a on:click={toggleShowDropdown} href="/">Homepage</a></li>
			<li><a on:click={toggleShowDropdown} href="/about">About</a></li>
		</ul>
	{/if}
</div>
