"use client";

import { useState } from "react";
import SignupStepOne from "./_components/SignupStepOne";
import SignupStepTwo from "./_components/SignupStepTwo";

export const Signup = () => {
  const [step, setStep] = useState(1);
  const [userEmail, setUserEmail] = useState("");

  return (
    <div className="flex h-screen w-screen">
      {/* Form */}
      <div className="flex flex-col justify-center w-1/2 px-20">
        {step === 1 ? (
          <SignupStepOne
            onNext={(email) => {
              setUserEmail(email);
              setStep(2);
            }}
          />
        ) : (
          <SignupStepTwo email={userEmail} />
        )}
      </div>

      {/* Zurag */}
      <div className="w-1/2 h-full p-4">
        <img
          src="https://res.cloudinary.com/du9etdqhq/image/upload/v1740387500/food-delivery/ulfoy8dmy50dw5iqktaz.png"
          alt="Food delivery illustration"
          className="w-full h-full object-cover border-4 border-gray-200 rounded-lg"
        />
      </div>
    </div>
  );
};

export default Signup;
