import Logo from '../atoms/Logo';
import List from '../atoms/List';
const Nav = () => {
  return (
    <>
      <Logo logo='DATA.' />
      <ul className='md:flex hidden'>
        <List list='Home' />
        <List list='Company' />
        <List list='Resources' />
        <List list='About' />
        <List list='Contact' />
      </ul>
    </>
  );
};
export default Nav;
