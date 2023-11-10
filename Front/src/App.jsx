import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { Route, Routes, useLocation } from 'react-router';
import './App.css';
import NavBar from './Components/Navigation/Navbar';
import DetailPage from './Components/Pages/DetailPage';
import FormPage from './Components/Pages/FormPage';
import HomePage from './Components/Pages/HomePage';
import LandingPage from './Components/Pages/LandingPage';
import { getVideogamesByDefault } from './redux/actions/actions';

function App() {
  const {pathname} = useLocation()
  const dispatch = useDispatch()
  useEffect(() => {
    dispatch(getVideogamesByDefault());
  }, []);
  return (
    <div className='App'>
      {(pathname !== "/" && !pathname.includes("/detail") && pathname!=="/form") && <NavBar/>}
      <Routes>
        <Route path="/" element={<LandingPage/>}/>
        <Route path="/home" element={<HomePage/>}/>
        <Route path="/detail/:id" element={<DetailPage/>}/>
        <Route path="/form" element={<FormPage/>}/>
      </Routes>
    </div>
  )
}

export default App
