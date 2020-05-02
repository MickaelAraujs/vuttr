import React, { useState, useContext, useEffect } from 'react';
import { FiX } from 'react-icons/fi';

import Tags from '../Tags';
import RemoveCard from '../RemoveCard';

import { ToolsContext } from '../../contexts/Tools';
import api from '../../services/api';

import './styles.css';

export default function ToolsList() {
    const { tools, setTools } = useContext(ToolsContext);

    const [active, setActive] = useState(false);
    const [data, setData] = useState({});

    useEffect(() => {
        async function loadTools() {
            const response = await api.get('/tools');
            setTools(response.data);
        }

        loadTools();
    }, [setTools]);

    function handleRemove(title, id) {
        setData({
            title,
            id
        });
        setActive(true);
    }
    
    return (
        <div className='tools-container'>
            { tools.map(tool => (
                <div key={tool.id} className='tool-card'>
                    <div className='links'>
                        <h3><a href={tool.link}>{tool.title}</a></h3>
                        
                        <button
                        onClick={() => handleRemove(tool.title, tool.id)}
                        className='remove'>
                            <FiX size={18} color='#244AA8' />
                            remove
                        </button>
                    </div>

                    <p className='tool-description'>
                        {tool.description}
                    </p>

                    <Tags tags={tool.tags}/>
                </div>
            )) }

            { !active ? '' : <RemoveCard setActive={setActive} data={data} /> }
        </div>
    );
}