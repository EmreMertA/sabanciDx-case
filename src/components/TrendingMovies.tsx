import MovieCard from './MovieCard';
import axios from 'axios';
import { MovieList } from '../types/MovieList';
import { useEffect, useState } from 'react';
type Props = {};

const TrendingMovies: React.FC<Props> = () => {
  const [movies, setMovies] = useState<MovieList[]>();
  const options = {
    headers: {
      Accept: 'application/json',
      Authorization:
        'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI2NWMzMmJhM2Q2ZDI0MWZhMTAxNTMwZmY3NWQ5YzZhZSIsInN1YiI6IjVmZWZhYzNmNTkwN2RlMDAzZjM5ODdjMSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.aUnf2snnMfeJLQdhoStAZWBM3jkH0JfCYnMlPtSkew4',
    },
  };

  useEffect(() => {
    axios
      .get(
        'https://api.themoviedb.org/3/trending/movie/day?language=en-US',
        options
      )
      .then((response) => {
        setMovies(response.data.results);
        console.log(movies);
      })
      .catch((error) => {
        console.error(error);
      });

  }, []);

  console.log(movies);
  return (
    <div className='w-full flex justify-center items-center flex-col '>
      <div className='flex flex-col w-4/5 flex-shrink-0'>
        <h1 className='text-3xl my-3'>Trending Movies </h1>
        <div className='flex flex-row space-x-4 overflow-x-scroll'>
          <div className='flex space-x-4'>
            {movies?.map((movie) => (
              <MovieCard
                key={movie.id}
                movieTitle={movie.title}
                moviePosterPath={movie.poster_path}
                movieRating={movie.vote_average}
                releaseDate={movie.release_date}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default TrendingMovies;
