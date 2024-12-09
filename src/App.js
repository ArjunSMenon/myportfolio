import './App.css';
import About from './pages/About';
import Header from './components/Header';
import Projects from './pages/Projects';
import Contact from './pages/Contact';
import Home from './pages/Home';

function App() {
  return (
    <div className='App'>
      <Header />
      <main>
        <Home />
        <About />
        <Projects />
        <Contact />
      </main>
    </div>
  );
}

export default App;
