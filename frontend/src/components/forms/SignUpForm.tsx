import { Form, Formik, FormikProps, FormikHelpers } from 'formik';

import { userSignupFormSchema } from '../../utils/schema/userForm';
import InputField from '../InputField';
import Button from '../Button';

type Values = {
  fullname: string;
  username: string;
  email: string;
  password: string;
  confirmPassword: string;
};

const SignUpForm = () => {
  const initialInputValues = {
    fullname: '',
    username: '',
    email: '',
    password: '',
    confirmPassword: '',
  };

  const handleSubmit = async (
    values: Values,
    actions: FormikHelpers<Values>,
  ) => {
    console.log('values:', values);
    console.log('actions:', actions);
    await new Promise((resolve) => setTimeout(resolve, 1000));
  };

  return (
    <Formik
      initialValues={initialInputValues}
      validationSchema={userSignupFormSchema}
      onSubmit={handleSubmit}
    >
      {({ isSubmitting }: FormikProps<Values>) => {
        return (
          <Form className="w-[400px] bg-white rounded-b-lg p-10 shadow-sm shadow-[#979797]">
            <div className="mb-6">
              <InputField
                name="fullname"
                type="text"
                placeholder="Fullname"
                className="w-full pt-2 pb-1 border-b border-black text-sm outline-none"
              />
            </div>
            <div className="mb-6">
              <InputField
                name="username"
                type="text"
                placeholder="Username"
                className="w-full pt-2 pb-1 border-b border-black text-sm outline-none"
              />
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
            <div className="mb-6">
              <InputField
                name="confirmPassword"
                type="password"
                placeholder="Confirm Password"
                className="w-full pt-2 pb-1 border-b border-black text-sm outline-none"
              />
            </div>
            <Button
              type="submit"
              text={isSubmitting ? 'Submitting...' : 'Sign Up'}
              className="bg-r py-3 text-white font-semibold rounded-md w-full hover:opacity-80"
              disabled={isSubmitting}
            />

            <div className="mx-auto mt-3">
              <p className="text-xs font-semibold">
                Already have an account?{' '}
                <Button
                  type="button"
                  text="Login"
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
export default SignUpForm;
