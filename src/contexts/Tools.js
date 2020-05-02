import React, { createContext, useState } from 'react';

export const ToolsContext = createContext();

export default function ToolsProvider({ children }) {
    const [tools, setTools] = useState([]);

    return (
        <ToolsContext.Provider value={{ tools, setTools }}>
            {children}
        </ToolsContext.Provider>
    );
}