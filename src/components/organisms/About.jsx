import Button from '../atoms/Button';

const About = () => {
  return (
    <>
      <div className='md:flex md:justify-center md:items-center bg-white py-12 h-[50rem] md:h-[40rem]'>
        <div className='w-full flex justify-center md:w-1/2 h-[23rem]'>
          <img
            src='/public/images/data.jpg'
            alt='data analytics'
            className='w-full h-[26rem]'
          />
        </div>
        <div className='w-full md:w-1/2 p-2 flex flex-col'>
          <h2 className='py-2 text-[#3dc499] font-semibold text-xl md:text-2xl lg:text-3xl '>
            Analytics Dashboard
          </h2>
          <h1 className='font-bold text-xl'>Manage Data Analytics Centrally</h1>
          <p className='text-md'>
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Id veniam
            assumenda ducimus cupiditate iste excepturi omnis illo fugiat error
            saepe vero nisi cum sint rerum porro, enim reiciendis neque
            laudantium ullam blanditiis architecto et minima! Mollitia veritatis
            animi ullam maxime?
          </p>
          <div className='text-center md:text-left py-6'>
            <Button titleButton='Get Started' />
          </div>
        </div>
      </div>
    </>
  );
};

export default About;
