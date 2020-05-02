import React, { useState, useContext, useEffect } from 'react';
import { FiSearch, FiPlus } from 'react-icons/fi';

import AddCard from '../AddCard';

import { ToolsContext } from '../../contexts/Tools';
import { TagContext } from '../../contexts/Tag';
import api from '../../services/api';

import './styles.css';

export default function Header() {
    const { setTools } = useContext(ToolsContext);
    const { setBackgroundValue, setSearchTag } = useContext(TagContext);
    
    const [active, setActive] = useState(false);
    const [isCheckboxActive, setIsCheckboxActive] = useState(true);
    const [search, setSearch] = useState('');
    
    useEffect(() => {
        async function handleSearch() { 
            if (isCheckboxActive) {
                const response = await api.get(`/tools?tags_like=${search}`);
                setTools(response.data);
            } else {
                const response = await api.get(`/tools?q=${search}`);
                setTools(response.data);
            }
    
            setSearchTag(search); 
            setBackgroundValue('#FFBB43');
        }

        handleSearch();
    }, [search, isCheckboxActive, setTools, setSearchTag, setBackgroundValue]);

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

                        <input
                        type='search'
                        name='search'
                        placeholder='search'
                        value={search}
                        onChange={e => setSearch(e.target.value)}
                        />
                    </div>

                    <div className='checkbox-container'>
                        <input
                        type='checkbox' name='checkbox'
                        checked={isCheckboxActive}
                        onChange={() => setIsCheckboxActive(!isCheckboxActive)}/>

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