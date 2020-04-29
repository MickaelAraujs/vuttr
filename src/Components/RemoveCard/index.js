import React from 'react';
import { FiX } from 'react-icons/fi';

import './styles.css';

export default function RemoveCard({ setActive, data }) {
    return (
        <div className='remove-card-container'>
            <div className='remove-card'>
                <div className='close-area'>
                    <button className='close-window' onClick={() => setActive(false)}>
                        <FiX size={18} color='#000' style={{ marginRight: 5, marginLeft: 10}} />
                    </button>

                    <span>Remove tool</span>
                </div>

                <p>Are you sure you want to remove {data.title}?</p>

                <div className='buttons'>
                    <button className='cancel' onClick={() => setActive(false)}>Cancel</button>
                    <button className='remove'>Yes, remove</button>
                </div>
            </div>
        </div>
    );
}