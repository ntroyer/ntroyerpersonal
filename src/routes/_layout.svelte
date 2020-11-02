<script>
	import Nav from '../components/Nav.svelte';
	import { onMount } from "svelte";

	let ParticlesComponent;

	onMount(async() => {
		const module = await import("svelte-particles");

		ParticlesComponent = module.default;
	});

	let particlesConfig = {
		particles: {
			color: {
				value: "#00ffff"
			},
			links: {
				enable: true,
				color: "#00ffff"
			},
			move: {
				enable: true
			},
		}
	};

	let onParticlesLoaded = (event) => {
		const particlesContainer = event.detail.particles;
	};

	export let segment;
</script>

<style>
	main {
		position: relative;
		max-width: 56em;
		padding: 2em;
		margin: 0 auto;
		box-sizing: border-box;
	}

	.particles {
		position: fixed;
		width: 100%;
		height: 100%;
	}
</style>

<Nav {segment} />

<!-- The below item needs to be styled -->
<div class="particles">
	<svelte:component this="{ParticlesComponent}" id="tsparticles" options="{particlesConfig}" on:particlesLoaded="{onParticlesLoaded}" />
</div>
<main>
	<slot></slot>
</main>
