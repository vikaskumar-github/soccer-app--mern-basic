import React from 'react';

const PlayerSingle = (props) => {
    return (
        <div classNameName="row">
            <div className="col s6 ">
            <div className="card">
                <div className="card-image">
                <img src="soccer.jpg" alt='soccer player'/>
                <span className="card-title">{props.player.firstName} {props.player.lastName}</span>
                </div>
                <div className="card-content">
                <p>Phone: {props.player.phone}</p>
                <p>Strength: {props.player.strength}</p>
                </div>
                <div className="card-action">
                 Team: {props.player.team}
                </div>
            </div>
            </div>
        </div>

    )
}

export default PlayerSingle;