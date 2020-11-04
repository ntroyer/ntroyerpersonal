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
		padding: 0;
		margin: 3em auto;
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
		<div class="main-webpage">
			<h1>Nat Troyer</h1>

			<p>Full-stack Web Developer with over 6 years of experience</p>
			<ul class="about-list">
				<li> </li>
				<li><a href="about">About</a></li>
				<li><i class="material-icons">code</i></li>
				<li><a href="projects">Projects</a></li>
				<li> </li>
			</ul>
		</div>
		<ul class="contact-icons">
			<li class="resume-icon">
				<a href="{process.env.RESUME_LINK}" data-tooltip="Resume"><i class="material-icons">contact_page</i></a>
			</li>
			<li class="email-icon">
				<a href="{process.env.EMAIL}" data-tooltip="Email"><i class="material-icons">email</i></a>
			</li>
			<li class="github-icon">
				<a href="{process.env.GITHUB_LINK}" data-tooltip="GitHub"><i class="devicon-github-plain"></i></a>
			</li>
			<li class="linkedin-icon">
				<a href="{process.env.LINKEDIN_LINK}" data-tooltip="LinkedIn"><i class="devicon-linkedin-plain"></i></a>
			</li>
		</ul>
	</div>
{/if}
