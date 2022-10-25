import logo from './logo.svg';
import './App.css';
import { RouterProvider } from 'react-router-dom';
import { routes } from './Routes/Routes';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { useContext, useEffect } from 'react';
import { AuthContext } from './Contexts/AuthProvider';
import AOS from 'aos';
import 'aos/dist/aos.css';

function App() {
  const { theme } = useContext(AuthContext);

  useEffect(() => {
    AOS.init();
  }, [])

  return (
    <div data-theme={theme}>
      <RouterProvider router={routes}></RouterProvider>
      <ToastContainer position='top-center' />
    </div>
  );
}

export default App;
