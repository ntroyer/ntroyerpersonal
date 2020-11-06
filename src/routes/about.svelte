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
	import { onMount } from 'svelte';
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
	];

	let ready = false;
	onMount(() => ready = true);
</script>

<svelte:head>
	<title>About Nat</title>
</svelte:head>

{#if ready}
	<div class="about" in:fly="{{y: 20, duration: 2000}}">
		<h1>About Me</h1>

		<p>I'm Nat, a web developer based in Northern New Jersey. 
			After taking a class on programming in high school, I realized that programming was my calling. 
			I went on to pursue a career in software development, and obtained a Bachelor of Arts in Computer Science from Boston University.</p>
		<p>I began my career building and maintaining PHP websites. 
			Shortly after, I learned about NodeJs, and wanted to experiment with modern Javascript frameworks such as React, Angular and Express.</p>
		<p>Below are some of the technologies I have used.</p>

		<ul class="devicon-list">
			{#each techs as tech, index}
				<li class="devicon" in:fly="{{y: 20, duration: 1000, delay: (1 + index) * 200 }}" data-tooltip="{tech}"><i class="devicon-{tech}-plain"></i></li>
			{/each}
		</ul>
		<ul class="devicon-list">
			{#each techs2 as tech, index}
				<li class="devicon" in:fly="{{y: 20, duration: 1000, delay: (2 + index) * 200 }}" data-tooltip="{tech}"><i class="devicon-{tech}-plain"></i></li>
			{/each}
		</ul>
		<ul class="devicon-list">
			{#each techs3 as tech, index}
				<li class="devicon" in:fly="{{y: 20, duration: 1000, delay: (3 + index) * 200 }}" data-tooltip="{tech}"><i class="devicon-{tech}-plain"></i></li>
			{/each}
		</ul>

		<h1>About this site</h1>

		<p>This website is written with <b>Svelte</b> and <b>Sapper</b>, with <b>tsParticles</b> for the hexagon particle effects.</p>
	</div>
{/if}