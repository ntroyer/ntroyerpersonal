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
				value: ["#00e0e0", "#2d4a4a"]
			},
			move: {
				direction: "none",
				enable: true,
				speed: 3,
				out_mode: "bounce"
			},
			number: {
				value: 15
			},
			opacity: {
				value: 0.5
			},
			shape: {
				type: "polygon",
				polygon: {
					"nb_sides": 6
				}
			},
			size: {
				value: 120
			}
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
		background-color: rgba(17, 22, 23, 1);
		height: 95.8vh;
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
