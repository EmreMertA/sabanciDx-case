import { Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import Search from './pages/Search';
import TempDetail from './pages/Movie';
import Actor from './pages/Actor';
const App: React.FC = () => {
  return (
    <div className='flex flex-col w-full  max-w-[100vw] min-h-screen'>
      <Navbar />

      <div className=' h-full '>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/search/:movieId' element={<Search />} />
          <Route path='/movie/:movieId' element={<TempDetail />} />
          <Route path='/actor/:actorId' element={<Actor />} />
        </Routes>
      </div>
    </div>
  );
};

export default App;
