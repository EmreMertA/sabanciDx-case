import React from 'react';

interface Props {
  movieTitle: string;
  movieRating: number;
  moviePosterPath: string;
  releaseDate: string;
}

const MovieCard: React.FC<Props> = ({
  movieTitle,
  moviePosterPath,
  movieRating,
  releaseDate,
}) => {


var date = new Date(releaseDate);

var year = date.getFullYear();
var month = date.toLocaleString('en-US', { month: 'short' });
var day = date.getDate();

var sonuc = month + " " + day + ", " + year;
  return (
    <div className='bg-white rounded-lg min-w-[13rem]  w-52'>
      <img
        src={
          moviePosterPath !== null
            ? `https://www.themoviedb.org/t/p/w440_and_h660_face${moviePosterPath}`
            : 'https://placehold.co/440x660?text=Placeholder+Image'
        }
        alt={movieTitle}
        className='w-full rounded-lg'
      />
      <div className='mt-2'>
        <h3 className='text-lg font-semibold'>{movieTitle !== null ? movieTitle : 'N/A'}</h3>
        <p className='text-gray-600 text-sm '>
          {sonuc}
        </p>
      </div>
    </div>
  );
};

export default MovieCard;
