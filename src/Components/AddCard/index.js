import React from 'react';
import { FiPlus } from 'react-icons/fi';

import './styles.css';

export default function AddCard({ setActive }) {

    function handleSubmit(e) {
        e.preventDefault();
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
                        <input type='text' name='name' />
                    </div>
                    
                    <div className='input-area'>
                        <label>tool link</label>
                        <input type='text' name='link' />
                    </div>

                    <div className='input-area'>
                        <label>tool description</label>
                        <textarea name='description' cols='20' rows='5'   />
                    </div>

                    <div className='input-area'>
                        <label>Tags</label>
                        <input type='text' name='tags'/>
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