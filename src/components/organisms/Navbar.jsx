import { useState } from 'react';
import Nav from '../molecules/Nav';
import DropDown from '../molecules/DropDown';
import HamburgerIcon from '../atoms/Icons/Hamburger';
import CloseIcon from '../atoms/Icons/Close';

const NavBar = () => {
  const [nav, setNav] = useState(true);

  const handleNav = () => {
    setNav(!nav);
  };

  return (
    <>
      <div className='flex text-white justify-between items-center px-4 h-24 max-w-[1240px] mx-auto'>
        {/* Default */}
        <Nav />

        {/* Mobile Screen */}
        <div
          className={
            !nav
              ? 'fixed uppercase left-0 top-0 w-[60%] h-full border-r border-r-slate-900 bg-slate-900 ease-in-out duration-500'
              : 'left-[-100%] fixed'
          }
        >
          <DropDown />
        </div>
        <div
          onClick={handleNav}
          className='block md:hidden'
        >
          {!nav ? <CloseIcon /> : <HamburgerIcon />}
        </div>
      </div>
    </>
  );
};

export default NavBar;
