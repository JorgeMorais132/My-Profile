import './App.css';
import Home from './Components/Home/Home';
import Projects from './Components/Projects/Projects';
import TopBar from './Components/TopBar';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Contacts from './Components/Contacts/Contacts';



function App() {
  return (
    <BrowserRouter>
        <div className="App">
          <TopBar></TopBar>
          <Routes>
            <Route exact path='/' element={<Home/>}></Route>
            <Route exact path='/projects' element={<Projects/>}></Route>
            <Route exact path='/contact' element={<Contacts/>}></Route>
          </Routes>
         
        </div>
    </BrowserRouter>
  );
}

export default App;
