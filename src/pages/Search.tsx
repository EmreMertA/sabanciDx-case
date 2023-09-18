import { useEffect, useState } from 'react';
import MovieCard from '../components/MovieCard';
import { useLocation, useNavigate } from 'react-router-dom';
import { AiOutlineSearch } from 'react-icons/ai';
import axios from 'axios';
import { MovieList } from '../types/MovieList';
import ReactPaginate from 'react-paginate';
import { Oval } from 'react-loader-spinner';
import useYear from '../hooks/useYearHook';

import styles from '../styles/pagination.module.css';

type Props = {};

const Search: React.FC<Props> = () => {
  const location = useLocation();
  const parts = location.pathname.split('/');
  const movieTitle = parts[2].replace('-', ' ');
  const navigate = useNavigate();
  const year = useYear();
  console.log(year.year);

  const [searchTerm, setSearchTerm] = useState<string>(movieTitle);
  const [movies, setMovies] = useState<MovieList[]>();
  const [totalPages, setTotalPages] = useState<number>(0);
  const [currentPage, setCurrentPage] = useState<number>(1);
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [query, setQuery] = useState<string>(movieTitle);

  const options = {
    method: 'GET',
    headers: {
      accept: 'application/json',
      Authorization:
        'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI2NWMzMmJhM2Q2ZDI0MWZhMTAxNTMwZmY3NWQ5YzZhZSIsInN1YiI6IjVmZWZhYzNmNTkwN2RlMDAzZjM5ODdjMSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.aUnf2snnMfeJLQdhoStAZWBM3jkH0JfCYnMlPtSkew4',
    },
  };
  useEffect(() => {
    setIsLoading(true);
    axios
      .get(
        year.year === 'all'
          ? `https://api.themoviedb.org/3/search/movie?query=${query}&page=${currentPage}&language=en-US`
          : `https://api.themoviedb.org/3/search/movie?query=${query}&include_adult=false&language=en-US&primary_release_year=${year.year}&page=${currentPage}`,
        options
      )
      .then((response) => {
        setMovies(response.data.results);
        setTotalPages(response.data.total_pages);
        console.log(response.data);
      })
      .catch((error) => {
        console.error(error);
      })
      .finally(() => {
        setIsLoading(false);
      });
  }, [currentPage, query, year.year]);

  const handleSubmit = (e: any) => {
    e.preventDefault();
    if (searchTerm === '') return;
    var keywords = searchTerm.split(' ');
    var queryKey = keywords.join('%20');
    setQuery(queryKey);
    navigate(`/search/${searchTerm.replace(' ', '-')}`);
  };

  const renderMovies = movies?.map((movie) => (
    <MovieCard
      key={movie.id}
      movieTitle={movie.title}
      moviePosterPath={movie.poster_path}
      movieRating={movie.vote_average}
      releaseDate={movie.release_date}
      movieId={movie.id}
    />
  ));

  return (
    <div>
      <div className='w-full flex justify-center items-center flex-col mb-3'>
        <form
          onSubmit={(e) => handleSubmit(e)}
          className='w-4/5 border-b-2  h-8 mb-4 flex flex-row justify-start items-center '
        >
          <AiOutlineSearch className='text-2xl mr-2' />
          <select
            name='Year'
            id=''
            className='w-18 px-2  -2 rounded w'
            onChange={(e) => year.setYear(e.target.value)}
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
          <input
            type='text'
            className='w-full px-2  rounded focus:outline-none '
            placeholder='Search'
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
          <button
            className='bg-gradient-to-r from-teal-400 to-blue-500 text-white px-4 h-full  hover:from-teal-600 hover:to-blue-600 focus:outline-none'
            type='submit'
            onClick={(e) => handleSubmit(e)}
          >
            Search
          </button>
        </form>
        <div className='flex flex-wrap justify-around w-4/5 flex-shrink-0 gap-4'>
          {!isLoading ? (
            renderMovies
          ) : (
            <div className='p-5'>
              <Oval
                height={80}
                width={80}
                color='#3c3d69'
                wrapperStyle={{}}
                wrapperClass=''
                visible={true}
                ariaLabel='oval-loading'
                secondaryColor='gray'
                strokeWidth={2}
                strokeWidthSecondary={2}
              />
            </div>
          )}
        </div>
      </div>
      <ReactPaginate
        pageCount={totalPages}
        marginPagesDisplayed={0}
        pageRangeDisplayed={2}
        previousLabel='Previous'
        nextLabel='Next'
        onPageChange={(e) => setCurrentPage(e.selected + 1)}
        containerClassName={styles.pagination}
        activeLinkClassName={styles.activelink}
        pageLinkClassName={styles.link}
        previousLinkClassName={styles.link}
        nextLinkClassName={styles.link}
        breakClassName={styles.link}
      />
    </div>
  );
};

export default Search;
