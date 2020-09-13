import React, {useState} from 'react';
import SuperTable from "./Table/SuperTable";

const axios = require('axios');

const url_small = `http://www.filltext.com/?rows=32&id={number|1000}&firstName={firstName}&lastName={lastName}&email={email}&phone={phone|(xxx)xxx-xx-xx}&address={addressObject}&description={lorem|32}`;
const url_big = `http://www.filltext.com/?rows=1000&id={number|1000}&firstName={firstName}&delay=3&lastName={lastName}&email={email}&phone={phone|(xxx)xxx-xx-xx}&address={addressObject}&description={lorem|32}`;

const Container = React.memo(function(props){

    // TODO изменить запрос на сервер
    // TODO рефактор проекта

    const [data,setData] = useState([]);

    function getSmall() {
        axios.get(url_small).then((result) => {
            setData(result.data);
        });
    }

    function getBig() {
        axios.get(url_big).then((result) => {
            setData(result.data);
        });
    }

    return <div className='container'>
        <button onClick={getSmall}>get small</button>
        <button onClick={getBig}>get big</button>
        <SuperTable data={data}/>
    </div>
});

export default Container;