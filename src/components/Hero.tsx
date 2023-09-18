import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import useYear from '../hooks/useYearHook';
const Hero: React.FC = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const year = useYear();
  const navigate = useNavigate();

  const handleSearch = (event: any) => {
    event.preventDefault();
    if (searchTerm === '') return;

    navigate(`/search/${searchTerm.replace(' ', '-')}`);
  };
  const onChangeSelect = (event: any) => {
    year.setYear(event.target.value);
  };

  return (
    <div className='relative h-96'>
      <div
        className='bg-cover bg-center absolute inset-0'
        style={{ backgroundImage: 'url(hero-bg.jpg)' }}
      >
        <div className='absolute inset-0 custom-gradient'></div>
      </div>
      <div className='absolute inset-0 flex flex-col items-center justify-center text-white p-5'>
        <h1 className='text-5xl font-bold mb-4'>Welcome.</h1>
        <span className='text-xl mb-8 text-center'>
          Millions of movies, TV shows and people to discover. Explore now.
        </span>
        <form
          onSubmit={handleSearch}
          className='relative flex justify-center w-4/5 md:w-3/5 items-center'
        >
          <input
            type='text'
            placeholder='Search...'
            className='flex-grow outline-none pl-4 placeholder-gray-400 pr-12 py-2 rounded-l-full text-black'
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
          <select
            className='bg-gradient-to-r  h-full border text-black '
            onClick={(e) => onChangeSelect(e)}
          >
            <option value='all'>YEAR</option>
            <option value='2023'>2023</option>
            <option value='2022'>2022</option>
            <option value='2021'>2021</option>
            <option value='2020'>2020</option>
            <option value='2019'>2019</option>
            <option value='2018'>2018</option>
            <option value='2017'>2017</option>
            <option value='2016'>2016</option>
          </select>
          <button
            className='bg-gradient-to-r from-teal-400 to-blue-500 text-white px-4 py-2 rounded-r-full hover:from-teal-600 hover:to-blue-600 focus:outline-none'
            type='submit'
            onClick={(e) => handleSearch(e)}
          >
            Search
          </button>
        </form>
      </div>
    </div>
  );
};

export default Hero;
