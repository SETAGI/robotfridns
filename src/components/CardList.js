import React from 'react';
import Card from './Card';

const CardList = ({searchedRobots}) => {
    return(
        searchedRobots.map( 
            robot => 
            <Card 
                key={`robot-${robot.id}`}
                id={robot.id} 
                name={robot.name} 
                userName={robot.username}
                email={robot.email}
            />
        )
    )
}

export default CardList