<style>
	h1, h3 {
		text-align: center;
		margin: 0 auto;
	}

	h3 {
		padding-right: 5px;
	}

	h1 {
		font-size: 2.8em;
		margin: 0 0 0.5em 0;
	}

	a:link {
		text-decoration: none;
	}

	ul {
		display: flex;
		justify-content: center;
		list-style-type: none;
		padding: 0;
		margin: 3.5em auto;
		text-align: center;
	}

	li {
		display: list-item;
		font-size: 24px;
		text-transform: uppercase;
		margin: 0 auto;
	}

	.material-icons {
		margin: 0;
	}

	.contact-icons i {
		font-size: 6rem;
	}

	.about-list a {
		padding: 0.8rem 7.2rem;
		background-color: #1c282c;
		border-radius: 5px;
	}

	.about-list a:hover {
		background-color: #2d4a4a;
	}

	@media (min-width: 480px) {
		h1 {
			font-size: 4rem;
		}
	}

	@media (max-width: 479px) {
		.contact-icons i {
			font-size: 4rem;
		}
	}
</style>

<script>
	import { fly } from 'svelte/transition';
	import { onMount } from "svelte";

	let ready = false;
	onMount(() => ready = true);
</script>

<svelte:head>
	<title>Nat Troyer - Web Developer</title>
</svelte:head>

{#if ready}
	<div in:fly="{{y: 20, duration: 2000}}">
		<h1>Nat Troyer</h1>

		<h3>Full-Stack Web Developer</h3>
		<ul class="about-list">
			<li><a href="about">About</a></li>
			<li><a href="projects">Projects</a></li>
		</ul>
		<ul class="contact-icons">
			<li class="resume-icon">
				<a href="{process.env.RESUME_LINK}" data-tooltip="Resume" target="_blank"><i class="material-icons">contact_page</i></a>
			</li>
			<li class="email-icon">
				<a href="{process.env.EMAIL}" data-tooltip="Email"><i class="material-icons">email</i></a>
			</li>
			<li class="github-icon">
				<a href="{process.env.GITHUB_LINK}" data-tooltip="GitHub" target="_blank"><i class="devicon-github-plain"></i></a>
			</li>
			<li class="linkedin-icon">
				<a href="{process.env.LINKEDIN_LINK}" data-tooltip="LinkedIn" target="_blank"><i class="devicon-linkedin-plain"></i></a>
			</li>
		</ul>
	</div>
{/if}
