import React from 'react';
import { FormButton, FormHeader, FormInput, FormRedirector, FormError } from '.';
import useFormData from '../../Hooks/useFormData';
import useLogin from '../../Hooks/useLogin';
import { LoginOrRegisterProps } from '../../constants/types';
import Loading from '../Loading';

const RegisterForm: React.FC<LoginOrRegisterProps> = ({ loginOrRegister, setLoginOrRegister }) => {
  const { formData, handleInputChange } = useFormData();
  const { username, password } = formData;
  const { register, error, loading } = useLogin();
  return (
    <form className="flex flex-col  justify-center items-center">
      {loading ? (
        <Loading />
      ) : (
        <>
          <FormHeader content="First time around here? " />
          <FormHeader additionalClasses={['font-bold']} content="Join us!" />
          <FormInput value={username} onChange={(value) => handleInputChange('username', value)} type="text" placeholder="username" />
          <FormInput value={password} onChange={(value) => handleInputChange('password', value)} type="password" placeholder="password" />
          <FormButton
            onClick={() => {
              register(formData);
            }}
            disabled={username === '' || password === ''}
            label="Register"
          />
          <div className="flex flex-col w-full min-h-max text-center">
            <FormHeader additionalClasses={['text-sm opacity-50']} content="Already a member ?" />
            <FormRedirector loginOrRegister={loginOrRegister} setLoginOrRegister={setLoginOrRegister} />
          </div>
        </>
      )}
      <FormError error={error || ''} />
    </form>
  );
};

export default RegisterForm;
