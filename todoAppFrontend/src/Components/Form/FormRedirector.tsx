import React from 'react';
import { FormHeader } from './index';

type FormRedirectorProps = {
  loginOrRegister: 'login' | 'register';
  setLoginOrRegister?: React.Dispatch<React.SetStateAction<'login' | 'register'>>;
};

const FormRedirector: React.FC<FormRedirectorProps> = ({ loginOrRegister, setLoginOrRegister }) => {
  return (
    <>
      <button
        onClick={(e: React.MouseEvent<HTMLElement>) => {
          e.preventDefault();
          setLoginOrRegister && setLoginOrRegister((prev) => (prev === 'login' ? 'register' : 'login'));
        }}
      >
        <FormHeader additionalClasses={['font-bold underline']} content={loginOrRegister == 'login' ? 'Register now !' : 'Log-in!'} />
      </button>
    </>
  );
};

export default FormRedirector;
