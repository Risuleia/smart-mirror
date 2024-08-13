import React from 'react'

import StatusBar from './assets/Structures/Status Bar/StatusBar'
import Main from './assets/Pages/Main'

import './App.css'

function App() {

    setInterval(() => {
        if (document.hasFocus()) document.body.setAttribute('data-animations', 'true')
        else document.body.setAttribute('data-animations', 'false')
    }, 2000);

    return (
        <>
            <StatusBar />
            <div id="main">
                <Main />
            </div>
        </>
    )
}

export default App
