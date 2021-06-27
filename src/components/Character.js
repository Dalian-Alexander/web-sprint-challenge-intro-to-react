import React from 'react'
import styled from 'styled-components'

// Write your Character component here

const Character = (props) => {
    console.log(props)

    const character = props.character;

    const Article = styled.article`
    background-color: rgb(73, 20, 220);
    color: #fff;
    width: 30%;
    border-radius: 5%;
    padding-bottom: 1%;
    display: flex, inline-block;
    margin-left: 35%;
    `;

    return(     
        <Article>
            <h2>{character.name}</h2>
            <p>gender: {character.gender}</p>
            <p>Height: {character.height}</p>
            <p>Mass: {character.mass}</p>
            <p>BirthYear: {character.birth_year}</p>
            <p>Eye Color: {character.eye_color}</p>
            <p>Hair Color: {character.hair_color}</p>
            <p>Skin Color: {character.skin_color}</p>
        </Article>
    )    
}

export default Character