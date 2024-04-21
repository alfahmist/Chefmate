import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'

import CreateRecipe from './pages/create_recipe/CreateRecipe'
import Detail from './pages/detail/Detail'
import Favorite from './pages/favorite/Favorite'
import Home from './pages/home/Home'
import Login from './pages/login/Login'
import Register from './pages/register/Register'

import { createBrowserRouter, RouterProvider } from 'react-router-dom'

const router = createBrowserRouter([
  {
    path: '/',
    element: <Home />
  },
  {
    path: '/favorite',
    element: <Favorite />
  },
  {
    path: '/detail/:params',
    element: <Detail />
  },
  {
    path: '/create-recipe',
    element: <CreateRecipe />
  },
  {
    path: '/login',
    element: <Login />
  },
  {
    path: '/register',
    element: <Register />
  }
])

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
