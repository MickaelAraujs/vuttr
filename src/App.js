import React from 'react';

import ToolsProvider from './contexts/Tools';
import TagProvider from './contexts/Tag';

import Header from './Components/Header';
import ToolsList from './Components/ToolsList';

import './global.css';

export default function App() {
  return (
    <ToolsProvider>
      <TagProvider>
        <div className='container'>
          <Header />
          <ToolsList />
        </div>
      </TagProvider>
    </ToolsProvider>
  );
}


