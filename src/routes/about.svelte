<style>
	h1 {
		text-align: center;
	}

	.devicon-list {
		display: flex;
		justify-content: center;
		list-style-type: none;
		margin: 4em auto;
		padding: 0;
	}

	.devicon {
		display: list-item;
		font-size: 6em;
		text-transform: uppercase;
		margin: 0 auto;
	}

</style>

<script lang="ts">
	import { fly } from 'svelte/transition';

	let techs = [
		'php', 
		'html5', 
		'css3',
		'javascript', 
		'jquery', 
	];
	let techs2 = [
		'mysql', 
		'laravel', 
		'symfony',
		'angularjs', 
		'nodejs', 
	];
	let techs3 = [
		'mongodb', 
		'couchdb', 
		'typescript',
		'react', 
		'yarn'
	]
</script>

<svelte:head>
	<title>About Nat</title>
</svelte:head>

<div class="about" in:fly="{{y: 20, duration: 2000}}">
	<h1>About Me</h1>

	<p>I am a web developer who enjoys using modern technologies to build quality websites. Below are some of the technologies I have used.</p>

	<ul class="devicon-list">
		{#each techs as tech, index}
			<li class="devicon" in:fly="{{y: 20, duration: 1000, delay: (1 + index) * 200 }}"><i class="devicon-{tech}-plain"></i></li>
		{/each}
	</ul>
	<ul class="devicon-list">
		{#each techs2 as tech, index}
			<li class="devicon" in:fly="{{y: 20, duration: 1000, delay: (2 + index) * 200 }}"><i class="devicon-{tech}-plain"></i></li>
		{/each}
	</ul>
	<ul class="devicon-list">
		{#each techs3 as tech, index}
			<li class="devicon" in:fly="{{y: 20, duration: 1000, delay: (3 + index) * 200 }}"><i class="devicon-{tech}-plain"></i></li>
		{/each}
	</ul>

	<h1>About this site</h1>

	<p>This website is written with Svelte and Sapper with the following libraries:</p>
	<ul>
		<li>Devicon (for the technology, Github and Linkedin icons)</li>
		<li>Material (for the email, resume and frontpage icons)</li>
	</ul>
</div>