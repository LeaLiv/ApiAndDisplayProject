import React, { useEffect, useState } from 'react'
import axios from 'axios';
import PixaInfo from './pixaInfo';
import PixaInput from './pixaInput';

const AppPixa = () => {
    let api_key = process.env.REACT_APP_API_KEY_PIXABAY;
    const [infoItems, setInfoItems] = useState([]);

    useEffect(() => {
        doApi("cloud");
    }, []);

    const doApi = async (_animal) => {
        setInfoItems([]);
        let url = `https://pixabay.com/api/?key=${api_key}&q=${_animal}&image_type=photo`;
        try {
            let response = await axios.get(url);
            console.log(response.data);
            setInfoItems(response.data.hits);
        } catch (error) {
            console.log(error);
            alert("There is a problem, please try again later");
        }
    };

    return (
        <div className="container">
            <h2>AppPixa</h2>
            <PixaInput doApi={doApi}></PixaInput>
            <PixaInfo items={infoItems} ></PixaInfo>
        </div>
    )
}

export default AppPixa