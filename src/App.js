import logo from './logo.svg';
import './App.css';
import Navbar from './components/Navbar';
import News from './components/News';

function App() {
  return (
    <>
      <Navbar/>
      <News country="in" category="sports"/>
    </>
  );
}

export default App;
