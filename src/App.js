import React, { useEffect } from 'react';
import { Routes, Route, useNavigate } from 'react-router-dom';
import Login from './components/Login';
import Home from './container/Home';
import { fetchUser } from './utils/fetchUser';

const AuthGuard = ({ children }) => {
  const navigate = useNavigate();
  const user = fetchUser();

  useEffect(() => {
    if (!user) navigate('/login');
  }, [navigate, user]);

  return children;
};

const App = () => {
  return (
    <Routes>
      <Route path='login' element={<Login />} />
      <Route path='/*' element={<AuthGuard><Home /></AuthGuard>} />
    </Routes>
  );
};

export default App;
