<script>
	export let segment;
</script>

<style>
	nav {
		display: flex;
		justify-content: space-between;
		background-color: #1c282c;
		font-weight: 300;
		padding: 0 1.6em;
		position: sticky;
		top: 0;
		z-index: 3;
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
		text-transform: uppercase;
		padding: 1em 0.5em;
		display: block;
		float: left;
	}

	.mainnav {
		border-bottom: 2px solid rgba(17, 22, 23, 1);
	}

	.hamnav, .hamitems {
		display: none;
	}

	a {
		text-decoration: none;
		color: #aaa5a0;
	}

	.material-icons {
		padding-top: 2px;
		font-size: 18px;
	}

	.title {
		font-family: menlo, inconsolata, monospace;
		font-size: 1.5rem;
	}

	.title h2 {
		margin: 0.4rem 0 0 0;
	}

	nav label, #hamburger {
		display: none;
	}

	@media (max-width: 479px) {
		.navbar {
			display: none;
		}

		nav label {
			display: inline-block;
			font-size: 35px;
			color: #aaa5a0;
		}

		#hamburger:checked ~ .hamitems {
			display: block;
			position: fixed;
			top: 52px;
			left: 0;
			right: 0;
		}

		.hamitems a {
			text-decoration: none;
			text-align: center;
			text-transform: uppercase;
			padding: 10px;
			box-sizing: border-box;
			display: block;
			width: 100%;
			background-color: #1c282c;
			border: 2px solid rgba(17, 22, 23, 1);
		}

		.hamnav {
			display: flex;
			padding: 0;
		}
	}
</style>

<nav class="mainnav">
	<div class="title">
		<h2><a href=".">nat</a></h2>
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
		<a href="{process.env.GITHUB_LINK}" data-tooltip="GitHub" target="_blank">
			<i class="devicon-github-plain"></i>
		</a>
		<a href="{process.env.LINKEDIN_LINK}" data-tooltip="LinkedIn" target="_blank" >
			<i class="devicon-linkedin-plain"></i>
		</a>
	</div>
	<nav class="hamnav">
		<input type="checkbox" id="hamburger" checked="" />
		<label for="hamburger">&#9776;</label>
		<div class="hamitems">
			<a href=".">home</a>
			<a href="about">about</a>
			<a href="projects">projects</a>
		</div>
	</nav>
</nav>