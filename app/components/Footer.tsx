import React from 'react';
import MagicButton from './ui/MagicButton';
import { FaLocationArrow } from 'react-icons/fa6';
import { socialMedia } from '@/data';

const Footer = () => {
  return (
    <footer className='w-full pb-10 mb-[100px] md:mb-5' id='contact'>
      {/* <div className='w-full absolute left-0 -bottom-72'>
        <img
          src='/footer-grid.svg'
          alt='grid'
          className='w-full h-full opacity-50 overflow-y-hidden -z-10'
        />
      </div> */}

      <div className='flex flex-col items-center'>
        <h1 className='heading lg:max-w-[45vw] '>
          Ready to take <span className='text-red-400'>your</span> digital
          presence to the next level?
        </h1>
        <p className='text-white-200 md:mt-10 my-5 text-center'>
          Reach out to me today and let&apos;s discuss how I can help you
          achieve your goals.
        </p>
        <a href='mailto:thasquirrie@gmail.com'>
          <MagicButton
            title="Let's get in touch"
            icon={<FaLocationArrow />}
            position={'right'}
          />
        </a>
      </div>
      <div className='flex mt-16 md:flex-row flex-col justify-between items-center px-3'>
        <p className='md:text-base text-sm md:font-normal font-light'>
          Copyright © 2024 Sodiq
        </p>
        <div className='flex items-center md:gap-3 gap-6'>
          {socialMedia.map((profile) => (
            <a
              key={profile.id}
              className='w-10 h-10 cursor-pointer flex justify-center items-center backdrop-filter backdrop-blur-lg saturate-150 bg-opacity-75 bg-black-200 rounded-lg border border-black-300'
              href={profile.link}
              target='_blank'
              rel='noopener noreferrer'
            >
              <img src={profile.img} alt={profile.img} width={20} height={20} />
            </a>
          ))}
        </div>
      </div>
    </footer>
  );
};

export default Footer;
