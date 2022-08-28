
import './App.css';
import Navbar from './Components/Navbar';
import Slider from './Slider/Front';
import Footer from './Components/Footer';
import Category from "./Category/AllCategory"

import AllProduct from './Products/AllProduct';
function App() {
  return (
    <div className="App">
      
     <Navbar />
     <Slider />
     <Category />
     < AllProduct />
     <Footer />
    </div>
  );
}

export default App;
