import {Route, Routes} from 'react-router-dom';
import { ThemeProvider } from 'styled-components';
import { Home } from './pages/Home';
import { ProjectDetail } from './pages/ProjectDetail';
import { theme } from './styles/theme';

export const Router = () => {
  return (
    <Routes>
      <Route path="/"  element={<Home/>}/>
      <Route path="/project-detail" element={<ProjectDetail/>}/>
    </Routes>
  )
}