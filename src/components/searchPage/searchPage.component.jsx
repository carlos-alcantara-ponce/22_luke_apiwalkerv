import axios from "axios";
import SearchBar from "../searchBar/searchBar.component";
import DataCard from "../dataCard/dataCard.component";
import Results from "../dataCard/results.component";
import { useState } from "react";
import { BrowserRouter } from 'react-router-dom';
import { Routes, Route, Link } from "react-router-dom";


const SearchPage = (props) => {

    const [data, setData] = useState(null);
    const [first, setFirst] = useState(true);

    const search = (selectedPath, id) => {

        // console.log("selectedPath= " + selectedPath + ", id= " + id);

        if (selectedPath && id) {
            axios.get(`https://swapi.dev/api/${selectedPath}/${id}`)
                // .then((response) => { console.log(response) })
                .then((response) => { setData(response.data); setFirst(false); })
                .catch((error) => { console.log("Err= " + error); setData(null); setFirst(false); })
        }

    }


    return (
        <div>
            <SearchBar onSearch={search} />
            <DataCard data={data} first={first} />
            {/* <BrowserRouter>
                <Routes>
                    <Route exact path="/" element={<SearchBar onSearch={search} />} />
                    <Route exact path="/" element={<DataCard data={data} first={first} />} />
                    <Route exact path="/:id" element={<Results />} />
                </Routes>
            </BrowserRouter> */}

        </div >

    )



}

export default SearchPage;
