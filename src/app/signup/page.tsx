"use client";

import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { useState } from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";
import { useRouter } from "next/navigation";
import axios from "axios";
import { toast } from "sonner";

type SignupInfoTypes = {
  email: string;
  password: string;
};

export const Signup = () => {
  const { push } = useRouter();

  const handleSubmit = async (values: SignupInfoTypes) => {
    try {
      const response = await axios.post(
        `http://localhost:4000/users/signup`,
        values
      );

      toast.success("Account created successfully!");
      push("/login");
    } catch (error: any) {
      toast.error(`Error: ${error.response?.data?.message || error.message}`);
    }
  };

  return (
    <div className="flex h-screen w-screen">
      {/* Left Side - Signup Form */}
      <div className="flex flex-col justify-center w-1/2 px-20">
        <h2 className="text-3xl font-semibold">Create your account</h2>
        <p className="mt-2 text-gray-500">
          Sign up to explore your favorite dishes.
        </p>

        <Formik
          initialValues={{ email: "", password: "" }}
          onSubmit={handleSubmit}
        >
          {({ values, handleChange, handleBlur }) => (
            <Form className="mt-6">
              <div className="mb-4">
                <Field
                  name="email"
                  type="email"
                  as={Input}
                  placeholder="Enter your email address"
                  value={values.email}
                  onChange={handleChange}
                  onBlur={handleBlur}
                />
                <ErrorMessage
                  name="email"
                  component="div"
                  className="text-red-500 mt-1"
                />
              </div>

              <div className="mb-4">
                <Field
                  name="password"
                  type="password"
                  as={Input}
                  placeholder="Create a password"
                  value={values.password}
                  onChange={handleChange}
                  onBlur={handleBlur}
                />
                <ErrorMessage
                  name="password"
                  component="div"
                  className="text-red-500 mt-1"
                />
              </div>

              <Button type="submit" className="mt-4 w-full" variant="secondary">
                Let's Go
              </Button>
            </Form>
          )}
        </Formik>

        <p className="mt-4 text-sm">
          Already have an account?{" "}
          <a href="/login" className="text-blue-600 hover:underline">
            Log in
          </a>
        </p>
      </div>

      {/* Right Side - Image */}
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
