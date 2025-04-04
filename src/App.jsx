import './App.css';
import ClassicalPhotos from './components/ClassicalPhotos';
import Template from './Template';
import Container from "react-bootstrap/Container";
import {BrowserRouter,Routes,Route} from 'react-router-dom'
import Navbar from './Navbar';
import YogaPhotos from './components/YogaPhotos';

function App() {

  return (
    <BrowserRouter>
    <Navbar/>
    <Container>
      <Routes>
        <Route path='/' element={<Template/>}/>
        <Route path='/classicalphotos' element={<ClassicalPhotos/>}/>
        <Route path='/yogaphotos' element={<YogaPhotos/>}/>
      </Routes>
    </Container>
  </BrowserRouter>
  )
}

export default App;
