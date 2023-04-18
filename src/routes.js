import { Routes, Route } from 'react-router-dom'
import CorridaDetails from './pages/corrida-details';
import Home from './pages/home';
import Login from './pages/login';
import AreaAtleta from './pages/area-atleta';

export default function MainRoutes() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="corrida-details" element={<CorridaDetails />} />
      <Route path="login" element={<Login />} />
      <Route path="area-atleta" element={<AreaAtleta />} />
    </Routes>
  );
}