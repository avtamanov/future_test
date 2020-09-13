import React from 'react';

const SuperSearch = React.memo(function({pageClick, setStr}){

    const onSearchClick = () => {
        let inputElem = document.getElementsByClassName('search_input')[0];
        setStr(inputElem.value.toLowerCase());
        pageClick(1);
    };

    const onSearchClear = () => {
        let inputElem = document.getElementsByClassName('search_input')[0];
        inputElem.value = '';
        setStr('');
        pageClick(1);
    };

    document.addEventListener('keydown', (event) => {
        if (event.key === 'Enter') {
            onSearchClick()
        }
    }, false);

    return <div>
        <input className='search_input' />
        <button onClick={onSearchClick}>Search</button>
        <button onClick={onSearchClear}>Clear filter</button>
    </div>
})

export default SuperSearch;