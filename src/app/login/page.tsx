"use client";

import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { useState } from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";
import { userSchema } from "@/utils/loginValidation";
import { useRouter } from "next/navigation";
import axios from "axios";
import { toast } from "sonner";

type LoginInfoTypes = {
  email: string;
  password: string;
};

export const Login = () => {
  const { push } = useRouter();

  const handleSubmit = async (values: LoginInfoTypes) => {
    try {
      const response = await axios.post(
        `http://localhost:4000/users/login`,
        values
      );

      if (response.data.user.role === "ADMIN") {
        push("/admin");
      }
    } catch (error: any) {
      toast.error(`Error: ${error.response?.data?.message || error.message}`);
    }
  };

  return (
    <div className="flex h-screen w-screen items-center">
      {/* Left Side - Login Form */}
      <div className="flex flex-col justify-center w-1/2 px-60">
        <div className="w-[415px] h-[475px]">
          <h2 className="text-3xl font-semibold">Log in</h2>
          <p className="mt-2 text-gray-500">
            Log in to enjoy your favorite dishes.
          </p>

          <Formik
            initialValues={{ email: "", password: "" }}
            validationSchema={userSchema}
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
                    placeholder="Password"
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

                <a href="#" className="text-sm text-blue-600 hover:underline">
                  Forgot password?
                </a>

                <Button
                  type="submit"
                  className="mt-4 w-full"
                  variant="secondary"
                >
                  Let's Go
                </Button>
              </Form>
            )}
          </Formik>

          <p className="mt-4 text-sm">
            Don’t have an account?{" "}
            <a href="#" className="text-blue-600 hover:underline">
              Sign up
            </a>
          </p>
        </div>
      </div>

      {/* Right Side - Image */}
      <div className="w-1/2 h-[95%] mr-6">
        <img
          src="https://res.cloudinary.com/du9etdqhq/image/upload/v1740387500/food-delivery/ulfoy8dmy50dw5iqktaz.png"
          alt="Food delivery illustration"
          className="w-full h-[100%] object-cover rounded-lg"
        />
      </div>
    </div>
  );
};

export default Login;
