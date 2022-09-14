import React from 'react';
import Header from './component/Header';
import About from './component/About';
import Portfolio from './component/Portfolio';
import Footer from './component/Footer';

function App() {
  return (
    <div>
      <Header></Header>
      <main>
        <About></About>
        <Portfolio></Portfolio>
      </main>
      <Footer></Footer>
    </div>
  );
}

export default App;
