import './App.css';

import React from 'react';

import { Header } from './components/Header';
import { PrincipalContainer } from './components/PrincipalContainer';
import { Main } from './components/Main';
import { Footer } from './components/Footer';

function App() {
  return (
    <React.Fragment>
      <Header />
      <PrincipalContainer>
        <Main />
      </PrincipalContainer>

      <Footer />
    </React.Fragment>
  );
}

export default App;
