import { Container } from '@mui/material';
import './App.css';
import ResponsiveAppBar from './components/Appbar';
import { Astros } from './components/Astros';
import { Main } from './components/Main';
import { Routes, Route } from 'react-router-dom';
import { AboutUs } from './components/AboutUs';
// import { Navbar } from './components/Navbar'

function App() {
  const navs = [
    {name: 'home', href: '/'},
    {name: 'astros', href: '/astros'},
    {name: 'about us', href: '/aboutus'}
  ]
  return (
    <>
      <ResponsiveAppBar navs={navs} />
      <Container sx={{ mt: '3rem'}}>
      <Routes>
        <Route element={<Main />} path="/" />
        <Route element={<Astros />} path="/astros" />
        <Route element={<AboutUs />} path="/aboutus" />
      </Routes>
      </Container>
    </>
  );
}

export default App;
