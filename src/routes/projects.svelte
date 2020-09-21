<style>
	.projects {
		animation: 2s fadeInRight;
	}
	@keyframes fadeInRight {
		0% {
			opacity: 0;
			transform: translateX(40px);
		}
		100% {
			opacity: 1; 
			transform: translateX(0);
		}
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

</style>

<script lang="ts">
	let projects = [
		{ 
			name: 'Polyomino Painter', 
			description: 'A Painting app that uses randomly generated polyominos as brushes.', 
			img: 'https://i.somethingawful.com/u/garbageday/2012/comedy_goldmine/tailsgetstrolled/moretailsgetstrolled/reaction.jpg',
			url: 'https://www.google.com',
		}, 
		{ 
			name: 'Table Topics Questions app', 
			description: 'An app that generates Table Topics questions for Toastmasters, complete with a timer.', 
			img: 'https://i.kym-cdn.com/photos/images/original/001/186/279/de9.jpg',
			url: 'https://www.google.com',
		}, 
		{ 
			name: 'Project 3', 
			description: 'Coming soon...', 
			img: 'https://i.somethingawful.com/u/garbageday/2012/comedy_goldmine/tailsgetstrolled/moretailsgetstrolled/reaction.jpg',
			url: 'https://www.google.com',
		}, 
		{ 
			name: 'Project 4', 
			description: 'Coming soon...', 
			img: 'https://i.kym-cdn.com/photos/images/original/001/186/279/de9.jpg',
			url: 'https://www.google.com',
		}
	];
</script>

<svelte:head>
	<title>Nat's Projects</title>
</svelte:head>

<div class="projects">
	<h1>Projects</h1>
	{#each projects as project}
	<div class="project">
		<div class="project-image">
			<a href="{project.url}" target="_blank">
				<img src="{project.img}" alt="Project" />
			</a> 
		</div>
		<div class="project-description">
			<h2>{project.name}</h2>
			<p>{project.description}</p>
		</div>
	</div>
	{/each}
</div>