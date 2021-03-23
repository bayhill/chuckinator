import React, { useEffect, useState } from 'react';
import './App.css';
import Chuck from './component/chuck';
import ChuckLoading from './component/chuckLoading';
function App() {
  const ListLoading = ChuckLoading(Chuck);
  const [appState, setAppState] = useState({
    loading: false,
    joke: null,
  });

  useEffect(() => {
    setAppState({ loading: true });
    const apiUrl = `http://localhost:7071/api/jokes`;
    fetch(apiUrl)
      .then((res) => res.json())
      .then((joke) => {
        console.log('joke fetched!', joke);
        setAppState({ loading: false, joke: joke });
      });
  }, [setAppState]);
  return (
    <div className='App'>
      <div className='container'>
        <h1>THE CHUCKINATOR</h1>
      </div>
      <div className='joke-container'>
        <ListLoading isLoading={appState.loading} joke={appState.joke} />
      </div>
      <footer>
        <div className='footer'>
          Built{' '}
          <span role='img' aria-label='love'>
            💚
          </span>{' '}
          with by Emil Bergwik
        </div>
      </footer>
    </div>
  );
}
export default App;
