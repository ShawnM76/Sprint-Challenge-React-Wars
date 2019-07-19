import React, { useEffect, useState } from "react";
import axios from "axios";
import StarWarsCard from "./StarWarsCard.js";

const StarWarsGrid = props => {
    const [ warsData, setWarsData ] = useState({});

    useEffect(() => {
        axios.get('https://swapi.co/api/people/')
        .then(res => {
          const dataResults = res.data.results;
          console.log(dataResults);
          setWarsData(dataResults);
        })
        .catch(error => {
            console.log("O no the server is down!", error)
        })
      }, [])

      return (
            <div>
                {Array.from(warsData).map((fubar, id) => (
                    <StarWarsCard characters={fubar} key={id} />
                    // <StarWarsCard name={warsData.name}  key={id}/>
                ))};
            </div>
      );

}

export default StarWarsGrid;