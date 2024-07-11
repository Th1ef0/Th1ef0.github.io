<script lang="ts">
	export let data;
</script>

<svelte:head>
	<title>Comic</title>
	<meta name="Comic page" content="some comic with date" />
</svelte:head>

<main>
	<div>
		<h1 class="text">{data.comic.title}</h1>
		<img src={data.comic.imageUrl} alt={data.comic.imageAlt} />
		<p class="text">{data.comic.date}</p>
	</div>
</main>

<style>
	img {
		display: block;
		margin: 0 auto;
	}

	div {
		margin: 10px;
		border-radius: 15px;
		border-color: #8567a2;
		border-style: solid;
		background: #c899ef;
		display: flex;
		flex-direction: column;
		flex-wrap: wrap;
		justify-content: center;
		align-items: center;
	}

	.text {
		padding: 10px 10px;
		margin: 5px;
		background: #9043c4;
		color: whitesmoke;
		border: 1px solid #4c0063;
		border-radius: 10px;
	}
</style>
