import { useParams } from 'react-router-dom';
import { movies } from '../data';

export default function Movie() {
  const { id } = useParams();
  const movie = movies.find(movie => movie.id === parseInt(id));

  return (
    <div>
      <h1>{movie.title}</h1>
      <p>Time: {movie.time}</p>
      {movie.genres.map(genre => (
        <span key={genre}>{genre}</span>
      ))}
    </div>
  );
}