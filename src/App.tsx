import { useEffect } from 'react';
import './App.css';
import Companies from './components/Companies';
import Header from './components/Header';
import useWindowSize from './hooks/useWindowSize';

function App() {
  const size = useWindowSize();

  useEffect(() => {
    const doc = document.documentElement
    doc.style.setProperty('--vh', size.height * 0.01+ 'px');
  }, [size.height])

  
  return (
    <div className="App">
      <Header />
      <Companies />
    </div>
  );
}

export default App;
