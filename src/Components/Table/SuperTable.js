import React, {useEffect, useState} from 'react';
import SuperHeader from './Header/SuperHeader'
import SuperBody from './Body/SuperBody'
import SuperPaginator from "./Pages/SuperPaginator";
import SuperLinesSelector from "./Pages/SuperLinesSelector";
import SuperSearch from "./SuperSearch";
import SuperItemAdded from "./SuperItemAdded";
import SuperViewForm from "./SuperViewForm";

const LINES_ON_PAGE = 50; // lines on page by default

const SuperTable = React.memo(function(props){

    // all data from response
    const [totalData, setTotalData] = useState([]);
    // client searched part of data
    const [searchedData, setSearchedData] = useState([]);
    // part of searched data shown right now
    const [curData, setCurData] = useState([]);

    // table utilities
    const [columnNames, setColumnsNames] = useState([]);
    const [sortedTag, setSortedTag] = useState('');
    const [searchStr, setSearchStr] = useState('');

    // pages utilities
    const [choosenPage, setChoosenPage] = useState(1);
    const [linesOnPage, setLinesOnPage] = useState(LINES_ON_PAGE);

    // viewFrom utilities
    const [viewItem, setViewItem] = useState({data: {}, visibility: 'hidden'});

    // function for paginator click
    let onPageClick = (pageNum) => {
        let lastPageIcon = document.getElementsByClassName('page ' + choosenPage);
        if(lastPageIcon[0] !== undefined){
            lastPageIcon[0].style.backgroundColor = 'white';
            lastPageIcon[0].style.color = 'green';
        }

        let newPageIcon = document.getElementsByClassName('page ' + pageNum);
        if(newPageIcon[0] !== undefined) {
            newPageIcon[0].style.backgroundColor = 'green';
            newPageIcon[0].style.color = 'white';
            setChoosenPage(pageNum);
        }
    };

    // save data after receiving request
    useEffect(()=>{
        if(props.data && props.data !== [] && props.data[0] !== undefined){
            // set column names
            let tempColumns = []
            for(let tempProps in props.data[0]){
                tempColumns.push(tempProps);
            }
            setColumnsNames(tempColumns);
            setSearchedData(props.data);
            setTotalData(props.data);
/*
            // form pages
            let shownData = [];
            for(let i = linesOnPage*(choosenPage - 1); i < linesOnPage*choosenPage && i < props.data.length; i++){
                shownData.push(props.data[i]);
            }
            setCurData(shownData);*/
        }
    },[props]);

    useEffect(()=>{
                // update pages
        let shownData = [];
        for(let i = linesOnPage*(choosenPage - 1); i < linesOnPage*choosenPage && i < searchedData.length; i++){
            shownData.push(searchedData[i]);
        }
        setCurData(shownData);
    }, [choosenPage, linesOnPage, searchedData, totalData]);
    
    useEffect(()=>{
        // search
        let searchedArr = [];
        if(searchStr !== '') {
            for (let i = 0; i < totalData.length; i++) {
                for (let itemProp in totalData[i]) {
                    if (('' + totalData[i][itemProp]).toLowerCase().includes(searchStr)) {
                        searchedArr.push(totalData[i]);
                        break;
                    }
                }
            }
            setSearchedData(searchedArr);
        } else {
            setSearchedData(totalData);
        }
    }, [searchStr, totalData])

    // save data after sort
    useEffect(() => {
        console.log(sortedTag);
        if(sortedTag){
            if(sortedTag.includes('+')) {
                setSearchedData([...searchedData.reverse()]);
                onPageClick(1)
            }
            else{
                setSearchedData([...searchedData.sort((a, b) => a[sortedTag] < b[sortedTag] ? -1 : a[sortedTag] > b[sortedTag] ? 1 : 0)]);
                onPageClick(1);
            }
        }
    }, [sortedTag]);

    return <div className='table'>
        <SuperPaginator page={choosenPage}
                        onPageClick={onPageClick}
                        linesTotal={searchStr !== '' ? searchedData.length : props.data && props.data !== [] ? props.data.length : 0}
                        linesOnPage={linesOnPage}
                        searchString={searchStr}/>
        <SuperLinesSelector lines={linesOnPage} setLines={setLinesOnPage}/>
        <SuperSearch pageClick={onPageClick} setStr={setSearchStr} />
        <SuperItemAdded />
        <table>
            <SuperHeader columns={columnNames} sortedTag={sortedTag} setSortedTag={setSortedTag}/>
            <SuperBody curData={curData} setCurData={setCurData} setItem={setViewItem}/>
        </table>
        <SuperViewForm columns={columnNames} item={viewItem} setItem={setViewItem}/>
    </div>
});

export default SuperTable;