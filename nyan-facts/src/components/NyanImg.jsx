import axios from "axios";
import React from "react";

const baseURL = 'https://api.thecatapi.com/v1/images/search';

export const NyanImg = () => {
    const [data, setData] = React.useState(null);

    React.useEffect(() => {
        axios.get(baseURL).then((response) => {
            setData(response.data[0]);
        });
    }, []);

    if (!data) {
       return <h1>Carregando imagem...</h1> 
    }

    return (
        <img src={data.url} alt="" />
    );
};

