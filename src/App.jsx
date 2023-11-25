// App.js
import React from 'react';
import { BrowserRouter as Router, Route} from 'react-router-dom';
import Navbar from './Components/navbar';
import Card from './Components/card';
import Projects from './Components/projects';
import About from './Components/about';
import Contact from './Components/contact';
import Test from './Components/test';

const App = () => {
  return (
    <div className='container-lg'>
      <Navbar/>
      <Card/>
      <Projects/> 
      {/* <About/> */}
      {/* <Test/> */}
    </div>
  );
};

export default App;
