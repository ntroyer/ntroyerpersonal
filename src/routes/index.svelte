<style>
	h1, p {
		text-align: center;
		margin: 0 auto;
	}

	h1 {
		font-size: 2.8em;
		margin: 0 0 0.5em 0;
	}

	p {
		margin: 1em auto;
	}

	@media (min-width: 480px) {
		h1 {
			font-size: 4em;
		}
	}
</style>

<script lang="ts">
	import { fly } from 'svelte/transition';
	export let title: string = "Welcome to my Typescript web page!";
</script>

<svelte:head>
	<title>Nat Troyer - Web Developer</title>
</svelte:head>

<div in:fly="{{y: 20, duration: 2000}}">
	<h1>{title}</h1>

	<p>This page is built using Svelte with Sapper and Typescript.</p>
</div>
