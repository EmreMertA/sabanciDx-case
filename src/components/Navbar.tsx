type Props = {};

const Navbar: React.FC<Props> = () => {
  return (
    <div className='flex flex-row justify-center items-center w-full bg-[#191A32] h-16 text-white'>
      <div className="flex flex-row w-4/5 justify-between items-center">
        <h1 className='text-3xl'>SabanciDx</h1>
        <ul className='flex flex-row space-x-3'>
          <li>Home</li>
          <li>Favorites</li>
        </ul>
      </div>
    </div>
  );
};

export default Navbar;
