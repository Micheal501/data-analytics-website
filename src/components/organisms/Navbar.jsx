import Nav from '../molecules/Nav';

const NavBar = () => {
  return (
    <>
      <div className='flex text-white justify-between items-center px-4 h-24 max-w-[1240px] mx-auto'>
        <Nav />
      </div>
    </>
  );
};

export default NavBar;
