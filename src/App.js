import React from 'react';
import Header from './component/Header';
import About from './component/About';
import Portfolio from './component/Portfolio';
import ContactForm from './component/Contact';
import Resume from './component/Resume';
import Footer from './component/Footer';

function App() {
  return (
    <div>
      <Header></Header>
      <main>
        <About></About>
        <Portfolio></Portfolio>
        <ContactForm></ContactForm>
        <Resume></Resume>
      </main>
      <Footer></Footer>
    </div>
  );
}

export default App;
