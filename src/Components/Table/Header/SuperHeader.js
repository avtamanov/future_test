import React, {useCallback} from 'react';
import SuperHeaderTag from "./SuperHeaderTag";

const SuperHeader = React.memo(function({columns, sortedTag, setSortedTag}){

    let  onClickHeaderSort = useCallback((label) => {
        // tag was already selected, invert sort
        if (label === sortedTag) {
            setSortedTag('+' + label);
        } else {
            setSortedTag(label);
        }
    }, [sortedTag, setSortedTag]);

    return <thead>
        <tr>
            {(columns.length > 0 &&
                columns.map((label, index) => <SuperHeaderTag key={index}
                                                              index={index}
                                                              class_name={'header '+label}
                                                              on_click={onClickHeaderSort}
                                                              label={label}
                                                              sortedTag={sortedTag}/>)) || <th>header</th>}
        </tr>
    </thead>
});

export default SuperHeader;