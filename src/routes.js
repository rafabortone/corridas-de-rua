import {Routes, Route } from 'react-router-dom'
import CorridaDetails from './pages/corrida-details';
import Home from './pages/home';

export default function MainRoutes() {
  return (
    <Routes>
      <Route path="/" element={<Home/>}/>
      <Route path="corrida-details" element={<CorridaDetails/>}/>
    </Routes>
  );
}