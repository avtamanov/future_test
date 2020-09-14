import React from 'react';

const SuperViewFrom = React.memo(function ({columns, item, setItem}) {

    function hideViewForm(){
        setItem({visibility: 'hidden'});
    }

    // let counter = 0;
    return item.visibility === 'visible' && <div>
        <div>
            <div>Выбран пользователь <b>{item.data.firstName + ' ' + item.data.lastName}</b></div>
            <div>{'Описание:\n'}
                <i>{item.data.description}</i></div>
            <div>Адрес проживания: <b>{item.data.address.streetAddress}</b></div>
            <div>Город: <b>{item.data.address.city}</b></div>
            <div>Провинция/штат: <b>{item.data.address.state}</b></div>
            <div>Индекс: <b>{item.data.address.zip}</b></div>
        </div>
        <button onClick={hideViewForm}>close</button>
    </div>
});

export default SuperViewFrom;