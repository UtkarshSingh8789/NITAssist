import React from 'react';
import Button from '../components/common/Button.jsx';
import Typewriter from 'typewriter-effect';

const Home = () => {
  return (
    <>
      <div className='bg-white min-h-screen pt-12'>
        <div className="flex  justify-center items-center">

          <div className="flex justify-center text-4xl md:text-7xl font-medium font-sans bg-gradient-to-r from-pink-600 to-blue-600 bg-clip-text text-transparent w-5/6 md:w-full text-center">
            <Typewriter
              onInit={(typewriter) => {
                typewriter.typeString('Unlock Your Potential Together')
                  .pauseFor(2500)
                  .deleteAll()
                  .typeString('Share Knowledge, Grow Together')
                  .pauseFor(2500)
                  .deleteAll()
                  .typeString('Find and Upload Notes Easily')
                  .pauseFor(2500)
                  .start();
              }}
              options={{
                loop: true,
              }}
            />
          </div>
         
        </div>
        <div className="md:text-4xl text-2xl text-[#2d2f31] w-10/12 md:w-7/12 text-center mx-auto flex flex-col mt-16 md:mt-32 justify-center items-center">
            <p>Access and share the best study notes, past 
            papers, and resources from your peers and 
            professors.</p>
          </div>
        <div className='grid grid-cols-1 mt-24'>
          <div className='flex flex-col justify-center items-center'>
            <div className='gap-10 flex flex-col justify-center'>
              <Button active={true} linkto={'/upload'} className={'bg-gradient-to-r from-cyan-600 to-blue-700'}>
                Upload Notes
              </Button>
              <Button active={true} linkto={'/courses'} className={'bg-gradient-to-r from-cyan-600 to-blue-700'}>
                Find Notes
              </Button>
            </div>
          </div>
          {/* <div className='flex justify-center items-center'>
            <img src='https://res.cloudinary.com/dg4jqvgqr/image/upload/v1718809247/collegeMate/j4krjw9p1crgf6jklgps.svg' alt='img loading' className='w-6/12 mr-12'></img>
          </div> */}
        </div>
      </div>
    </>
  );
};

export default Home;