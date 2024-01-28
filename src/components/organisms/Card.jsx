import { UserRound } from 'lucide-react';
import Button from '../atoms/Button';
const Card = () => {
  return (
    <>
      <div className='w-full bg-white py-14 px-8 lg:flex h-[32rem] '>
        <div className='block gap-8 md:flex justify-center mx-auto'>
          <div className='flex bg-slate-200 flex-col mx-auto items-center border shadow-xl py-4 my-6 hover:scale-105 duration-300 rounded-lg w-96'>
            <UserRound />
            <h2 className='font-bold text-2xl py-2'>Single user</h2>
            <p className='text-3xl font-bold'>$150</p>
            <div className='text-xl w-full text-center'>
              <p className='border-b border-slate-500 mx-8 py-2'>
                500 GB storage
              </p>
              <p className='border-b border-slate-500  mx-8 py-2'>
                1 Granted User
              </p>
              <p className='border-b border-slate-500  mx-8 py-2'>
                Send up to 2 GB
              </p>
            </div>
            <div className='pt-6'>
              <Button titleButton='start trial' />
            </div>
          </div>
          <div className='flex flex-col mx-auto my-6 w-96 rounded-lg justify-center items-center border shadow-xl py-4 hover:scale-105 duration-300'>
            <UserRound />
            <h2 className='font-bold text-2xl py-2'>Single user</h2>
            <p className='text-3xl font-bold'>$150</p>
            <div className='text-xl w-full text-center'>
              <p className='border-b border-slate-500 mx-8 py-2'>
                500 GB storage
              </p>
              <p className='border-b border-slate-500  mx-8 py-2'>
                1 Granted User
              </p>
              <p className='border-b border-slate-500  mx-8 py-2'>
                Send up to 2 GB
              </p>
            </div>
            <div className='pt-6'>
              <Button titleButton='start trial' />
            </div>
          </div>
          <div className='flex flex-col mx-auto w-96 my-6 rounded-lg justify-center items-center border shadow-xl py-4 hover:scale-105 duration-300'>
            <UserRound />
            <h2 className='font-bold text-2xl py-2'>Single user</h2>
            <p className='text-3xl font-bold'>$150</p>
            <div className='text-xl w-full text-center'>
              <p className='border-b border-slate-500 mx-8 py-2'>
                500 GB storage
              </p>
              <p className='border-b border-slate-500  mx-8 py-2'>
                1 Granted User
              </p>
              <p className='border-b border-slate-500  mx-8 py-2'>
                Send up to 2 GB
              </p>
            </div>
            <div className='pt-6'>
              <Button titleButton='start trial' />
            </div>
          </div>
        </div>
      </div>
      {/* <UserRound /> */}
    </>
  );
};

export default Card;
