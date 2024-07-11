<script context="module" lang="ts">
	import type { Load } from '@sveltejs/kit';
	import { formatDistanceToNow } from 'date-fns';
	import type { Comic } from './interface';

	export const load: Load = async ({ fetch }) => {
		const params = new URLSearchParams();
		params.append('email', 'k.karsakov@innopolis.university');

		const response1 = await fetch('https://fwd.innopolis.university/api/hw2?' + params.toString());
		const id = await response1.text();

		const response2 = await fetch(`https://fwd.innopolis.university/api/comic?id=${id}`);
		if (!response2.ok) {
			throw new Error('Network response was not ok');
		}
		const data: Comic = await response2.json();

		const title = data.safe_title;
		const imageAlt = data.alt;
		const imageUrl = data.img;
		const event = new Date(parseInt(data.year), parseInt(data.month) - 1, parseInt(data.day));
		const formattedDate = formatDistanceToNow(event);

		return {
			props: {
				title,
				imageAlt,
				imageUrl,
				formattedDate
			}
		};
	};
</script>

<script lang="ts">
	export let title: string;
	export let imageAlt: string;
	export let imageUrl: string;
	export let formattedDate: string;
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
