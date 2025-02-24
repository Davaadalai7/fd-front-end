'use client';

import React from 'react';
import { EmailInput } from './ui/Email-Input';
import { Input } from '@/components/ui/input';

const SignupComponent = () => {
  return (
    <div className="flex h-screen">
      {/* Left Side */}
      <div className="flex flex-col justify-center p-8 w-1/2">
        <h1 className="text-3xl font-bold mb-4">Create your account</h1>
        <p className="text-lg text-gray-600">Sign up to explore your favorite dishes.</p>
        <Input/>
      </div>

      {/* Right Side */}
      <div
        className="w-1/2 bg-cover bg-center rounded-xl"
        style={{
          backgroundImage: `url('https://res.cloudinary.com/du9etdqhq/image/upload/v1740387500/food-delivery/ulfoy8dmy50dw5iqktaz.png')`,
        }}
      ></div>
    </div>
  );
};

export default SignupComponent;
