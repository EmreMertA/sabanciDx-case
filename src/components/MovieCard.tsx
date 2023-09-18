import React from 'react';
import { useNavigate } from 'react-router-dom';
interface Props {
  movieTitle: string;
  movieRating: number;
  moviePosterPath: string;
  releaseDate: string;
  movieId: number;
}

const MovieCard: React.FC<Props> = ({
  movieId,
  movieTitle,
  moviePosterPath,
  movieRating,
  releaseDate,
}) => {
  const navigate = useNavigate();

  var date = new Date(releaseDate);

  var year = date.getFullYear();
  var month = date.toLocaleString('en-US', { month: 'short' });
  var day = date.getDate();

  var result = month + ' ' + day + ', ' + year;

  const handleClick = (movieId: number) => {
    navigate(`/movie/${movieId}`);
  };
  return (
    <div className='bg-white rounded-lg min-w-[13rem]  w-52'>
      <img
        onClick={() => handleClick(movieId)}
        src={
          moviePosterPath !== null
            ? `https://www.themoviedb.org/t/p/w440_and_h660_face${moviePosterPath}`
            : 'https://placehold.co/400x650?text=Placeholder+Image'
        }
        alt={movieTitle}
        className='w-full rounded-lg cursor-pointer'
      />
      <div className='mt-2'>
        <h3
          onClick={() => handleClick(movieId)}
          className='text-lg font-semibold cursor-pointer'
        >
          {movieTitle !== null ? movieTitle : 'N/A'}
        </h3>
        <p className='text-gray-600 text-sm '>{result}</p>
      </div>
    </div>
  );
};

export default MovieCard;
