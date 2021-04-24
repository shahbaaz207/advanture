import Chat from "./components/Chat";
import "./App.css";
import FAQ from "./components/FAQ";
import Navbar from "./components/Navbar";
import Home from "./components/Home";
import Footer from "./components/Footer";

function App() {
  return (
    <div className="App">
      <Navbar />
      <Home />
      <FAQ />
      <Chat />
      <Footer />
    </div>
  );
}

export default App;
