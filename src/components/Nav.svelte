<script>
	export let segment;
</script>

<style>
	nav {
		display: flex;
		justify-content: space-between;
		background-color: #1c282c;
		font-weight: 300;
		padding: 0 1em;
	}

	[aria-current] {
		position: relative;
		display: inline-block;
	}

	[aria-current]::after {
		position: absolute;
		content: '';
		width: calc(100% - 1em);
		height: 3px;
		background-color: rgb(0, 255, 255);
		display: block;
		bottom: -3px;
	}

	.navbar a {
		text-decoration: none;
		text-transform: uppercase;
		padding: 1em 0.5em;
		display: block;
		float: left;
	}

	a {
		color: #aaa5a0;
	}

	.material-icons {
		padding-top: 2px;
		font-size: 18px;
	}
</style>

<nav>
	<div class="title">
		<h1>Nat Troyer</h1>
	</div>

	<div class="navbar">
		<a aria-current="{segment === undefined ? 'page' : undefined}" href=".">home</a>
		<a aria-current="{segment === 'about' ? 'page' : undefined}" href="about">about</a>
		<a aria-current="{segment === 'projects' ? 'page' : undefined}" href="projects">projects</a>
		<a href="{process.env.RESUME_LINK}" data-tooltip="Download Resume" target="_blank">
			<i class="material-icons">contact_page</i>
		</a>
		<a href="{process.env.EMAIL}" data-tooltip="Email">
			<i class="material-icons">email</i>
		</a>
		<a href="{process.env.GITHUB_LINK}" data-tooltip="Github" target="_blank">
			<i class="devicon-github-plain"></i>
		</a>
		<a href="{process.env.LINKEDIN_LINK}" data-tooltip="Linkedin" target="_blank" >
			<i class="devicon-linkedin-plain"></i>
		</a>
	</div>
</nav>
