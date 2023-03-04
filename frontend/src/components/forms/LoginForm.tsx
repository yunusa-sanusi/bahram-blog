import { Formik, Form, FormikProps, FormikHelpers } from 'formik';

import Button from '../Button';
import InputField from '../InputField';
import { userLoginFormSchema } from '../../utils/schema/userForm';
import GoogleIconSvg from '../GoogleIconSvg';

type Values = {
  email: string;
  password: string;
};

const LoginForm = () => {
  const initialFormValues = {
    email: '',
    password: '',
  };

  const handleSubmit = async (
    values: Values,
    actions: FormikHelpers<Values>,
  ) => {
    console.log('values:', values);
    console.log('actions:', actions);
  };

  return (
    <Formik
      initialValues={initialFormValues}
      validationSchema={userLoginFormSchema}
      onSubmit={handleSubmit}
    >
      {({ isSubmitting }: FormikProps<Values>) => {
        return (
          <Form className="w-[400px] bg-white rounded-b-lg p-10 shadow-sm shadow-[#979797]">
            <div>
              <button className="rounded-md w-full border border-black py-2 flex justify-center items-center hover:text-hover text-sm shadow-sm shadow-[#979797] shadow-sm shadow-[#979797]">
                <GoogleIconSvg /> Sign In with Google
              </button>
              <div className="my-4 flex justify-center items-center">
                <div className="w-full h-[0.5px] bg-black" />
                <p className="px-1">or</p>
                <div className="w-full h-[0.5px] bg-black" />
              </div>
            </div>

            <div className="mb-6">
              <InputField
                name="email"
                type="email"
                placeholder="Email"
                className="w-full pt-2 pb-1 border-b border-black text-sm outline-none"
              />
            </div>

            <div className="mb-6">
              <InputField
                name="password"
                type="password"
                placeholder="Password"
                className="w-full pt-2 pb-1 border-b border-black text-sm outline-none"
              />
            </div>

            <Button
              type="submit"
              text={isSubmitting ? 'Logging in...' : 'Login'}
              className="bg-r py-3 mt-3 text-white font-semibold rounded-md w-full hover:opacity-80"
              disabled={isSubmitting}
            />

            <div className="mx-auto mt-3">
              <p className="text-xs font-semibold">
                Dont't have an account?{' '}
                <Button
                  type="button"
                  text="Sign Up"
                  className="underline text-hover"
                />
              </p>
            </div>
          </Form>
        );
      }}
    </Formik>
  );
};
export default LoginForm;
