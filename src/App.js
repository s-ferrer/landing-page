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
    <Artworks />
    <FindUs />
    <Footer />
  </div>
);

export default App;
