import React from 'react';

interface Props {
  movieTitle: string;
  movieRating: number;
  moviePosterPath: string;
}

const MovieCard: React.FC<Props> = ({
  movieTitle,
  moviePosterPath,
  movieRating,
}) => {
  return (
    <div className='bg-white rounded-lg min-w-[13rem]  w-52'>
      <img
        src={`https://www.themoviedb.org/t/p/w440_and_h660_face${moviePosterPath}`}
        alt={movieTitle}
        className='w-full rounded-lg'
      />
      <div className='mt-2'>
        <h3 className='text-lg font-semibold'>{movieTitle}</h3>
        <p className='text-gray-600 text-sm mt-1'>Rating: {movieRating}</p>
      </div>
    </div>
  );
};

export default MovieCard;
