import React, { useState, useContext } from 'react';

import { ToolsContext } from '../../contexts/Tools';
import api from '../../services/api';

import style from './inputStyle';
import './styles.css';

export default function AddForm({ setActive }) {
    const { tools, setTools } = useContext(ToolsContext);

    //input states
    const [toolName, setToolName] = useState('');
    const [toolLink, setToolLink] = useState('');
    const [toolDescription, setToolDescription] = useState('');
    const [tags, setTags] = useState('');

    //validation state
    const [error, setError] = useState(false);

    function handleValidation() {
        if (toolName.length < 3 || toolLink.length < 3 || toolDescription.length < 3 || tags.length < 3) {
            setError(true);
            return false;
        }

        return true;
    }

    async function handleSubmit(e) {
        e.preventDefault();

        const validator = handleValidation();

        if (validator) {
            setError(false);
        
            const tagsAsArray = tags.split(',');
            
            const data = {
                title: toolName,
                link: toolLink,
                description: toolDescription,
                tags: tagsAsArray
            };

            setToolName('');
            setToolLink('');
            setToolDescription('');
            setTags('');

            const response = await api.post('/tools', data, { headers: { 'Content-Type': 'application/json' } });
            setTools([...tools, response.data]);

            setActive(false);
        }
    }

    const handleInputError = input => (error && input.length < 3);

    return (
        <form onSubmit={handleSubmit}>
            <div className='input-area'>
                <label>tool name</label>

                <input
                style={handleInputError(toolName) ? style.focus : {}}
                type='text'
                name='name'
                value={toolName}
                onChange={e => setToolName(e.target.value)}
                />

                { handleInputError(toolName) ? <span>Tool name is required!</span> : ''}
            </div>
                    
            <div className='input-area'>
                <label>tool link</label>

                <input
                style={handleInputError(toolLink) ? style.focus : {}}
                type='text'
                name='link'
                value={toolLink}
                onChange={e => setToolLink(e.target.value)}
                />

                { handleInputError(toolLink) ? <span>Tool link is required!</span> : ''}
            </div>

            <div className='input-area'>
                <label>tool description</label>

                <textarea
                style={handleInputError(toolDescription) ? style.focus : {}}
                name='description'
                cols='20' rows='5'
                value={toolDescription}
                onChange={e => setToolDescription(e.target.value)}
                />

                { handleInputError(toolDescription) ? <span>Tool description is required!</span> : ''}
            </div>

            <div className='input-area'>
                <label>Tags</label>

                <input
                style={handleInputError(tags) ? style.focus : {}}
                type='text'
                name='tags'
                value={tags}
                onChange={e => setTags(e.target.value)}
                />

                { handleInputError(tags) ? <span>Tags field is required!</span> : ''}
            </div>

            <div className='buttons'>
                <button className='add'>Add tool</button>
                <button className='cancel' onClick={() => setActive(false)}>Cancel</button>
            </div>
        </form>
    );
}