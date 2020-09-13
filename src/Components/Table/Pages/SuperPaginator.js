import React, {useEffect, useState} from 'react';


const SuperPageIcon = React.memo(function ({pageNum, onClick}) {

    onClick = onClick.bind(this, pageNum);

    return <button className={'page ' + pageNum} onClick={onClick}>{pageNum}</button>
});

const SuperPaginator = React.memo(function ({page, onPageClick, linesTotal, linesOnPage, searchString}) {

    const [pages, setPages] = useState(1);

    useEffect(()=>{
        // form paginator
        setPages(linesTotal / linesOnPage);
        onPageClick(page);
    }, [page, linesTotal, linesOnPage, searchString]);



    // form jsx
    let pageIcons = [];
    for(let i = 0; i < pages; i++){
        pageIcons.push(<SuperPageIcon key={i+1} pageNum={i+1} onClick={onPageClick}/>)
    }

    return <div className='paginator'>
        {pageIcons}
    </div>
});

export default SuperPaginator;