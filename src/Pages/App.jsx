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
import AdminPage from './AdminPage'
import CarsList from '../Components/Car/CarList';
import BlackjackLog from '../Components/BlackJack/BlackjackLog';
import HighLifeBJ from '../Components/HighlifeBJ/HighLifeBJ';
import Chrono from '../Components/Chrono/Chrono'
import TrafficLightPage from './TrafficLightPage'
import DemoModePage from './DemoModePage'

import './App.css';
import { enableMapSet } from 'immer';


const router = createBrowserRouter(createRoutesFromElements(
  <Route>
    <Route path='/' element={<Pages/>} />
    <Route path='/admin' element={<AdminPage/>}/>
    <Route path='/chop-shop' element={<CarsList/>} />
    <Route path='/blackjack-log' element={<BlackjackLog/>} />
    <Route path='/secret' element={<HighLifeBJ/>} />
    <Route path='/chrono' element={<Chrono/>}/>
    <Route path='/traffic-light' element={<TrafficLightPage/>}/>
    <Route path='/traffic-light/demo' element={<DemoModePage/>}/>

  </Route>

));

function App() {
  enableMapSet()
  return (
    <RouterProvider router={router}/>
  );
}

export default App;
