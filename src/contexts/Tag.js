import React, { createContext, useState } from 'react';

export const TagContext = createContext();

export default function TagProvider({ children }) {
    const [backgroundValue, setBackgroundValue] = useState('none');
    const [searchTag, setSearchTag] = useState('');

    return (
        <TagContext.Provider value={{
            backgroundValue,
            setBackgroundValue,
            searchTag,
            setSearchTag
        }}>
            {children}
        </TagContext.Provider>
    );
}