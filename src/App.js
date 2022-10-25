import logo from './logo.svg';
import './App.css';
import { RouterProvider } from 'react-router-dom';
import { routes } from './Routes/Routes';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { useContext } from 'react';
import { AuthContext } from './Contexts/AuthProvider';

function App() {
  const { theme } = useContext(AuthContext);
  return (
    <div data-theme={theme}>
      <RouterProvider router={routes}></RouterProvider>
      <ToastContainer position='top-center' />
    </div>
  );
}

export default App;
