import React from 'react';

export default function Card(props) {
    return (
        <div className="socialmedia-div">
            <a href={props.link} target="_blank">
                <p className="socialmedia-name">{props.name}</p>

                <div className="socialmedia-icon">
                    {props.logo}
                </div>
            </a>
        </div>
    );
}