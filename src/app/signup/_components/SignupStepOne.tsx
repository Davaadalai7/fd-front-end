"use client";

import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";

const stepOneSchema = Yup.object().shape({
  email: Yup.string().email("Invalid email").required("Email is required"),
});

interface SignupStepOneProps {
  onNext: (email: string) => void;
}

export const SignupStepOne = ({ onNext }: SignupStepOneProps) => {
  return (
    <div>
      <h2 className="text-3xl font-semibold">Create your account</h2>
      <p className="mt-2 text-gray-500">
        Sign up to explore your favorite dishes.
      </p>
      <Formik
        initialValues={{ email: "" }}
        validationSchema={stepOneSchema}
        onSubmit={(values) => onNext(values.email)}
      >
        {({ values, handleChange, handleBlur }) => (
          <Form className="mt-6 ">
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
            <Button type="submit" className="mt-4 w-full" variant="secondary">
              Next
            </Button>
          </Form>
        )}
      </Formik>
    </div>
  );
};

export default SignupStepOne;
