import React from 'react';
import Navbar from './components/navbar/Navbar.jsx'
import MainContent from './components/mainContent.jsx'
import './components/styles/main.scss'

const App = () => {
  return (
    <div className='main'>
      <React.Fragment>
        <Navbar />
        <MainContent />
      </React.Fragment>
    </div>
  )
}

export default App;
