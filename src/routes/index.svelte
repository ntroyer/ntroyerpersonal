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
		<li> </li>
		<li><a href="about">About</a></li>
		<li><i class="material-icons">code</i></li>
		<li><a href="projects">Projects</a></li>
		<li> </li>
	</ul>
	<ul class="contact-icons">
		<li in:fly="{{y: 20, duration: 2000, delay: 1000}}">
			<a href="{process.env.RESUME_LINK}"><i class="material-icons">contact_page</i></a>
		</li>
		<li in:fly="{{y: 20, duration: 2000, delay: 1400}}">
			<a href="{process.env.EMAIL}"><i class="material-icons">email</i></a>
		</li>
		<li in:fly="{{y: 20, duration: 2000, delay: 1800}}">
			<a href="{process.env.GITHUB_LINK}"><i class="devicon-github-plain"></i></a>
		</li>
		<li in:fly="{{y: 20, duration: 2000, delay: 2200}}">
			<a href="{process.env.LINKEDIN_LINK}"><i class="devicon-linkedin-plain"></i></a>
		</li>
	</ul>
</div>
