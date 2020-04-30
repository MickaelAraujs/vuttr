import React, { useState } from 'react';
import { FiSearch, FiPlus } from 'react-icons/fi';

import AddCard from '../AddCard';

import './styles.css';

export default function Header() {
    const [active, setActive] = useState(false);

    return (
        <div className='header-container'>
            <div className="title-container">
                <h1>VUTTR</h1>
                <h2>Very Useful Tools To Remember</h2>
            </div>

            <div className='input-container'>
                <div className='input-area'>
                    <div className='search-container'>
                        <button className='icon-button'>
                            <FiSearch size={18} color='#244AA8' />
                        </button>
                        <input type='search' name='search' placeholder='search'/>
                    </div>

                    <div className='checkbox-container'>
                        <input type='checkbox' name='checkbox' disabled={false}/>
                        <label>search in tags only</label>
                    </div>
                </div>

                <button className='add-button' onClick={() => setActive(true)}>
                    <FiPlus size={18} color='#F5F4F6' style={{ marginRight: 3 }} />
                    Add
                </button>
            </div>
            
            { !active ? '' : <AddCard setActive={setActive} /> }
        </div>
    );
}