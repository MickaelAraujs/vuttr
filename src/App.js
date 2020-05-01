import React, { useState, useEffect } from 'react';

import Header from './Components/Header';
import ToolsList from './Components/ToolsList';
import api from './services/api';

import './global.css';

export default function App() {
  const [tools, setTools] = useState([]);

  useEffect(() => {
    async function loadTools() {
      const response = await api.get('/tools');
      setTools(response.data);
    }

    loadTools();
  }, []);

  return (
    <div className='container'>
      <Header tools={tools} setTools={setTools}/>
      <ToolsList tools={tools} setTools={setTools}/>
    </div>
  );
}


