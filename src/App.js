import './App.css';
import { useState,useEffect } from 'react';
import Navbar from './nav';
import Sec1  from './Sec1';
import Sec2 from './Sec2';
import Sec3 from './Sec3';
import Sec4 from './Sec4';
import Sec5 from './Sec5';
import PreLoad from './PreLoad';


function App() {
  const [load, updateLoad] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      updateLoad(false);
    }, 4000);
    return () => clearTimeout(timer);
  }, []);
  return (
    <div className="App">
      <Navbar/>
      <PreLoad load={load}/>
      <Sec1/>
      <Sec2/>
      <Sec3/>
      <Sec4/>
      <Sec5/>
    </div>
  );
}

export default App;
