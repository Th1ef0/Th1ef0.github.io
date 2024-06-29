import {Comic} from './interfaces';
import { formatDistanceToNow } from "date-fns";

const title = document.getElementById('title') as HTMLElement;
const image = document.getElementById('image') as HTMLImageElement;
const date = document.getElementById('date') as HTMLElement;

function getData() {
    const params = new URLSearchParams();
    params.append("email", "k.karsakov@innopolis.university");

    fetch("https://fwd.innopolis.university/api/hw2?" + params.toString())
        .then(r => r.text())
        .then(id => {
            return fetch("https://fwd.innopolis.university/api/comic?id=" + id.toString());
        })
        .then(response => {
            if (!response.ok) {
                throw new Error('Network response was not ok');
            }
            return response.json() as Promise<Comic>;
        })
        .then(data => {
            console.log(data);
            title.textContent = data.safe_title;
            image.alt = data.alt;
            image.src = data.img;
            image.style.scale = "100%";
            image.style.width = "90%";
            const event = new Date(parseInt(data.year), parseInt(data.month) - 1, parseInt(data.day));
            date.textContent = formatDistanceToNow(event);
        })
        .catch(error => {
            console.error('Fetch error:', error);
        });
}

getData();
