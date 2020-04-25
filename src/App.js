import React from 'react';
import Navbar from './components/navbar/Navbar'
import MainContent from './components/mainContent'
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
