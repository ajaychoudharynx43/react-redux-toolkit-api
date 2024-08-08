import 'bootstrap/dist/css/bootstrap.min.css';
import React from 'react';
import './App.css';
import Product from './components/Product';
import {createBrowserRouter, createRoutesFromElements, RouterProvider, Route} from 'react-router-dom';
import Dashboard from './components/Dashboard';
import RootLayout from './components/RootLayout';
import Cart from './components/Cart';

function App() {

  const router = createBrowserRouter(createRoutesFromElements(
    <Route path='/' element={<RootLayout/>}>
      <Route index element={<Dashboard/>}></Route>
      <Route path="/cart" element={<Cart/>}></Route>
    </Route>
  ))

  return (
      <>
      <div>
      <RouterProvider router={router}/>
      </div>
      
      </>
  );
}

export default App;
