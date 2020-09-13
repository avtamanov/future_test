import React from 'react';

const SuperHeaderTag = React.memo(function({index, class_name, on_click, label, sortedTag}){

    const onClickHeaderSort = on_click.bind(undefined, label);

    return <th key={index} className={class_name} onClick={onClickHeaderSort}>
        {label + ' ' + (sortedTag !== label && sortedTag.substring(1) !== label ? '' :
            sortedTag.substring(0,1) === '+' ? '\u2B9F' : '\u2B9D')}
    </th>
});

export default SuperHeaderTag;