'use client';

import React from 'react';
// import { useRouter } from 'next/router';

const SignupComponent = () => {
//   const router = useRouter();

//   const handleBackClick = () => {
//     router.back();  // Navigates back to the previous page
  };

  return (
    <div className="flex h-screen">
      {/* Left Side */}
      <div className="flex flex-col justify-start p-8 w-1/2">
        <button 
          onClick={handleBackClick} 
          className="text-blue-500 mb-4"
        >
          &#8592; Back
        </button>
        <h1 className="text-3xl font-bold mb-4">Create your account</h1>
        <p className="text-lg text-gray-600">Sign up to explore your favorite dishes.</p>
      </div>

      {/* Right Side */}
      <div className="w-1/2 bg-cover bg-center" 
           style={{ backgroundImage: `url('https://res.cloudinary.com/du9etdqhq/image/upload/v1739964999/Frame_1321316047_qcw19i.png')` }}></div>
    </div>
  );
// };

export default SignupComponent;
