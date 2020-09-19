<script lang="ts">
	import Leftnav from "./leftnav/Leftnav.svelte";
</script>

<main>
	<Leftnav />
	<h1>Welcome!</h1>
	<p>Visit the <a href="https://svelte.dev/tutorial">Svelte tutorial</a> to learn how to build Svelte apps.</p>
</main>

<style>
	main {
		text-align: center;
		padding: 1em;
		font-family: Helvetica, Arial, sans-serif;
		max-width: 240px;
		margin: 0 auto;
	}

	h1 {
		color: #e0dede;
		font-size: 4em;
		font-weight: 100;
	}

	@media (min-width: 640px) {
		main {
			max-width: none;
		}
	}
</style>