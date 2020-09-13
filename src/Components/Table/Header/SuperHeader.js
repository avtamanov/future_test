import React, {useCallback} from 'react';
import SuperHeaderTag from "./SuperHeaderTag";

const SuperHeader = React.memo(function({columns, sortedTag, setSortedTag}){

    let  onClickHeaderSort = useCallback((label) => {
        if (label === sortedTag) { // tag was already selected, invert sort
            setSortedTag('+' + label);
        } else {
            setSortedTag(label);
        }
    }, [sortedTag, setSortedTag]);

    return <thead>{/*div header*/}
        <tr>{/*real header*/}
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