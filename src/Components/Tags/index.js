import React, { useContext } from 'react';

import { TagContext } from '../../contexts/Tag';

import './styles.css';

export default function Tags({ tags }) {
    const { backgroundValue, searchTag } = useContext(TagContext); 

    return (
        <ul className='tag-list'>
            { tags.map(tag => (

                <li
                key={tag}
                style={tag === searchTag ? { backgroundColor: backgroundValue } : {}}
                >
                    #{tag}
                </li>

            )) }
        </ul>
    );
}