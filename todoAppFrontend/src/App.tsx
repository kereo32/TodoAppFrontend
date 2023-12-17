import './index.css';
import Navbar from './Components/Navbar';
import { Routes, Route } from 'react-router-dom';
import { Login, Todo } from './Pages';
import { useSelector } from 'react-redux';
import { StoreState } from './constants/types';

function App() {
  const isAuthenticated = useSelector((state: StoreState) => state.user.isAuthenticated);

  console.log(isAuthenticated, 'xd');
  return (
    <div className={`w-screen h-screen bg-vista_blue dark:bg-vista_blue-300`}>
      <Navbar />
      {isAuthenticated ? (
        <Routes>
          <Route path="/" element={<Todo />} />
        </Routes>
      ) : (
        <Routes>
          <Route path="/" element={<Login />} />
        </Routes>
      )}
    </div>
  );
}

export default App;
