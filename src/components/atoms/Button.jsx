/* eslint-disable react/prop-types */
const Button = (props) => {
  return (
    <>
      <button className='bg-[#00df9a] w-44 font-medium h-12 rounded-md text-slate-900 mx-auto'>
        {props.titleButton}
      </button>
    </>
  );
};

export default Button;
