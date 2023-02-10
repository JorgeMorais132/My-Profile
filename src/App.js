import './App.css';
import Contacts from './Components/Contacts/Contacts';
import TopBar from './Components/TopBar';


/// colors: #100F0F #0F3D3E #E2DCC8 #F1F1F1 #181D31

function App() {
  return (
    <div className="App">
      <TopBar></TopBar>
      <Contacts></Contacts>
    </div>
  );
}

export default App;
