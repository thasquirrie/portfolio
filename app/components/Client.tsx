import React from 'react';
import { InfiniteMovingCards } from './ui/InfiniteMovingCards';
import { companies, testimonials } from '@/data';

const Clients = () => {
  return (
    <div id='testimonials' className='py-20 z-0'>
      <h1 className='heading'>
        Kind words from{' '}
        <span className='text-red-400'>peers and satisfied customers</span>
      </h1>

      <div className='h-[50vh] md:h-[30rem] rounded-md flex flex-col antialiased items-center overflow-hidden max-lg:mt-10'>
        <InfiniteMovingCards
          items={testimonials}
          direction='right'
          speed='slow'
        />

        <div className='flex flex-wrap items-center justify-center gap-4 md:gap-16 max-lg:mt-16'>
          {companies.map(({ id, img, name }) => (
            <div
              key={id}
              className='flex md:max-w-60 max-w-32 gap-2 items-center justify-center'
            >
              <img src={img} alt={img} className='md:w-24 w-20' />

              {/* <img src={nameImg} alt={nameImg} className='md:w-24 w-20' /> */}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Clients;
