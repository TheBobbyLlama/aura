import { BrowserRouter, Route, Routes, Link } from 'react-router-dom';
//import Dashboard from '../components/dashboard';
import Login from '../components/Login/LoginPage';
import Reset from '../components/Reset/Reset';

const AppRoutes = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="reset-password" element={<Reset />} />
      </Routes>
    </BrowserRouter>
  );
};

export default AppRoutes;