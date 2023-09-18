import React, { useState } from 'react';

const Hero: React.FC = () => {
  const [searchTerm, setSearchTerm] = useState('');

  const handleSearch = (event) => {
    event?.preventDefault();
    if (searchTerm === '') return;

    alert(`Searching for: ${searchTerm}`);
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

        {/* Büyük arama kutusu ve düğme */}
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
