import React from 'react'
import Character from './Character'

const CharactersList = (props) => {
    console.log(props)

    
    return(
        <section>
            {
                props.characters.map((character, index) => (
                    <Character key={`Character-${character.name}-${index}`} character={character}/>
                ))
            }
        </section>)
}

export default CharactersList