import logo from './logo.svg';
import './App.css';
import Nav from './nav.js';
import Front from './front.js';
import AOS from 'aos';
import Seconpage from './seconpage';
import { useCallback,useEffect } from 'react';
import 'aos/dist/aos.css';
function App() {
  // useEffect(() => {
  //   AOS.init();
  // }, [])
  return (
    <div className="App">
      <div className='body'>
<Nav />
<Front /></div>
 <br></br>
  <br></br>
 <br>
  </br><br></br><br></br>
<div data-aos="fade-left"  data-os-duration="3000"  >

  <Seconpage />

</div>
    </div>
  );
}

export default App;
