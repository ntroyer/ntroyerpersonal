<style>
	.projects h1 {
		text-align: center;
	}

	.project {
		display: flex;
		background-color: #274045;
		margin: 1em;
	}

	.project-image {
		display: flex;
		justify-content: center;
		align-items: center;
		max-width: 200px;
		max-height: 200px;
		border-radius: 5px;
		overflow: hidden;
		margin: 1.5em;
	}

	.project-image-responsive {
		display: none;
	}

	.project-image a img {
		padding-top: 24px;
		padding-left: 3px;
	}

	.project-description {
		width: calc(100% - 16.5em);
		margin-top: 1em;
	}

	.project-description p {
		padding-right: 10px;
	}

	.description {
		height: 130px;
	}

	.devicon-row {
		position: relative;
		letter-spacing: 5px;
		font-size: 30px;
	}

	a {
		color: #aaa5a0;
		text-decoration: none;
	}

	p {
		margin: 0;
	}

	.github-icon, .launch-icon {
		float: right;
		margin: auto 0.15em;
	}

	.launch-icon i {
		font-size: 32px;
	}

	.link-row {
		display: none;
	}

	@media (max-width: 479px) {
		.project-description {
			text-align: center;
			margin-left: auto;
			margin-right: auto;
			margin-bottom: 1em;
		}

		.project-description tr p {
			margin-bottom: revert;
		}

		.project-image {
			display: none;
		}

		.project-image-responsive {
			display: flex;
			justify-content: center;
			align-items: center;
			max-width: 200px;
			max-height: 200px;
			border-radius: 5px;
			overflow: hidden;
			margin: 1.5em;
		}

		.project-image-responsive a img {
			margin-top: 25px;
			margin-left: 2px;
		}

		.devicon-row .github-icon, .devicon-row .launch-icon {
			display: none;
		}

		.link-row {
			display: block;
			position: relative;
			font-size: 30px;
			letter-spacing: 85px;
			text-align: center;
		}

		.link-row .launch-icon {
			margin-top: 4px;
		}

		.description {
			height: 100px;
		}
	}

</style>

<script lang="ts">
	import { onMount } from 'svelte';
	import { fly } from "svelte/transition";
	
	let projects = [
		{ 
			name: 'Toastmasters Table Topics', 
			description: 'An Angular app that generates Table Topics questions for Toastmasters, complete with a timer. This app has been used by my club - Park Toastmasters in Ramsey, NJ - several times for Table Topics when we conduct meetings over Zoom.', 
			img: 'images/ttlogo.png',
			url: 'https://ntroyer.github.io/TableTopics',
			giturl: 'https://github.com/ntroyer/TableTopics',
			devicons: ['angularjs', 'nodejs', 'html5', 'css3', 'npm'],
		}, 
		{ 
			name: 'Polyomino Painter', 
			description: 'A painting app that uses randomly generated polyominos as brushes. Users can customize their brush by toggling the individual cells in the brush editor. Supports erasing, filling and color picking. This project stemmed from a grid-based game I was attempting to make.', 
			img: 'images/polylogo.png',
			url: 'https://ntroyer.github.io/PolyominoPainter/',
			giturl: 'https://github.com/ntroyer/PolyominoPainter',
			devicons: ['react', 'nodejs', 'html5', 'css3', 'yarn'],
		},  
		{ 
			name: 'Personal website', 
			description: 'This website is written by me in Svelte, using Sapper for routing between pages. Pageload animations are done using Svelte. Each page is a separate component', 
			img: 'logo-192.png',
			url: 'https://www.google.com',
			giturl: 'https://github.com/ntroyer',
			devicons: ['javascript', 'nodejs', 'html5', 'css3', 'yarn']
		}
	];

	let ready = false;
	onMount(() => ready = true);
</script>

<svelte:head>
	<title>Nat's Projects</title>
</svelte:head>

{#if ready}
<div class="projects">
	<h1 in:fly="{{y: 20, duration: 2000}}">Personal Projects</h1>
	{#each projects as project, index}
	<div class="project" in:fly="{{x: 200, delay: (1 + index) * 200}}">
		<div class="project-image">
			<a href="{project.url}" target="_blank">
				<img src="{project.img !== '' ? project.img : 'images/placeholder.gif'}" alt="{project.name}" />
			</a>
		</div>
		<table class="project-description">
			<h2>{project.name}</h2>
			<div class="project-image-responsive">
				<a href="{project.url}" target="_blank">
					<img src="{project.img !== '' ? project.img : 'images/placeholder.gif'}" alt="{project.name}" />
				</a>
			</div>
			<tr class="description">
				<p>{project.description}</p>
			</tr>
			<tr class="devicon-row">
				{#each project.devicons as devicon}
					{#if devicon === 'npm'}
						<i class="devicon-npm-original-wordmark"></i>
					{:else}
						<i class="devicon-{devicon}-plain"></i>
					{/if}
				{/each}
				<a class="github-icon" href='{project.giturl}' target="_blank"><i class="devicon-github-plain"></i></a>
				<a class="launch-icon" href='{project.url}' target="_blank"><i class="material-icons">launch</i></a>
			</tr>
			<tr class="link-row">
				<a class="github-icon" href='{project.giturl}' target="_blank"><i class="devicon-github-plain"></i></a>
				<a class="launch-icon" href='{project.url}' target="_blank"><i class="material-icons">launch</i></a>
			</tr>
		</table>
	</div>
	{/each}
</div>
{/if}