const API_KEY = "dc2664e0f02860cb1c57981698cb3c05";
const BASE_URL = "https://www.themoviedb.org/";

export const getPopularMovies = async () => {
    const response = await fetch(`${BASE_URL}/movies/popular?api_key=${API_KEY}`);
};