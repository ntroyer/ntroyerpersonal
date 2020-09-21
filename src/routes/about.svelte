<style>
	
</style>

<script lang="ts">
	import { fly } from 'svelte/transition';
</script>

<svelte:head>
	<title>About Nat</title>
</svelte:head>

<div class="about" in:fly="{{y: 20, duration: 2000}}">
	<h1>About this site</h1>

	<p>I am a web developer who enjoys using modern technologies to build quality websites.</p>
</div>