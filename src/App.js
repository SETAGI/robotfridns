import CardList from "./CardList"
import SearchInput from "./SearchInput";
import { useState, useEffect } from "react";

const App = () => {

    const [searchedRobots, setSearchedRobots] = useState([]);
    const [allRobots, setAllRobots] = useState([]);

    useEffect(()=> {
        fetch('https://jsonplaceholder.typicode.com/users')
            .then(response => response.json())
            .then(robots => {
                setSearchedRobots(robots);
                setAllRobots(robots);
            });
    },[])

    if(allRobots.length === 0) return <h1>Loading...</h1>

    return(
        <div className="tc">
            <SearchInput setSearchedRobots={setSearchedRobots} robots={allRobots}/>
            <CardList searchedRobots={searchedRobots} />
        </div>
    )
}

export default App