import "./App.css";
import Footer from "./Components/Footer";
import Navbar from "./Components/Navabar";
import Navbarr from "./Components/Navbarr";
import AllRoutes from "./Routes/Routes";

function App() {
  return (
    <div className="App">
      <Navbarr />
      <Navbar />
      <AllRoutes />
      <Footer />
    </div>
  );
}

export default App;
