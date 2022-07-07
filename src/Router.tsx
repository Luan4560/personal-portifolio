import {Route, Routes} from 'react-router-dom';
import { ThemeProvider } from 'styled-components';
import { Home } from './pages/Home';
import { theme } from './styles/theme';

export const Router = () => {
  return (
    <Routes>
      <Route path="/"  element={<Home/>}/>
    </Routes>
  )
}