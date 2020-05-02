import React from 'react';
import { FiPlus } from 'react-icons/fi';

import AddForm from '../AddForm';

import './styles.css';

export default function AddCard({ setActive }) {
    return (
        <div className='add-card-container'>
            <div className='add-card'>
                <div className='icon-area'>
                    <FiPlus size={20} color='#000000' />
                    <span>Add new tool</span>
                </div>

                <AddForm setActive={setActive} />
            </div>
        </div>
    );
}