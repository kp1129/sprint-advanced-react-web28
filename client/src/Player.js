import React from 'react';

const Player = (props) => {
    return (
        <div className="player">
            <h3>{props.player.name}</h3>
            <p>Country: {props.player.country}</p>
            <p>Searches: {props.player.searches}</p>
        </div>
    )
}

export default Player;