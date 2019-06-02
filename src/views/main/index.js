import React from 'react';
import Header from './header';
import Concurso from './concurso';
import './css/index.css'

function Index() {
  return(
    <div>
      <Header />
      <div className="Container">
        <Concurso />
        
      </div>
    </div>
  );
}

export default Index;