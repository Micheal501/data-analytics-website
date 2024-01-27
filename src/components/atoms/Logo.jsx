/* eslint-disable react/prop-types */
const Logo = (props) => {
  return (
    <>
      <h1 className='w-full text-bold text-3xl text-[#00df9a] p-4'>
        {props.logo}
      </h1>
    </>
  );
};

export default Logo;
