import React from 'react';


const SuperBody = React.memo(function({curData, sortedTag, setCurData, setItem}){

    function onItemClick(i){
        setItem({data: curData[i], visibility: 'visible'});
    }

    function dataTablePresentation(curData){
        if(curData && curData.length > 0){
            let resultArr = [];
            for(let i = 0; i < curData.length; i++){
                let tempRow = [];
                let propCounter = 0;
                for(let prop in curData[i]){
                    if(prop !== 'address') tempRow.push(<td className={'column '+prop}
                                                            key={propCounter++}>{curData[i][prop]}</td>);
                    else if(prop === 'address') {
                        // {streetAddress, city, state, zip}
                        let tempAddress = '';
                        for(let position in curData[i][prop]){
                            tempAddress += curData[i][prop][position] + ' ';
                        }
                        tempRow.push(<td className={'column '+prop}
                                         key={propCounter++}>{tempAddress}</td>);
                    }
                }
                resultArr.push(<tr className={'row '+i}
                                   key={i}
                                   onClick={onItemClick.bind({},i)}>{tempRow}</tr>);
            }
            return resultArr;
        } else {
            return <tr><td>empty data</td></tr>;
        }
        }

    return <tbody>
        <tr><td>{sortedTag}</td></tr>
        {dataTablePresentation(curData) || <tr><td>body</td></tr>}
    </tbody>
});

export default SuperBody;