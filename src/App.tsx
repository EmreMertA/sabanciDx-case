import { Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Hero from './components/Hero';

const App: React.FC = () => {
  return (
    <div className='flex flex-col w-full  max-w-[100vw] min-h-screen'>
      <Navbar />

      <div className=' h-full bg-slate-600'>
        <Routes>
          <Route path='/' element={<Hero />} />
          <Route path='/B' element={<div>B</div>} />
        </Routes>
      </div>
    </div>
  );
};

export default App;
