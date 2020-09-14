import React, {useState} from 'react';
import SuperTable from "./Table/SuperTable";

const axios = require('axios');

const url_small = `http://www.filltext.com/?rows=32&id={number|1000}&firstName={firstName}&lastName={lastName}&email={email}&phone={phone|(xxx)xxx-xx-xx}&address={addressObject}&description={lorem|32}`;
const url_big = `http://www.filltext.com/?rows=1000&id={number|1000}&firstName={firstName}&delay=3&lastName={lastName}&email={email}&phone={phone|(xxx)xxx-xx-xx}&address={addressObject}&description={lorem|32}`;

const Container = React.memo(function(props){

    // TODO изменить запрос на сервер

    const [data,setData] = useState([]);
    const [preloadVis, setPreloadVis] = useState(false);
    const preloadStyle = `
    .preloader {
        width: 90%;
        height 60%;
        padding: 20px;
        float: right;
        align: center;
    }
`

    function getSmall() {
        setData([]);
        setPreloadVis(true);
        axios.get(url_small).then((result) => {
            setData(result.data);
            setPreloadVis(false);
        });
    }

    function getBig() {
        setData([]);
        setPreloadVis(true);
        axios.get(url_big).then((result) => {
            setData(result.data);
            setPreloadVis(false);
        });
    }

    return <div className='container'>
        <button onClick={getSmall}>get small</button>
        <button onClick={getBig}>get big</button>
        {preloadVis && <img src='https://crikun.ru/image/catalog/design/loading_circles.gif' className='preloader'/>}
        {preloadVis && <style>{preloadStyle}</style>}
        {(data.length !== 0) && <SuperTable data={data} setData={setData}/>}
    </div>
});

export default Container;