import React from 'react';
import Nav from './components/Nav';
import Banner from './components/Banner';
import { BeCountedAlert, Footer, SubmitName } from './components/Basics';
import VotingCardsContent from './components/VotingCardsContent';
import { store } from './redux/store'
import { Provider } from 'react-redux'

function App() {
  return (
    <Provider store={store}>
      <Nav />
      <Banner />
      <div className="max-centered">
        <BeCountedAlert />
        <main role="main">
          <VotingCardsContent />
        </main>
        <SubmitName />
        <Footer />
      </div>
    </Provider>
  );
}

export default App;
