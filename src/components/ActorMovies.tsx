import MovieCard from './MovieCard';
import axios from 'axios';
import { MovieList } from '../types/MovieList';
import { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';
type Props = {};

const ActorMovies: React.FC<Props> = () => {
  const [movies, setMovies] = useState<MovieList[]>();
  const location = useLocation();
  const parts = location.pathname.split('/');
  const actorId = parts[2].replace('-', ' ');
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
        `https://api.themoviedb.org/3/person/${actorId}/movie_credits?language=en-US`,
        options
      )
      .then((response) => {
        setMovies(response.data.cast);
        
      })
      .catch((error) => {
        console.error(error);
      });
  }, []);
  console.log(movies);
  console.log(movies);
  return (
    <div className='w-full flex justify-center items-center flex-col '>
      <div className='flex flex-col w-4/5 flex-shrink-0'>
        <h1 className='text-3xl my-3'>Movies</h1>
        <div className='flex flex-wrap justify-around w-full flex-shrink-0 gap-4'>
        {movies?.map((movie) => (
              <MovieCard
                key={movie.id}
                movieTitle={movie.title}
                moviePosterPath={movie.poster_path}
                movieRating={movie.vote_average}
                releaseDate={movie.release_date}
                movieId={movie.id}
              />
            ))}
        </div>
      </div>
    </div>
  );
};

export default ActorMovies;
