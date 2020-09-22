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
		<h1>Nat Troyer </h1>
	</div>

	<div class="navbar">
		<a aria-current="{segment === undefined ? 'page' : undefined}" href=".">home</a>
		<a aria-current="{segment === 'about' ? 'page' : undefined}" href="about">about</a>
		<a aria-current="{segment === 'projects' ? 'page' : undefined}" href="projects">projects</a>
		<a rel=prefetch aria-current="{segment === 'blog' ? 'page' : undefined}" href="blog">blog</a>
		<a aria-current="{segment === 'resume' ? 'page' : undefined}" href="resume">resume</a>
		<a href="mailto:nathanaelatroyer@gmail.com">
			<span class="material-icons">email</span>
		</a>
		<a href="https://github.com/ntroyer" target="_blank">
			<i class="devicon-github-plain"></i>
		</a>
		<a href="https://www.linkedin.com/in/nathanaeltroyer/" target="_blank" >
			<i class="devicon-linkedin-plain"></i>
		</a>
	</div>
</nav>
