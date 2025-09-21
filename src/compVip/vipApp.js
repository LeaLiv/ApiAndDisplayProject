import React, { useEffect, useState } from 'react'
import axios from 'axios';
import VipInfo from './vipInfo';

const AppVip = () => {
    const [infoItems, setInfoItems] = useState([]);

    useEffect(() => {
        doApi("cloud");
    }, []);

    const doApi = async (_animal) => {
        setInfoItems([]);
        let url = `https://expressrichpepole.onrender.com/`;
        try {
            let response = await axios.get(url);
            console.log(response.data);
            setInfoItems(response.data);
        } catch (error) {
            console.log(error);
            alert("There is a problem, please try again later");
        }
    };

    return (
        <div className="container">
            <h2>AppVip</h2>
            <VipInfo items={infoItems} ></VipInfo>
        </div>
    )
}

export default AppVip