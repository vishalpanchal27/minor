import './App.css';
// import ApiCall from './ApiCalls/ApiCall';
import Navbar from './components/Navbar';
import HomePageApi from './ApiCalls/HomePageApi';
import Home from './pages/Home';
import { Route, Routes } from 'react-router-dom';
import Cart from './pages/Cart';
import Detail from './pages/Detail';
import Favourite from './pages/Favourite';
import SignUp from './pages/SignUp';
import MainPage from './pages/MainPage';
import Search from './components/Search';
import ApiCall from './ApiCalls/ApiCall';
// import NotFound from './pages/NotFound';



function App() {
  return (
    <div className="">
      <Navbar />
      <ApiCall />
      <Routes>
        <Route path='/loginPage' element={<MainPage />} />
        <Route path='/' element={<Home />} />
        <Route path='/detail' element={<Detail />} />
        <Route path='/favourite' element={<Cart />} />
        <Route path='/cart' element={<Favourite />} />
        <Route path='/signUp' element={<SignUp />} />
        <Route path='/search' element={<Search />} />
        {/* <Route path="*" element={<NotFound />} /> */}
      </Routes>
      <HomePageApi />

    </div>
  );
}

export default App;
