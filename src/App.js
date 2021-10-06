import './App.css';
import React from 'react';
import useInitialState from './hooks/useInitialState';

import Loading from './components/Loading';
import { Header } from './components/Header';
import { PrincipalContainer } from './components/PrincipalContainer';
import { Main } from './containers/Main';
import Authors from './containers/Authors';
import Quotes from './containers/Quotes';
import AddQuote from './components/AddQuote';
import { Footer } from './components/Footer';

function App() {
  const [addQuote, setAddQuote] = React.useState(false);
  const [view, setView] = React.useState("home");
  const [loading, setLoading] =  React.useState(false);
  const [updateData, setUpdateData] = React.useState(false);
  const { quotes, quoteRandom, authors } = useInitialState(setLoading, updateData, setUpdateData);

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
              setAddQuote={setAddQuote}
            />
        }
        {
          (view === "quotes" && !loading) &&
            <Quotes
              quotes={quotes}
              setAddQuote={setAddQuote}
              setUpdateData={setUpdateData}
            />
        }
        {
          (view === "authors" && !loading) &&
            <Authors authors={authors} />
        }
      </PrincipalContainer>

      {!!addQuote && <AddQuote setAddQuote={setAddQuote} setUpdateData={setUpdateData} />}

      <Footer setAddQuote={setAddQuote} setView={setView} />
    </React.Fragment>
  );
}

export default App;
