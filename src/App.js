import React from 'react';
import {
  Navbar,
  SocialMedia,
  Hero,
  DarkModeToggle,
  About,
  Projects,
  Skills,
  Graphics,
  Contact,
  Footer,
  Shopify,
} from './components';
import analytics from './helpers/analytics';

function App() {
  analytics();
  return (
    <div className="App">
      <Navbar />
      <DarkModeToggle />
      <SocialMedia />
      <Hero />
      <About />

      <Skills />
      <Projects />
      <Graphics />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;
