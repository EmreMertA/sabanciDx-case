import React from 'react';
import { useNavigate } from 'react-router-dom';
interface Props {
  actorName: string;
  actorProfilePath: string;
  actorId: number;
}

const ActorCard: React.FC<Props> = ({
  actorId,
  actorName,
  actorProfilePath,
}) => {
  const navigate = useNavigate();


  const handleClick = (movieId: number) => {
   navigate(`/actor/${actorId}`);
  };
  return (
    <div className='bg-white rounded-lg min-w-[13rem]  w-52'>
      <img
        onClick={() => handleClick(actorId)}
        src={
          actorProfilePath !== null
            ? `https://www.themoviedb.org/t/p/w276_and_h350_face${actorProfilePath}`
            : 'https://placehold.co/400x500?text=Placeholder+Image'
        }
        alt={actorName}
        className='w-full rounded-lg cursor-pointer'
      />
      <div className='mt-2'>
        <h3
          onClick={() => handleClick(actorId)}
          className='text-lg font-semibold cursor-pointer'
        >
          {actorName !== null ? actorName : 'N/A'}
        </h3>
      </div>
    </div>
  );
};

export default ActorCard;
