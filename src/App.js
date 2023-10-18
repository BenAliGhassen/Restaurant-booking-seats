import './App.css';
import { Nav } from './Nav';
import { Main } from './Main';
import { Footer } from './Footer';
import { Helmet } from 'react-helmet';



function App() {
  return (
    <>
     <Helmet>
        <title>Littel Lemon</title>
        <meta name="description" content="Restaurant" />
        <meta name="Littel Lemon" content=""/>
    </Helmet>
     <Nav/> 
      <Main/>
      <Footer/>
    </>
  );
}

export default App;
