import { ReactTyped } from 'react-typed';
import Button from '../atoms/Button';

const HeroSection = () => {
  return (
    <>
      <div className='text-white'>
        <div className='max-w-[800px] mt-[-96px] w-full h-screen mx-auto text-center justify-center flex flex-col'>
          <p className='text-[#00df9a] font-bold p-2 '>
            GROWING WITH DATA ANALYTICS
          </p>
          <h1 className='font-bold md:text-7xl md:py-6 sm:text-6xl text-4xl'>
            GROW WITH DATA
          </h1>
          <div className='md:text-5xl sm:text-4xl text-xl font-bold flex justify-center py-2'>
            <p className='mx-2'>Fast, flexible, financing, for </p>
            <ReactTyped
              strings={['BTB', 'BTC', 'SASS']}
              typeSpeed={100}
              backSpeed={100}
              loop
              className='md:text-5xl sm:text-4xl text-xl font-bold'
            />
          </div>
          <p className='md:text-2xl font-semibold text-slate-400'>
            Monitor your data analytics to increase revenue for BTB, BTC, SASS
            platforms
          </p>
          <div className='mt-8'>
            <Button titleButton='Get Started' />
          </div>
        </div>
      </div>
    </>
  );
};

export default HeroSection;
