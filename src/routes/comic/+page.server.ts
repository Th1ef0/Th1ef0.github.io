import { formatDistanceToNow } from 'date-fns';

export const csr = false;

interface Comic {
	month: string;
	num: number;
	link: string;
	year: string;
	news: string;
	safe_title: string;
	transcript: string;
	alt: string;
	img: string;
	title: string;
	day: string;
}

export async function load() {
	const params = new URLSearchParams();
	params.append('email', 'k.karsakov@innopolis.university');

	const idResponse = await fetch('https://fwd.innopolis.university/api/hw2?' + params.toString());
	const id = await idResponse.text();
	const comicResponse = await fetch('https://fwd.innopolis.university/api/comic?id=' + id);

	if (!comicResponse.ok) {
		throw new Error('Network response was not ok');
	}

	const data: Comic = await comicResponse.json();

	const event = new Date(parseInt(data.year), parseInt(data.month) - 1, parseInt(data.day));
	const formattedDate = formatDistanceToNow(event);

	return {
		title: data.safe_title,
		imageAlt: data.alt,
		imageUrl: data.img,
		formattedDate
	};
}
