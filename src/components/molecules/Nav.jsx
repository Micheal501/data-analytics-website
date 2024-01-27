import Logo from '../atoms/Logo';
import List from '../atoms/List';
import Icon from '../atoms/Icon';

const Nav = () => {
  return (
    <>
      <Logo logo='Micheal Owen' />
      <ul className='flex'>
        <List list='Home' />
        <List list='Company' />
        <List list='Resources' />
        <List list='About' />
        <List list='Contact' />
      </ul>
      <Icon />
    </>
  );
};
export default Nav;
