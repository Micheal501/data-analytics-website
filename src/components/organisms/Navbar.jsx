import { useState } from 'react';
import Nav from '../molecules/Nav';
import DropDown from '../molecules/DropDown';
import HamburgerIcon from '../atoms/Icons/Hamburger';
import CloseIcon from '../atoms/Icons/Close';

const NavBar = () => {
  const [nav, setNav] = useState(false);

  const handleNav = () => {
    setNav(!nav);
  };

  return (
    <>
      <div className='flex text-white justify-between items-center px-4 h-24 max-w-[1240px] mx-auto'>
        <Nav />
        <div
          className={
            !nav
              ? 'fixed uppercase left-0 top-0 w-[60%] h-full border-r border-r-slate-900 bg-slate-900'
              : 'left-[-100%] fixed'
          }
        >
          <DropDown />
        </div>
        <div onClick={handleNav}>
          {!nav ? <CloseIcon /> : <HamburgerIcon />}
        </div>
      </div>
    </>
  );
};

export default NavBar;
