import { Route, Routes } from 'react-router-dom';
import ContactUs from './Components/ContactUs/contactUs';
import Home from './Components/Home';
import CertainProduct from './Components/Inventory/certainProduct';
import Inventory from './Components/Inventory/inventory';
import Navbar from "./Components/shared/Header/header";
import Login from "./Components/shared/Login/login";
import Register from './Components/shared/Register/register';
import RequireAuth from './Components/shared/requiredAuth';
import Slider from './Components/shared/Slider/slider';

function App() {
  console.log(process.env.REACT_API_YOUTUBE_API);


  return (
    <div className="App">
      <Navbar />
      <Slider />
      <Routes>
        <Route exact path='/' element={<Home />} />
        <Route exact path='/inventory' element={<RequireAuth><Inventory /></RequireAuth>} />
        <Route exact path='/inventory/:id' element={<RequireAuth><CertainProduct /></RequireAuth>} />
        <Route exact path='/contact' element={<ContactUs />} />
        <Route exact path="/login" element={<Login />} />
        <Route exact path='/register' element={<Register />} />
      </Routes>
    </div>
  );
}

export default App;
