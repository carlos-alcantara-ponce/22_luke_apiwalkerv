

import Obi from "../../images/obi.png"

const DataCard = (props) => {


    // const data = props.data;
    // const encontro = props.encontro;

    console.log("Data= " + props.data);
    console.log("first= " + props.first);


    return (
        <div>             {
            (props.data) ?
                // (props.data) ?
                <div>
                    <h1> {props.data.name}</h1>
                    {Object.keys(props.data).slice(0, 4).map((key) => <p>{key}:{props.data[key]}</p>)}
                </div>
                :
                (props.first) ?
                    <div >Ingrese datos</div>
                    :
                    <div>
                        <h1>Estos no son los droides que está buscando</h1>
                        <img src={Obi} alt="Not available" />
                    </div>

        }


        </div >

    )
}

export default DataCard;

