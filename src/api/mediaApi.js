import axios from "axios"


const UNSPLASH_KEY = import.meta.env.VITE_UNSPLASH_KEY;
const GIPHY_KEY = import.meta.env.VITE_GIPHY_KEY;
const PEXELS_KEY = import.meta.env.VITE_PEXELS_KEY;


export async function fetchPhotos(query, page=1, per_page=20) {
    
    const response = await axios.get("https://api.unsplash.com/search/photos", {
        params:{query, page, per_page},
        headers:{Authorization:`Client-ID ${UNSPLASH_KEY}`}
    });
    return response.data
}


export async function fetchVideos(query, page=1, per_page=20) {
    const response = await axios.get("https://api.pexels.com/v1/videos/search", {
        params:{query, page, per_page},
        headers:{Authorization:PEXELS_KEY}
    });
    return response.data
}
export async function fetchGifs(query, per_page=20) {
    const response = await axios.get("https://api.giphy.com/v1/gifs/search", {
        params:{q:query, limit:per_page, api_key:GIPHY_KEY},
        
    });
    return response.data
}
