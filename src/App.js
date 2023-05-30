import React from 'react';
import LoginPage from './LoginPage';
import { Route, Routes } from 'react-router-dom';
import ForgotPassword from './ForgotPassword';

function App(props) {
  return (
    <>
    <LoginPage/>
    <Routes>
      <Route path='/' element={<ForgotPassword/>}/>
    </Routes>
    </>
  );
}

export default App;