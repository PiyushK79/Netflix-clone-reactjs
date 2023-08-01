import React from 'react'
import SavedShows from '../components/SavedShows';

const Account = () => {
  return (
    <>
    <div className='w-full text-white'>
    <img className='w-full h-[400px] object-cover'  src="https://assets.nflxext.com/ffe/siteui/vlv3/5eab1b22-c5ea-48b0-8ef4-862b3fa6df2c/4af43238-4df9-4946-9920-a4bd55f2e50b/IN-en-20230724-popsignuptwoweeks-perspective_alpha_website_small.jpg" alt="/" />
    <div className='bg-black/60 fixed top-0 left-0 w-full h-[550px]'></div>
      <div className='absolute top-[20%] p-4 md:p-8'>
        <h1 className='text-3xl md:text-5xl font-bold'>My Shows</h1>
    </div>
    </div>
    <SavedShows />
    </>
  );
};

export default Account;
