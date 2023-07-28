import axios from "axios";
import React, { useState, useEffect } from 'react';
import { useParams } from "react-router";

const Results = (props) => {

    const { id } = useParams()

    const [data2, setData2] = useState(null);
    const [loaded, setLoaded] = useState(false);

    // const search2 = (id) => {

    //     if (id) {
    //         axios.get(`https://swapi.dev/api/people/${id}`)
    //             // .then((response) => { console.log(response) })
    //             .then((response) => { setData2(response.data); setFirst2(false); })
    //             .catch((error) => { console.log("Err= " + error); setData2(null); setFirst2(false); })
    //     }

    // }

    useEffect(() => {
        if (id) {
            console.log("step 1, id =  " + id);
            axios.get(`https://swapi.dev/api/people/${id}`)
                // .then((response) => { console.log(response) })
                .then((response) => {
                    setData2(response.data);
                    setLoaded(true);
                    console.log("step 2 ");
                    console.log(response);
                })
                .catch((error) => { console.log("Err= " + error); setData2(null); });
            console.log("step 3 ");
            console.log("data2... ");
            console.log(data2);
        }
    }, []
    );

    return (


        < div >
            {
                (loaded) ?
                    <div>
                        <p>Name for {id}: {data2.name}</p>
                        {/* <p>Planet for {id}: {data2.homeworld}</p> */}
                    </div>
                    : <p></p>

            }
        </div >

    )

}

export default Results;

