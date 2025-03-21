"use client";

import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Formik, Form, Field, ErrorMessage } from "formik";
import { useRouter } from "next/navigation";
import { toast } from "sonner";
import axios from "axios";
import * as Yup from "yup";

const stepTwoSchema = Yup.object().shape({
  password: Yup.string()
    .min(6, "Password must be at least 6 characters")
    .required("Password is required"),
  confirmPassword: Yup.string()
    .oneOf([Yup.ref("password"), ""], "Passwords must match")
    .required("Confirm password is required"),
});

interface SignupStepTwoProps {
  email: string;
}

export const SignupStepTwo = ({ email }: SignupStepTwoProps) => {
  const router = useRouter(); // Get the router instance

  const handleSubmit = async (values: { password: string }) => {
    try {
      await axios.post("http://localhost:4000/users", {
        email,
        password: values.password,
      });

      toast.success("Account created successfully! Redirecting to login...");

      // Redirect to login after 1.5 seconds
      setTimeout(() => {
        router.push("/login");
      }, 1500);
    } catch (error: any) {
      toast.error(`Error: ${error.response?.data?.message || error.message}`);
    }
  };

  return (
    <div>
      <h2 className="text-3xl font-semibold">Set your password</h2>
      <p className="mt-2 text-gray-500">
        Secure your account with a strong password.
      </p>
      <Formik
        initialValues={{ password: "", confirmPassword: "" }}
        validationSchema={stepTwoSchema}
        onSubmit={handleSubmit}
      >
        {({ values, handleChange, handleBlur }) => (
          <Form className="mt-6">
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
            <div className="mb-4">
              <Field
                name="confirmPassword"
                type="password"
                as={Input}
                placeholder="Confirm your password"
                value={values.confirmPassword}
                onChange={handleChange}
                onBlur={handleBlur}
              />
              <ErrorMessage
                name="confirmPassword"
                component="div"
                className="text-red-500 mt-1"
              />
            </div>
            <Button type="submit" className="mt-4 w-full" variant="secondary">
              Sign Up
            </Button>
          </Form>
        )}
      </Formik>
    </div>
  );
};

export default SignupStepTwo;
