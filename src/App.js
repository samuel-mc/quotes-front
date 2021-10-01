import './App.css';
import React from 'react';
import useInitialState from './hooks/useInitialState';

import Loading from './components/Loading';
import { Header } from './components/Header';
import { PrincipalContainer } from './components/PrincipalContainer';
import { Main } from './components/Main';
import { Footer } from './components/Footer';

function App() {
  const [loading, setLoading] =  React.useState(false);
  const { quotes, quoteRandom, authors } = useInitialState(setLoading);

  React.useEffect(() => {
    console.log(quoteRandom.author);
  })

  return (
    <React.Fragment>
      <Header />
      <PrincipalContainer>
        {loading
          ? <Loading />
          : <Main
            authors={authors}
            quoteRandom={quoteRandom}
            quoteRandomAuthor={quoteRandom.author}
            />
        }
      </PrincipalContainer>

      <Footer />
    </React.Fragment>
  );
}

export default App;
