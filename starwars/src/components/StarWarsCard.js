import React from "react";

 const StarWarsCard = props => {
    return (
        <div className = "StarWarsCard">
            <h2>{props.characters.name}</h2>
            <img alt="Character Picture" src={props.characters.url}></img>

            <div className = "CharacterInfo">
                <img alt="Character Homeworld" src={props.characters.homeworld}></img>
                <p>Gender: {props.characters.gender}</p>
                <p>Born: "{props.characters.birth_year}"</p>
                <p>Height:  "{props.characters.height}"</p>
                <p>Force Weight: "{props.characters.mass}"</p>
                <p>Eye Color: "{props.characters.eye_color}"</p>
            </div>
        </div>
    );
}

export default StarWarsCard;