import './App.css';
import React from 'react';
import useInitialState from './hooks/useInitialState';

import Loading from './components/Loading';
import { Header } from './components/Header';
import { PrincipalContainer } from './components/PrincipalContainer';
import { Main } from './containers/Main';
import Authors from './containers/Authors';
import Quotes from './containers/Quotes';
import { Footer } from './components/Footer';

function App() {
  const [view, setView] = React.useState("home");
  const [loading, setLoading] =  React.useState(false);
  const { quotes, quoteRandom, authors } = useInitialState(setLoading);

  return (
    <React.Fragment>
      <Header setView={setView} />
      <PrincipalContainer>
        {
          loading && <Loading />
        }
        {
          (view === "home" && !loading) &&
            <Main
              authors={authors}
              quoteRandom={quoteRandom}
            />
        }
        {
          (view === "quotes" && !loading) &&
            <Quotes quotes={quotes} />
        }
        {
          (view === "authors" && !loading) &&
            <Authors />
        }
      </PrincipalContainer>

      <Footer />
    </React.Fragment>
  );
}

export default App;
