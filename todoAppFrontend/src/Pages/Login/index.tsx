import { useState } from 'react';
import LoginForm from '../../Components/Form/LoginForm';
import RegisterForm from '../../Components/Form/RegisterForm';
const Login: React.FC = () => {
  const [loginOrRegister, setLoginOrRegister] = useState<'login' | 'register'>('login');

  return (
    <div className="flex flex-nowrap w-full h-full justify-center items-center">
      <div className="flex flex-col w-[30%] xs:w-full h-[50%] xs:h-full justify-center items-center bg-silver_lake_blue-800 dark:bg-silver_lake_blue-300 shadow-2xl rounded-lg">
        {loginOrRegister === 'login' ? (
          <LoginForm loginOrRegister={loginOrRegister} setLoginOrRegister={setLoginOrRegister} />
        ) : (
          <RegisterForm loginOrRegister={loginOrRegister} setLoginOrRegister={setLoginOrRegister} />
        )}
      </div>
    </div>
  );
};

export default Login;
