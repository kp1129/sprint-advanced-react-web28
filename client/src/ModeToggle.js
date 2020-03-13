import React from 'react';
import {useDarkMode} from './hooks/useDarkMode';

const ModeToggle = () => {
    const [mode, setMode] = useDarkMode(false);

    return (
        <button type="text" onClick={() => setMode(!mode)}>
           Toggle Mode
        </button>
    )
}

export default ModeToggle;