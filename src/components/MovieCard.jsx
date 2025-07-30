// src/components/MovieCard.js
import { Link } from 'react-router-dom';

export default function MovieCard({ id, title }) {
  return (
    <div>
      <h2>{title}</h2>
      <Link to={`/movie/${id}`}>View Info</Link>
    </div>
  );
}