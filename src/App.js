import React from 'react';

import Header from './Components/Header';
import ToolsList from './Components/ToolsList';

import './global.css';

export default function App() {
  return (
    <div className='container'>
      <Header />
      <ToolsList />
    </div>
  );
}


