import React from 'react';
import '../styles/MainContent.css';

function MainContent() {
    return (
        <main className="main-content">
            <div className="main-logo">
                <img src="../health.png" alt="Health Logo" />
            </div>
            <div className="main-text">
                <h3>CONNECTING MEDICALS</h3>
                <h1>MAKING HEALTH CARE</h1>
                <h2>ACCESSIBLE FROM ANYWHERE</h2>
              </div>  
                <div className='uli'>
                       <ul>
                    <li>Store Reports</li>
                    <li>Analyse Data</li>
                    <li>Check Health</li>
                </ul> 
                </div>
            </main>
    );
}

export default MainContent;
