import {
  AiFillHeart,
  AiOutlineUnorderedList,
  AiFillStar,
} from 'react-icons/ai';
import { BsFillBookmarkFill, BsFillPlayFill } from 'react-icons/bs';
import UserScore from '../components/UserScore';
import { useLocation } from 'react-router-dom';
import axios from 'axios';
import { useEffect, useState } from 'react';
import { MovieDetail } from '../types/MovieDetail';

type Props = {};

const MovieDetails: React.FC<Props> = () => {
  const [details, setDetails] = useState<MovieDetail>();
  const location = useLocation();
  const parts = location.pathname.split('/');
  const movieId = parts[2].replace('-', ' ');

  useEffect(() => {
    const options = {
      method: 'GET',
      headers: {
        accept: 'application/json',
        Authorization:
          'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI2NWMzMmJhM2Q2ZDI0MWZhMTAxNTMwZmY3NWQ5YzZhZSIsInN1YiI6IjVmZWZhYzNmNTkwN2RlMDAzZjM5ODdjMSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.aUnf2snnMfeJLQdhoStAZWBM3jkH0JfCYnMlPtSkew4',
      },
    };

    axios
      .get(
        `https://api.themoviedb.org/3/movie/${movieId}?language=en-US`,
        options
      )
      .then((response) => {
        setDetails(response.data);
      })
      .catch((err) => console.error(err));
  }, [movieId]);

  return (
    <div className='relative lg:h-[70vh] h-[130vh] flex justify-center  '>
      <div
        className='bg-cover bg-center absolute inset-0 bg-hero-bg'
        style={{
          backgroundImage: `url(https://www.themoviedb.org/t/p/original${details?.backdrop_path})`,
        }}
      >
        <div className='absolute inset-0 custom-gradient'></div>
      </div>
      <div className='z-50 right-0 left- w-4/5  flex flex-col lg:flex-row  items-center lg:items-start lg:justify-start justify-center m-5 text-white p-5'>
        <div className='rounded-lg lg:w-[600px] w-48 min-w-[14rem]'>
          <img
            src={`https://www.themoviedb.org/t/p/w440_and_h660_face${details?.poster_path}`}
            alt={'A Million Miles Away'}
            className='w-full rounded-lg h-full bg-cover bg-center bg-no-repeat relative'
          />
        </div>
        <div className='flex h-full w-screen  flex-col space-y-8 p-12'>
          <div className='flex flex-col text-center lg:text-start'>
            <h1 className='text-5xl font-bold mb-4'>
              {details?.original_title}
            </h1>
            <div className='flex lg:flex-row flex-col  space-x-4 text-zinc-300 lg:justify-start justify-center'>
              <h2 className='text-base font-bold mb-4'>
                {details?.release_date}
              </h2>
              <h2 className='text-base font-bold mb-4'>
                {details?.genres.map((genre) => genre.name).join(', ')}
              </h2>
              <h2 className='text-base font-bold mb-4'>{details?.runtime} min</h2>
            </div>
          </div>
          <div className='flex lg:hidden justify-center items-center '>
            <UserScore
              radius={50}
              strokeWidth={5}
              progress={Math.floor(details?.vote_average * 10)}
            />
          </div>
          <div className='flex space-x-4 items-center'>
            <div className=' lg:flex hidden justify-center items-center '>
              <UserScore
                radius={50}
                strokeWidth={5}
                progress={Math.floor(details?.vote_average * 10)}
              />
            </div>
            <div className='h-16 w-16 items-center flex justify-center bg-blue-950 opacity-100 rounded-full'>
              <AiOutlineUnorderedList color='white' />
            </div>
            <div className='h-16 w-16 items-center flex justify-center bg-blue-950 opacity-100 rounded-full'>
              <AiFillHeart color='white' />
            </div>
            <div className='h-16 w-16 items-center flex justify-center bg-blue-950 opacity-100 rounded-full'>
              <BsFillBookmarkFill color='white' />
            </div>
            <div className='h-16 w-16 items-center flex justify-center bg-blue-950 opacity-100 rounded-full'>
              <AiFillStar color='white' />
            </div>
            <div className='flex items-center space-x-4 font-semibold'>
              <BsFillPlayFill color='white' size={36} />
              <h1>Play Trailer</h1>
            </div>
          </div>
          <h2 className='text-zinc-400 font-bold text-xl'>
            {details?.tagline}
          </h2>
          <div>
            <h2 className='text-zinc-200 font-bold text-xl'>Overview</h2>
            <h2 className='text-zinc-300 font-semibold text-base'>
              {details?.overview}
            </h2>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MovieDetails;
