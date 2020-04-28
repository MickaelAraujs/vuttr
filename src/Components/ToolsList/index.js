import React from 'react';
import { FiX } from 'react-icons/fi';

import './styles.css';

export default function ToolsList() {
    return (
        <div className="tools-container">
            <div className="tool-card">
                <div className="links">
                    <h3><a href="#">json-server</a></h3>
                    
                    <a className='remove' href="#">
                        <FiX size={18} color='#244AA8' />
                        remove
                    </a>
                </div>

                <p className="tool-description">
                    Fake REST API based on a json schema. Useful for mocking and creating APIs for front-end devs to consume in coding challenges.
                </p>

                <ul className="tag-list">
                    <li>#api</li>
                    <li>#json</li>
                    <li>#schema</li>
                    <li>#node</li>
                    <li>#github</li>
                    <li>#rest</li>
                </ul>
            </div>

            <div className="tool-card">
                <div className="links">
                    <h3><a href="#">json-server</a></h3>
                    <a className='remove' href="#">
                        <FiX size={18} color='#244aa8' />
                        remove
                    </a>
                </div>

                <p className="tool-description">
                    Fake REST API based on a json schema. Useful for mocking and creating APIs for front-end devs to consume in coding challenges.
                </p>

                <ul className="tag-list">
                    <li>#api</li>
                    <li>#json</li>
                    <li>#schema</li>
                    <li>#node</li>
                    <li>#github</li>
                    <li>#rest</li>
                </ul>
            </div>

            <div className="tool-card">
                <div className="links">
                    <h3><a href="#">json-server</a></h3>
                    <a className='remove' href="#">
                        <FiX size={18} color='#244aa8' />
                        remove
                    </a>
                </div>

                <p className="tool-description">
                    Fake REST API based on a json schema. Useful for mocking and creating APIs for front-end devs to consume in coding challenges.
                </p>

                <ul className="tag-list">
                    <li>#api</li>
                    <li>#json</li>
                    <li>#schema</li>
                    <li>#node</li>
                    <li>#github</li>
                    <li>#rest</li>
                </ul>
            </div>
        </div>
    );
}