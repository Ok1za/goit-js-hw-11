import iziToast from "izitoast";
import "izitoast/dist/css/iziToast.min.css";

function getPriceBySymbol(userSymbol) {
    const BASE_URL = 'http://localhost:5173/';
    const END_POINT = '/photo';
    const PARAMS = `?symbol=${userSymbol}`;

    const url = BASE_URL + END_POINT + PARAMS;

    const options = {
        q: 'photos',
        image_type: photo,
        orientation: horizontal,
        safesearch: true,
        headers: {
        'X-RapidAPI-Key': '42296578-21d0e9ca438ad812aa67579cd',
        'X-RapidAPI-Host': 'http://localhost:5173/',
        },
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