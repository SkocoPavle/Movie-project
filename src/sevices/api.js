const API_KEY = "dc2664e0f02860cb1c57981698cb3c05";
const BASE_URL = "https://www.themoviedb.org/";

export const getPopularMovies = async () => {
    const response = await fetch(`${BASE_URL}/movies/popular?api_key=${API_KEY}`);
    const data = await response.json();
    return data.results;
};

export const searchMovies = async (query) => {
    const response = await fetch(`${BASE_URL}/search/movies?api_key=${API_KEY}&query=${encodeURIComponent(query)}`);
    const data = await response.json();
    return data.results;
}