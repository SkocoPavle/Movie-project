import MovieCard from "../components/MovieCard"
import { useState, useEffect } from "react"
import { searchMovies, getPopularMovies } from "../sevices/api";
import "../css/Home.css"

function Home() {
    const [searchQuery, setSearchQuery] = useState("");
    const [movies, setMovies] = useState([]);
    const [err, setError] = useState(null);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const loadPopularMovies = async () =>{
            try {
                const popularMovies = await getPopularMovies()
                setMovies(popularMovies)
            } catch (err) {
                console.log(err)
                setError("Failed to load movies...")
            }
            finally {
                setLoading(false)
            }
        } 

        loadPopularMovies()
    }, [])

    const handleSearch = async (e) => {
        e.preventDefault();
        if (!searchQuery.trim()) return
        if (loading) return

        setLoading(true)

        try {
            const searchResults = await searchMovies(searchQuery)
            setMovies(searchResults)
            setError(null)
        } catch (err){
            console.log(err);
            setError("Failed to search movies...");
        } finally{
            setLoading(false);
        }
    }

    return <div className="home">
        <form onSubmit={handleSearch} className="search-form">
            <input type="text" placeholder="Search for movies..." className="search-input" 
            value={searchQuery} onChange={(e) =>setSearchQuery(e.target.value)}></input>
            <button type="submit" className="search-btn">Search</button>
        </form>

        {err && <div className="error-message">{erroe}</div>}

        {loading ? (
           <div className="loading">Loading...</div> 
        ) : (
            <div className="movies-grid">
            {movies.map((movie) => (<MovieCard movie={movie} key = {movie.id} />))}
        </div>
        )}
    </div>
}

export default Home