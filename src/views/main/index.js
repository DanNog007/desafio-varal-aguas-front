import React from 'react';
import Header from './header';
import Concurso from './concurso';
import Sobre from './sobre';
import Regras from './regras';
import Footer from './footer';
import './css/index.css';

function Index() {
  return(
    <div>
      <Header />
      <div className="Container">
        <Concurso />
        <Sobre />
        <Regras />
      </div>
      <Footer />
    </div>
  );
}

export default Index;