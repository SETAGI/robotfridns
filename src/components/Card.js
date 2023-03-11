import React from "react";

const Card = ({id, name, userName, email}) => {
    return(
        <figure className="bg-light-green dib br3 pa3 ma2 grow bw2 shadow-5">
            <img alt='robot' src={`https://robohash.org/${id}?200x200`}/>
            <figcaption>
                <h2>{userName}</h2>
                <p>{name}</p>
                <p>{email}</p>
            </figcaption>
        </figure>
    )
}

export default Card