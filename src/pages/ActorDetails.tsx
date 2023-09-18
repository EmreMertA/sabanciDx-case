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
import { ActorDetail } from '../types/ActorDetail';

type Props = {};

const ActorDetails: React.FC<Props> = () => {
  const [details, setDetails] = useState<ActorDetail>();
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
        `https://api.themoviedb.org/3/person/${movieId}?language=en-US`,
        options
      )
      .then((response) => {
        setDetails(response.data);
        console.log({actor:response.data});
      })
      .catch((err) => console.error(err));
  }, [movieId]);

  console.log(details);
  return (
    <div className='relative lg:h-[70vh] sm:h-[110vh]  h-[130vh] flex justify-center  '>
      <div
        className='bg-cover bg-center absolute inset-0 bg-hero-bg'
        style={{
          backgroundImage: `url(https://pixabay.com/photos/milky-way-stars-night-sky-2695569/)`,
        }}
      >
        <div className='absolute inset-0 custom-gradient'></div>
      </div>
      <div className='z-50 right-0 left- w-4/5  flex flex-col lg:flex-row  items-center lg:items-start lg:justify-start justify-center m-5 text-white p-5'>
        <div className='rounded-lg lg:w-[600px] w-48 min-w-[14rem]'>
          <img
            src={`https://www.themoviedb.org/t/p/w600_and_h900_bestv2${details?.profile_path}`}
            alt={'A Million Miles Away'}
            className='w-full rounded-lg h-full bg-cover bg-center bg-no-repeat relative'
          />
        </div>
        <div className='flex h-full w-screen  flex-col space-y-8 p-12'>
          <div className='flex flex-col text-center lg:text-start'>
            <h1 className='text-5xl font-bold mb-4'>
              {details?.name}
            </h1>
            <div className='flex lg:flex-row flex-col  space-x-4 text-zinc-300 lg:justify-start justify-center'>
              <h2 className='text-base font-bold mb-4'>
                Birthday : {details?.birthday}
              </h2>
            </div>
          </div>
          <div>
            <h2 className='text-zinc-200 font-bold text-xl'>Biography</h2>
            <h2 className='text-zinc-300 font-semibold text-base lg:line-clamp-[10] md:line-clamp-[12] sm:line-clamp-[15] line-clamp-[17]'>
              {details?.biography}
            </h2>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ActorDetails;
