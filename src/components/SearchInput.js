const SearchInput = ({setSearchedRobots, robots}) => {
    const onSearchChange = (event) => {
        const filteredRobots = robots.filter( robot => robot.username.toLowerCase().includes(event.target.value.toLowerCase()))
        setSearchedRobots(filteredRobots)
    }
    return(
        <div className="pa2">
            <h1>RoboFriends</h1>
            <input 
                className="pa3 ba b--green bg-lightrdt-blue"
                type={'search'} 
                placeholder="search robot"
                onChange={onSearchChange}
            />
        </div>
    )
}

export default SearchInput