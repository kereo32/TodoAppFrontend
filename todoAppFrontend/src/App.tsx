import './index.css';
import Navbar from './Components/Navbar';
import { Routes, Route, Navigate } from 'react-router-dom';
import { Login, Todo } from './Pages';
import { useSelector } from 'react-redux';
import { StoreState } from './constants/types';

function App() {
  const isAuthenticated = useSelector((state: StoreState) => state.user.isAuthenticated);

  return (
    <div className={`w-screen h-screen bg-vista_blue dark:bg-vista_blue-300`}>
      <Navbar />
      <Routes>
        <Route path="/" element={isAuthenticated ? <Navigate to="/todo" /> : <Login />} />
        <Route path="/todo" element={isAuthenticated ? <Todo /> : <Navigate to="/" />} />
        <Route path="*" element={<Navigate to={isAuthenticated ? '/todo' : '/'} />} />
      </Routes>
    </div>
  );
}

export default App;
