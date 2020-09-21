<svelte:head>
	<title>Resume</title>
</svelte:head>

<script lang="ts">
	import { fly } from "svelte/transition";
</script>

<div class="resume" in:fly="{{y: 20, duration: 2000}}">
	<h1>
		Resume
	</h1>
</div>