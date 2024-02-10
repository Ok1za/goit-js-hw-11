import iziToast from "izitoast";
import "izitoast/dist/css/iziToast.min.css";

document.addEventListener('DOMContentLoaded', () => {
    const form = document.querySelector('.search-form');
    const input = document.querySelector('.input-search');
    const gallery = document.getElementById('gallery');
});

function getGallery() {
    const BASE_URL = 'https://pixabay.com/api/';
    const API_KEY = '42296578-21d0e9ca438ad812aa67579cd';

    const url = BASE_URL + END_POINT;

    const options = {
        q: 'photos',
        image_type: photo,
        orientation: horizontal,
        safesearch: true,
    };

    return fetch(url, options).then(res => {
        if (res.ok) {
            return res.json();
        } else {
            throw new Error(res.status);
        }
    });
}

iziToast.error({
    title: 'Error',
    message: 'Sorry, there are no images matching your search query. Please try again!',
});