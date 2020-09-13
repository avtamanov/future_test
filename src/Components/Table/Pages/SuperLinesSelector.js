import React from 'react';

const SuperLinesSelector = React.memo(function ({lines, setLines}) {

    let onSelectorChange = () => {
        const selector = document.getElementsByClassName('lines_selector')[0];
        setLines(selector.value);
    }

    const selector = <input type="range"
                            min="10"
                            max="50"
                            step="1"
                            value={lines}
                            className='lines_selector'
                            onChange={onSelectorChange}/>;

    return <div>
        10
        {selector}
        50
        <b>{'\t|\t' + selector.props.value}</b>
    </div>
});

export default SuperLinesSelector;