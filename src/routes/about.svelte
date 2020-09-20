<style>
	.about {
		opacity: 0;
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
	<title>About</title>
</svelte:head>

<div class="about">
	<h1>About this site</h1>

	<p>This is the 'about' page. There's not much here.</p>
</div>