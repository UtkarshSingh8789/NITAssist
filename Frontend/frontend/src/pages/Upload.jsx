import React from 'react';
import Button from "../components/common/Button.jsx";
const Upload = () => {
  return (
    <div className='flex flex-col items-center justify-center min-h-screen'>
      {/* Blinking Notice */}
      <div className='text-center mb-6'>
        <p className='text-red-500 animate-blink text-lg font-medium'>
          Preferably, upload files using a drive link for better accessibility.
        </p>
      </div>

      {/* Note */}
      <div className='text-center mb-6'>
        <p className='text-lg font-medium text-gray-700'>
          Please choose how you want to upload your files:
        </p>
        
      </div>

      {/* Buttons */}
      <div className='grid md:grid-cols-1 sm:grid-cols-2 gap-16 max-w-4xl'>
        <Button
          active={true}
          linkto={"/upload/uploadUsingDriveLink"}
          className="p-8 sm:p-12 md:p-16 w-full"
          style={{ backgroundColor: 'blue', color: 'white' }} // added color: 'white' for better contrast
        >
          Upload using Drive Link
        </Button>
        <Button
          active={true}
          linkto={"/upload/uploadLocalfile"}
          className="p-8 sm:p-12 md:p-16 w-full"
          style={{ backgroundColor: 'blue', color: 'white' }} // added color: 'white' for better contrast
        >
          Upload Local File
        </Button>
      </div>
    </div>
  );
}
export default Upload;