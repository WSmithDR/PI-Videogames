import { Route, Routes, useLocation } from 'react-router'
import './App.css' 
import LandingPage from './Components/LandingPage';
import HomePage from './Pages/HomePage';
import DetailPage from './Pages/DetailPage';
import FormPage from './Pages/FormPage';
import NavBar from './Components/Navbar';

function App() {
  const {pathname} = useLocation()
  return (
    <>
      {pathname !== "/" && <NavBar/>}
      <Routes>
        <Route path="/" element={<LandingPage/>}/>
        <Route path="/home" element={<HomePage/>}/>
        <Route path="/detail/:id" element={<DetailPage/>}/>
        <Route path="/form" element={<FormPage/>}/>
      </Routes>
    </>
  )
}

export default App
