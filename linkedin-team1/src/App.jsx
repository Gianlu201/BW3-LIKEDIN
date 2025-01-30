import 'bootstrap-icons/font/bootstrap-icons.min.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.min.js';
import MainComponent from './components/MainComponent';
import './App.css';
import NavbarComponent from './components/NavbarComponent';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import HomeComponent from './components/HomeComponent';

function App() {
  return (
    <BrowserRouter>
      <div>
        <NavbarComponent />
        <Routes>
          <Route path='/post' element={<HomeComponent />} />
          <Route path='/post/:postId' element={<HomeComponent />} />
          <Route path='/' element={<HomeComponent />} />
          <Route path='/profile/:profileId' element={<MainComponent />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}
export default App;
