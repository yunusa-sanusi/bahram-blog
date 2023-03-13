import { useState } from 'react';

import LoginForm from '../components/forms/LoginForm';
import SignUpForm from '../components/forms/SignUpForm';
import Button from '../components/Button';
import { useFormViewContext } from '../contexts/FormViewContext';

const Auth = () => {
  const { view, handleFormView } = useFormViewContext();

  return (
    <section className="h-screen flex flex-col justify-center items-center">
      <div className="w-[400px] bg-r text-white rounded-t-lg flex flex-row shadow-sm shadow-[#979797]">
        <Button
          type="button"
          text="Login"
          className={`font-semibold w-full py-3 text-center ${
            view === 'login'
              ? 'bg-transparent text-white hover:bg-white hover:text-hover'
              : 'bg-white text-hover hover:bg-r hover:text-white'
          }`}
          handleClick={handleFormView}
        />
        <Button
          type="button"
          text="Sign Up"
          className={`font-semibold w-full py-3 text-center ${
            view === 'signup'
              ? 'bg-transparent text-white hover:bg-white hover:text-hover'
              : 'bg-white text-hover hover:bg-r hover:text-white'
          }`}
          handleClick={handleFormView}
        />
      </div>
      {view === 'login' ? <LoginForm /> : <SignUpForm />}
    </section>
  );
};
export default Auth;
