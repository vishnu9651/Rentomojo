
import './App.css';
import Navbar from './Components/Navbar';
import Slider from './Slider/Front';
import Footer from './Components/Footer';
import Category from './Category/Appliances';
function App() {
  return (
    <div className="App">
      
     <Navbar />
     <Slider />
     <Category />
     <Footer />
    </div>
  );
}

export default App;
