import React from "react";
import { Grid, Image } from 'semantic-ui-react';

 const StarWarsCard = props => {
  
    return (
        <div className = "StarWarsCard">
            
              <Grid.Column>
                <Image src='/images/wireframe/media-paragraph.png' />
                <h2>{props.characters.name}</h2>
            <img alt="Character Picture" src={props.characters.url}></img>

            <div className = "CharacterInfo">
                {/* <p>{props.characters.homeworld}</p> */}
                <p>Gender: {props.characters.gender}</p>
                <p>Born: "{props.characters.birth_year}"</p>
                <p>Height:  "{props.characters.height}"</p>
                <p>Force Weight: "{props.characters.mass}"</p>
                <p>Eye Color: "{props.characters.eye_color}"</p>
            </div>
              </Grid.Column>
             
            <h2>{props.characters.name}</h2>
            <img alt="Character Picture" src={props.characters.url}></img>

            <div className = "CharacterInfo">
                {/* <p>{props.characters.homeworld}</p> */}
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