import React from 'react';

import { createRoot } from "react-dom/client";
import {
  createBrowserRouter,
  RouterProvider,
  Route,
  Link,
  createRoutesFromElements,
} from "react-router-dom";

import Pages from './Pages';
import CarsList from '../Components/Car/CarList';
import BlackjackLog from '../Components/BlackJack/BlackjackLog';
import HighLifeBJ from '../Components/HighlifeBJ/HighLifeBJ'

import './App.css';


const router = createBrowserRouter(createRoutesFromElements(
  <Route>
    <Route path='/' element={<Pages/>} />
    <Route path='/chop-shop' element={<CarsList/>} />
    <Route path='/blackjack-log' element={<BlackjackLog/>} />
    <Route path='/secret' element={<HighLifeBJ/>} />
  </Route>

));

function App() {
  return (
    <RouterProvider router={router}/>
  );
}

export default App;
