<style>
	h1, p {
		text-align: center;
		margin: 0 auto;
	}

	h1 {
		font-size: 2.8em;
		margin: 0 0 0.5em 0;
	}

	a:link {
		text-decoration: none;
	}

	p {
		margin: 1em auto;
	}

	ul {
		display: flex;
		justify-content: center;
		list-style-type: none;
	}

	li {
		display: list-item;
		font-size: 24px;
		text-transform: uppercase;
		margin: 0 auto;
	}

	li:nth-child(even) {
		margin: 0;
	}

	@media (min-width: 480px) {
		h1 {
			font-size: 4em;
		}
	}
</style>

<script lang="ts">
	import { fly } from 'svelte/transition';
	export let title: string = "Nat Troyer";
</script>

<svelte:head>
	<title>Nat Troyer - Web Developer</title>
</svelte:head>

<div in:fly="{{y: 20, duration: 2000}}">
	<h1>{title}</h1>

	<p>Full-stack Web Developer with over 6 years of experience</p>
	<ul>
		<li><a href="about">About</a></li>
		<li><i class="material-icons">code</i></li>
		<li><a href="projects">Projects</a></li>
	</ul>
	<ul>
		<li>Resume</li>
		<li><i class="material-icons">code</i></li>
		<li>Email</li>
		<li><i class="material-icons">code</i></li>
		<li>Github</li>
		<li><i class="material-icons">code</i></li>
		<li>Linkedin</li>
	</ul>
</div>
