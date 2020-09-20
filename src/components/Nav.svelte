<script>
	export let segment;
</script>

<style>
	nav {
		display: flex;
		justify-content: space-between;
		border-bottom: 1px solid #615c58;
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
		height: 2px;
		background-color: rgb(255,62,0);
		display: block;
		bottom: -1px;
	}

	.navbar a {
		text-decoration: none;
		text-transform: uppercase;
		padding: 1em 0.5em;
		display: block;
		float: left;
	}
</style>

<nav>
	<div class="title">
		<h1>Nat Troyer</h1>
	</div>
	<div class="navbar">
		<a aria-current="{segment === undefined ? 'page' : undefined}" href=".">home</a>
		<a aria-current="{segment === 'about' ? 'page' : undefined}" href="about">about</a>
		<a aria-current="{segment === 'resume' ? 'page' : undefined}" href="resume">resume</a>
		<a aria-current="{segment === 'projects' ? 'page' : undefined}" href="projects">projects</a>
		<a rel=prefetch aria-current="{segment === 'blog' ? 'page' : undefined}" href="blog">blog</a>
		<a aria-current="{segment === 'contact' ? 'page' : undefined}" href="contact">contact</a>
	</div>
</nav>
