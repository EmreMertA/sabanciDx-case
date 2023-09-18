import Hero from '../components/Hero';
import TrendingMovies from '../components/TrendingMovies';

type Props = {};

const Home: React.FC<Props> = () => {
  return (
    <>
      <Hero />
      <TrendingMovies />
    </>
  );
};

export default Home;
