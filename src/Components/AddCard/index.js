import React, { useState } from 'react';
import { FiPlus } from 'react-icons/fi';

import api from '../../services/api';
import style from './inputStyle';

import './styles.css';

export default function AddCard({ setActive, update }) {
    const [toolName, setToolName] = useState('');
    const [toolLink, setToolLink] = useState('');
    const [toolDescription, setToolDescription] = useState('');
    const [tags, setTags] = useState('');

    const [error, setError] = useState(false);

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

            setActive(false);
            update(response.data);
        }

        return;
    }

    function handleValidation() {
         if (toolName === '' || toolLink === '' || toolDescription === '' || tags === '' ) {
            setError(true);
            return false;
         }

         return true;
    }

    return (
        <div className='add-card-container'>
            <div className='add-card'>
                <div className='icon-area'>
                    <FiPlus size={20} color='#000000' />
                    <span>Add new tool</span>
                </div>

                <form onSubmit={handleSubmit}>
                    <div className='input-area'>
                        <label>tool name</label>
                        <input
                        style={(error && toolName === '') ? style.focus : {}}
                        type='text'
                        name='name'
                        value={toolName}
                        onChange={e => setToolName(e.target.value)}
                        />
                        { (error && toolName === '') ? <span>Tool name is required!</span> : ''}
                    </div>
                    
                    <div className='input-area'>
                        <label>tool link</label>
                        <input
                        style={(error && toolLink === '') ? style.focus : {}}
                        type='text'
                        name='link'
                        value={toolLink}
                        onChange={e => setToolLink(e.target.value)}
                        />
                        { (error && toolLink === '') ? <span>Tool link is required!</span> : ''}
                    </div>

                    <div className='input-area'>
                        <label>tool description</label>
                        <textarea
                        style={(error && toolDescription === '') ? style.focus : {}}
                        name='description'
                        cols='20' rows='5'
                        value={toolDescription}
                        onChange={e => setToolDescription(e.target.value)}
                        />
                        { (error && toolDescription === '') ? <span>Tool description is required!</span> : ''}
                    </div>

                    <div className='input-area'>
                        <label>Tags</label>
                        <input
                        style={(error && tags === '') ? style.focus : {}}
                        type='text'
                        name='tags'
                        value={tags}
                        onChange={e => setTags(e.target.value)}
                        />
                        { (error && tags === '') ? <span>Tags field is required!</span> : ''}
                    </div>

                    <div className='buttons'>
                        <button className='add'>Add tool</button>
                        <button className='cancel' onClick={() => setActive(false)}>Cancel</button>
                    </div>
                </form>
            </div>
        </div>
    );
}