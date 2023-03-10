import About from "./components/About";
import AllInOne from "./components/AllInOne";
import Hero from "./components/Hero";
import Navbar from "./components/Navbar";
import Support from "./components/Support";
import Pricing from "./components/Pricing";
import Footer from "./components/Footer";

function App() {
  return (
    <div>
      <Navbar />
      <Hero />
      <About />
      <Support />
      <AllInOne />
      <Pricing />
      <Footer />
    </div>
  );
}

export default App;
