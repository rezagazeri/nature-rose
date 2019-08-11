import React from 'react';
import './scss/utils/app.scss';
import Header from './components/Header/Header'
import TitelHeader from './components/TitelHeader/TitelHeader';

function App() {
  return (
    <div >
      <TitelHeader />
      <Header />
      <h1>سلام</h1>
    </div>
  );
}

export default App;
