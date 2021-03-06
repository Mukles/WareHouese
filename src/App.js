import { Route, Routes } from 'react-router-dom';
import About from './Components/About/about';
import Blog from './Components/bolg/mybolg';
import ContactUs from './Components/ContactUs/contactUs';
import Home from './Components/Home';
import CertainProduct from './Components/Inventory/certainProduct';
import ManageInventory from './Components/Inventory/ManageInventory';
import MyProduct from './Components/MyProduct/myProduct';
import NotFound from './Components/NotFound/notFound';
import Header from './Components/shared/Header/header';
import Login from "./Components/shared/Login/login";
import Register from './Components/shared/Register/register';
import RequireAuth from './Components/shared/requiredAuth';

function App() {


  return (
    <div className="App">
      <Header />
      <Routes>
        <Route exact path='/' element={<Home />} />
        <Route exact path='/inventory' element={<RequireAuth><ManageInventory /></RequireAuth>} />
        <Route exact path='/inventory/:id' element={<RequireAuth><CertainProduct /></RequireAuth>} />
        <Route exact path='/contact' element={<ContactUs />} />
        <Route exact path='/about' element={<About />} />
        <Route exact path='/blogs' element={<Blog />} />
        <Route exact path='/myProduct' element={<MyProduct />} />
        <Route exact path="/login" element={<Login />} />
        <Route exact path='/register' element={<Register />} />
        <Route path='*' element={<NotFound />} />
      </Routes>
    </div>
  );
}

export default App;
