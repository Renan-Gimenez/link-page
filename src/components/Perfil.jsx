import React from "react";

export default function Perfil(props){
    return(
        <div className="user-info">
            <img className="avatar" src={props.avatarLink} alt="Avatar" />
            <h2>{props.username}</h2>
            <h4>{props.description}</h4>
        </div>
    );
}