import React from 'react';
import { FormButton, FormHeader, FormInput, FormRedirector, FormError } from '.';
import useLogin from '../../Hooks/useLogin';
import useFormData from '../../Hooks/useFormData';
import Loading from '../Loading';
import { LoginOrRegisterProps } from '../../constants/types';

const LoginForm: React.FC<LoginOrRegisterProps> = ({ loginOrRegister, setLoginOrRegister }) => {
  const { login, error, loading } = useLogin();
  const { formData, handleInputChange } = useFormData();
  const { username, password } = formData;

  return (
    <form className="flex flex-col  justify-center items-center">
      {loading ? (
        <Loading />
      ) : (
        <>
          <FormHeader content="Wellcome back to the Todo App!" />
          <FormInput value={username} onChange={(value) => handleInputChange('username', value)} type="text" placeholder="username" />
          <FormInput value={password} onChange={(value) => handleInputChange('password', value)} type="password" placeholder="password" />
          <FormButton
            disabled={username === '' || password === ''}
            onClick={() => {
              login(formData);
            }}
            label="Log-in"
          />
          <div className="flex flex-col w-full min-h-max text-center">
            <FormHeader additionalClasses={['text-sm opacity-50']} content="Not a member yet ?" />
            <FormRedirector loginOrRegister={loginOrRegister} setLoginOrRegister={setLoginOrRegister} />
          </div>
        </>
      )}
      <FormError error={error || ''} />
    </form>
  );
};

export default LoginForm;
