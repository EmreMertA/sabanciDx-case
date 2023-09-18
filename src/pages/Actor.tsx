
import ActorDetails from './ActorDetails';
import ActorMovies from '../components/ActorMovies';

type Props = {};

const Actor = (props: Props) => {
  return (
    <>
      <ActorDetails />
      <ActorMovies />
    </>
  );
};

export default Actor;
