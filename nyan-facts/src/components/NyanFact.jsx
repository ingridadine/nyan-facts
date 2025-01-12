import axios from "axios";
import React from "react";

const baseURL = 'https://meowfacts.herokuapp.com/?lang=por-br';

export const NyanFact = () => {
    const [data, setData] = React.useState(null);

    React.useEffect(() => {
        axios.get(baseURL).then((response) => {
            setData(response.data.data[0]);
        });
    }, []);

    if (!data) {
       return <h1>🐱🐱🐱 Encontrando fatos...</h1> 
    }

    return (
        <h1>{data}</h1>
    );
};

