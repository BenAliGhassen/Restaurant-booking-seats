import './App.css';
import { Nav } from './Nav';
import { Main } from './Main';
import { Footer } from './Footer';
import { Helmet } from 'react-helmet';
import { Route, Routes, BrowserRouter } from 'react-router-dom'; // Import Route and Switch

import Bookingpage from './Bookingpage';

function Home() {
  return (
    <>
      <Nav />
      <Main />
      <Footer />
    </>
  );
}

function App() {
  return (
    <>
      <Helmet>
        <title>Littel Lemon</title>
        <meta name="description" content="Restaurant" />
        <meta name="Littel Lemon" content="" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=no" />
      </Helmet>
      <BrowserRouter>
      <Routes>
        <Route index element={<Home/>}/>
        <Route path='/Home' element={<Home/>} />
        <Route path='/Booking' element={<Bookingpage/>} />
      </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
