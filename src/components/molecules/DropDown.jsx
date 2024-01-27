import List from '../atoms/List';
import Logo from '../atoms/Logo';
const DropDown = () => {
  return (
    <>
      <Logo logo='DATA.' />
      <ul className='p-4'>
        <List list='Home' />
        <List list='Company' />
        <List list='Resources' />
        <List list='About' />
        <List list='Contact' />
      </ul>
    </>
  );
};

export default DropDown;
