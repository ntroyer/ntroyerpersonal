<style>
	.about {
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

</style>

<svelte:head>
	<title>About Nat</title>
</svelte:head>

<div class="about">
	<h1>About this site</h1>

	<p>I am a web developer who enjoys using modern technologies to build quality websites.</p>
</div>