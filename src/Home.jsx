import MovieCard from '../components/MovieCard';
import { movies } from '../data';

export default function Home() {
  return (
    <div>
      <h1>Home Page</h1>
      {movies.map(movie => (
        <MovieCard key={movie.id} id={movie.id} title={movie.title} />
      ))}
    </div>
  );
}