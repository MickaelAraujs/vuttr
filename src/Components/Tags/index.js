import React from 'react';

import './styles.css';

export default function Tags({ tags }) {
    return (
        <ul className="tag-list">
            { tags.map(tag => (
                <li key={tag}> {`#${tag}`} </li>
            )) }
        </ul>
    );
}