import logo from './logo.svg';
import './App.css';
import Mainnav from './Components/Mainnav';
import 'bootstrap/dist/css/bootstrap.min.css';
import MainCar from './Components/MainCar';
import Connect from './Components/Connect';
import About from './Components/About';
import Services from './Components/Services';
import Find from './Components/Find';
import Mail from './Components/Mail';
import Footer from './Components/Footer';
import Copyright from './Components/Copyright';


function App() {
  return (
    <div className="App">
      <Mainnav/>
      <MainCar/>
      <Connect/>
      <About/>
      <Services/>
      {/* <Find/> */}
      <Mail/>
      <Footer/>
      <Copyright/>
    </div>
  );
}

export default App;
