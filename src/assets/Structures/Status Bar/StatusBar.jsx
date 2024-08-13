import React from 'react'

import './StatusBar.styles.css'

function StatusBar() {

    return (
        <div id="status-bar" select="false">
            <div className="time">8:44 pm</div>
            <div className="status-group">
                <span className="material-symbols-rounded">wifi</span>
                <span className="material-symbols-rounded">cloud</span>
                <div className="date">8 / 12 / 2024</div>
            </div>
        </div>
    )
}

export default StatusBar