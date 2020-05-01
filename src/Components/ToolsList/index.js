import React, { useState } from 'react';
import { FiX } from 'react-icons/fi';

import Tags from '../Tags';
import RemoveCard from '../RemoveCard';

import './styles.css';

export default function ToolsList({ tools, setTools }) {
    const [active, setActive] = useState(false);
    const [data, setData] = useState({});

    function handleRemove(title, id) {
        setData({
            title,
            id
        });
        setActive(true);
    }

    function updateTools(id) {
        const filteredTools = tools.filter(tool => tool.id !== id);
        setTools(filteredTools);
    }

    return (
        <div className="tools-container">
            { tools.map(tool => (
                <div key={tool.id} className="tool-card">
                    <div className="links">
                        <h3><a href={tool.link}>{tool.title}</a></h3>
                        
                        <button
                        onClick={() => handleRemove(tool.title, tool.id)}
                        className='remove'>
                            <FiX size={18} color='#244AA8' />
                            remove
                        </button>
                    </div>

                    <p className="tool-description">
                        {tool.description}
                    </p>

                    <Tags tags={tool.tags} />
                </div>
            )) }

            { !active ? '' : <RemoveCard setActive={setActive} data={data} update={updateTools} /> }
        </div>
    );
}