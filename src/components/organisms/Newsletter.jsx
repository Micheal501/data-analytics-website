import Input from '../atoms/Input';
import Button from '../atoms/Button';

const Newsletter = () => {
  return (
    <>
      <div className='md:flex md:items-center pt-20 pr-4 pl-4 h-[30rem] text-white bg-slate-900 md:p-20'>
        <div className='w-full flex flex-col md:w-1/2 py-4 mr-24 text-center md:text-left'>
          <h1 className='text-2xl font-bold md:text-3xl'>
            Want tips & tricks to optimize your flow?
          </h1>
          <p className='text-lg'>
            Sign up to our newsletter and stay up to date
          </p>
        </div>
        <div className='w-full md:w-1/2 py-4 flex-col md:flex md:flex-row md:gap-4 justify-center mt-12 md:mt-0'>
          <Input />
          <div className='h-14 py-4 md:py-0 md:text-left text-center '>
            <Button titleButton='Notify Me' />
          </div>
        </div>
      </div>
    </>
  );
};

export default Newsletter;
