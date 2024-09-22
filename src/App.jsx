import React from 'react';
import MainLayout from './layouts/MainLayout';
import HomePage from './pages/HomePage';
import NotFoundPage from "./pages/NotFoundPage.jsx";
import LoginPage from "./pages/LoginPage.jsx";
import PrivateRoute from './components/PrivateRoute.jsx';
import { AuthProvider } from './auth/AuthProvider';

import {
  Route,
  createBrowserRouter,
  createRoutesFromElements,
  RouterProvider,
} from 'react-router-dom';
import RegisterPage from "./pages/RegisterPage.jsx";
import ArticlesPage from "./pages/ArticlesPage.jsx";


const App = () => {
  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route path='/' element={<MainLayout />}>
        <Route index element={<HomePage />} />
        <Route path='/login' element={<LoginPage />} />
        <Route path='/register' element={<RegisterPage />} />
        <Route path='/articles' element={<ArticlesPage />} />
        <Route path='/articles/create' element={<PrivateRoute element={<HomePage />} />} />
        <Route path='*' element={<NotFoundPage />} />
      </Route>
    )
  );

  return (
    <AuthProvider>
      <RouterProvider router={router} />
    </AuthProvider>
  );
};

export default App;
