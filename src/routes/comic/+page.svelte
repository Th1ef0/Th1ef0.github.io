<script lang="ts">
	import { onMount } from 'svelte';
	import { formatDistanceToNow } from 'date-fns';
	import type { Comic } from './interface';

	let title: string = '';
	let imageAlt: string = '';
	let imageUrl: string = '';
	let formattedDate: string = '';

	function getData() {
		const params = new URLSearchParams();
		params.append('email', 'k.karsakov@innopolis.university');

		fetch('https://fwd.innopolis.university/api/hw2?' + params.toString())
			.then((r) => r.text())
			.then((id) => {
				return fetch('https://fwd.innopolis.university/api/comic?id=' + id.toString());
			})
			.then((response) => {
				if (!response.ok) {
					throw new Error('Network response was not ok');
				}
				return response.json() as Promise<Comic>;
			})
			.then((data) => {
				console.log(data);
				title = data.safe_title;
				imageAlt = data.alt;
				imageUrl = data.img;
				const event = new Date(parseInt(data.year), parseInt(data.month) - 1, parseInt(data.day));
				formattedDate = formatDistanceToNow(event);
			})
			.catch((error) => {
				console.error('Fetch error:', error);
			});
	}

	onMount(() => {
		getData();
	});
</script>

<svelte:head>
	<title>Comic</title>
	<meta name="Comic page" content="some comic with date" />
</svelte:head>

<main>
	<div>
		<h1 class="text">{title}</h1>
		<img src={imageUrl} alt={imageAlt} />
		<p class="text">{formattedDate}</p>
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
