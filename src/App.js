import CardList from "./components/CardList"
import SearchInput from "./components/SearchInput";
import { useState, useEffect } from "react";
import Scroll from "./components/Scroll";

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

     return !allRobots.length ? 
     <h1>Loading...</h1> :
     ( 
        <div className="tc">
            <SearchInput setSearchedRobots={setSearchedRobots} robots={allRobots}/>
            <Scroll>
                <CardList searchedRobots={searchedRobots} />
            </Scroll>
        </div>
     )
}

export default App