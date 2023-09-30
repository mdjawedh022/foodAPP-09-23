
import './App.css';
import Main from './components/Main/Main';
import Header from './components/Header/Header';
import Navbar from './components/Nav/Navbar';

function App() {
  return (
    <div className="App">
    <Header/>
    <div class="container-fluid">
  <div class="row">
    <Navbar/>
    <Main/>
  </div>  
  </div>
    </div>
  );
}

export default App;
