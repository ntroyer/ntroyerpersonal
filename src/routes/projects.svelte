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
		min-width: 200px;
		min-height: 200px;
		max-width: 200px;
		max-height: 200px;
		border-radius: 5px;
		background-position: center center;
		background-repeat: no-repeat;
		overflow: hidden;
		margin: 1.5em;
	}

	.project-description {
		margin-top: 1.5em;
	}

	.project-description p {
		padding-right: 10px;
	}

	.devicon-row {
		position: relative;
		letter-spacing: 5px;
		font-size: 24px;
	}

	a {
		color: #aaa5a0;
	}

</style>

<script lang="ts">
	import { fly } from "svelte/transition";
	// todo - icon links to list technologies, and for places like github
	let projects = [
		{ 
			name: 'Polyomino Painter', 
			description: 'A Painting app that uses randomly generated polyominos as brushes.', 
			img: 'https://i.somethingawful.com/u/garbageday/2012/comedy_goldmine/tailsgetstrolled/moretailsgetstrolled/reaction.jpg',
			url: 'https://www.google.com',
			giturl: '',
			devicons: ['react', 'nodejs', 'html5', 'css3', 'npm', 'mongodb'],
		}, 
		{ 
			name: 'Table Topics Questions app', 
			description: 'An app that generates Table Topics questions for Toastmasters, complete with a timer.', 
			img: 'https://i.kym-cdn.com/photos/images/original/001/186/279/de9.jpg',
			url: 'https://www.google.com',
			giturl: '',
			devicons: ['angularjs', 'nodejs', 'html5', 'css3', 'mongodb'],
		}, 
		{ 
			name: 'Project 3', 
			description: 'Coming soon...', 
			img: 'https://i.somethingawful.com/u/garbageday/2012/comedy_goldmine/tailsgetstrolled/moretailsgetstrolled/reaction.jpg',
			url: 'https://www.google.com',
			giturl: '',
			devicons: ['nodejs', 'html5', 'css3']
		}, 
		{ 
			name: 'Project 4', 
			description: 'Coming soon...', 
			img: 'https://i.kym-cdn.com/photos/images/original/001/186/279/de9.jpg',
			url: 'https://www.google.com',
			giturl: '',
			devicons: ['nodejs', 'html5', 'css3']
		}
	];
</script>

<svelte:head>
	<title>Nat's Projects</title>
</svelte:head>

<div class="projects">
	<h1 in:fly="{{y: 20, duration: 2000}}">Projects</h1>
	{#each projects as project, index}
	<div class="project" in:fly="{{x: 200, delay: (1 + index) * 200}}">
		<div class="project-image">
			<a href="{project.url}" target="_blank">
				<img src="{project.img}" alt="Project" />
			</a>
		</div>
		<div class="project-description">
			<h2>{project.name}</h2>
			<p>{project.description}</p>
			<div class="devicon-row">
				{#each project.devicons as devicon}
					{#if devicon === 'npm'}
						<i class="devicon-npm-original-wordmark"></i>
					{:else}
						<i class="devicon-{devicon}-plain"></i>
					{/if} 
				{/each}
				|
				<a href='{project.giturl}'>
					<i class="devicon-github-plain"></i>
				</a>
			</div>
		</div>
	</div>
	{/each}
</div>