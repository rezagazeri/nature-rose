import React from 'react';
import './scss/utils/app.scss';
import Header from './components/Header/Header'
import TitelHeader from './components/TitelHeader/TitelHeader';
import ToolBar from './components/Toolbar/ToolBar';
import SideToolbar from './components/SideToolbar/SideToolbar';
function App() {
  return (
    <div >
      <TitelHeader />
      <Header />
      <ToolBar />
      <SideToolbar />
      <h1>سلام</h1>
    </div>
  );
}

export default App;
