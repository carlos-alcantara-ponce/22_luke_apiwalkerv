import { useState } from "react"



const SearchBar = (props) => {

    const [selectedPath, setSelectedPath] = useState("/people");
    const [id, setId] = useState("");

    return (
        <div>
            <select value={selectedPath} onChange={(e) => setSelectedPath(e.target.value)}>
                <option value={"/people"}>People</option>
                <option value={"/films"}>Films</option>
                <option value={"/starships"}>Starships</option>
                <option value={"/vehicles"}>Vehicles</option>
                <option value={"/species"}>Species</option>
                <option value={"/planets"}>Planets</option>
            </select>
            <div>
                <input type="number" value={id} onChange={(e) => setId(e.target.value)} />
                <button onClick={() => { props.onSearch(selectedPath, id); }}>Search</button>
            </div>

        </div>
    )

}

export default SearchBar;