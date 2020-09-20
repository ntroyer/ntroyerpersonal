<style>
	body {
		animation: 1s ease-out 0s 1 slideIn;
	}
	@keyframes slideIn {
		0% {
			opacity: 0;
			transform: translateY(20px);
		}
		100% {
			opacity: 1;
			transform: translateY(0);
		}
	}

	h1, p {
		text-align: center;
		margin: 0 auto;
	}

	h1 {
		font-size: 2.8em;
		margin: 0 0 0.5em 0;
	}

	p {
		margin: 1em auto;
	}

	@media (min-width: 480px) {
		h1 {
			font-size: 4em;
		}
	}
</style>

<script lang="ts">
	export let title: string = "Welcome to my Typescript web page!";
</script>

<svelte:head>
	<title>Nat Troyer - Web Developer</title>
</svelte:head>

<body>
	<h1>{title}</h1>

	<p>This page is built using Svelte with Sapper and Typescript.</p>
</body>
