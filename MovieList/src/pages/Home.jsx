import MovieCard from "../components/MovieCard";
import { useState, useEffect } from "react";
import "../css/Home.css";
import { getPopularMovies, searchMovies } from "../services/api.js";

function Home() {
    const [searchQuery, setSearchQuery] = useState("");
    const [movies, setMovies] = useState([]);
    const [error, setError] = useState(null);
    const [loading, setLoading] = useState(true);

    // This runs when the page first opens
    useEffect(() => {
        const loadPopularMovies = async () => {
            setLoading(true);
            try {
                const popularMovies = await getPopularMovies();
                setMovies(popularMovies);
                setError(null);
            } catch (err) {
                console.error(err);
                setError("Failed to load movies...");
            } finally {
                setLoading(false);
            }
        };

        loadPopularMovies();
    }, []);

    // This runs every time the user types in the search box
    useEffect(() => {
        const delaySearch = setTimeout(async () => {
            if (!searchQuery.trim()) {
                setLoading(true); // Add this
             try {
                 const popularMovies = await getPopularMovies();
                setMovies(popularMovies);
                setError(null);
        } catch (err) {
                console.error(err);
                setError("Failed to load movies....");
    }       finally {
             setLoading(false);
    }
            return;
}

            // If there's text, search for matching movies
            try {
                setLoading(true);
                const searchResults = await searchMovies(searchQuery);
                setMovies(searchResults);
                setError(null);
            } catch (err) {
                console.error(err);
                setError("Failed to search movies...");
            } finally {
                setLoading(false);
            }
        },); // ⏱️ delay to avoid searching on every keystroke

        return () => clearTimeout(delaySearch); // Cleanup to avoid spam
    }, [searchQuery]);

    return (
        <div className="home">
            <form className="search-form" onSubmit={(e) => e.preventDefault()}>
                <input
                    type="text"
                    placeholder="Search for movies..."
                    className="search-input"
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                />
                <button type="submit" className="search-button">Search</button>
            </form>

            {error && <div className="error-message">{error}</div>}

            {loading ? (
                <div className="loading">Loading...</div>
            ) : (
                <>
                {!loading && !error && movies.length === 0 && (
                    <div className="no-results">No movies found.</div>
                )}
                <div className="movies-grid">
                    {movies.map((movie) => (
                        <MovieCard movie={movie} key={movie.id} />
                    ))}
                </div>
                </>
            )}
        </div>
    );
}

export default Home;
