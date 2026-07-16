import Hero from "./components/hero-section/Hero";
import Navbar from "./components/nav/Navbar";

function App() {
  return (
    <div className="min-h-screen text-text">
      <header>
        <Navbar />
      </header>
      <main>
        <Hero />
      </main>
    </div>
  );
}

export default App;
