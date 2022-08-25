import React from 'react';

import {
  About,
  FindUs,
  Footer,
  Gallery,
  //Header,
  Intro,
  Artworks,
  Laurels,
} from './container';
import { Navbar } from './components';
import './App.css';

const App = () => (
  <div>
    <Navbar />
    <Intro />
    {/* <Header /> */}
    <About />
    <Laurels />
    <Gallery />
    <FindUs />
    <Footer />
    <Artworks />
  </div>
);

export default App;
