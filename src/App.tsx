import { Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './pages/Home';


const App: React.FC = () => {
 
  return (
    <div className='flex flex-col w-full  max-w-[100vw] min-h-screen'>
      <Navbar />

      <div className=' h-full '>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/B' element={<div>B</div>} />
        </Routes>
      </div>
    </div>
  );
};

export default App;
