import MovieCard from './MovieCard';
import axios from 'axios';
import { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';
import { Actor } from '../types/Actors';
import ActorCard from './ActorCard';
type Props = {};

const Actors: React.FC<Props> = () => {
  const [actors, setActors] = useState<Actor[]>();
  const location = useLocation();
  const parts = location.pathname.split('/');
  const movieId = parts[2].replace('-', ' ');

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
        `https://api.themoviedb.org/3/movie/${movieId}/credits?language=en-US`,
        options
      )
      .then((response) => {
        setActors(response.data.cast);
        console.log(response.data);
      })
      .catch((error) => {
        console.error(error);
      });
  }, [movieId]);

  return (
    <div className='w-full flex justify-center items-center flex-col '>
      <div className='flex flex-col w-4/5 flex-shrink-0'>
        <h1 className='text-3xl my-3'>Actors</h1>
        <div className='flex flex-row space-x-4 overflow-x-scroll'>
          <div className='flex space-x-4'>
            {actors?.slice(0, 12).map((actor) => (
              <ActorCard
                key={actor.id}
                actorName={actor.name}
                actorProfilePath={actor.profile_path}
                actorId={actor.id}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Actors;
