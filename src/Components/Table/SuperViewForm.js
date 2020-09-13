import React from 'react';

const SuperViewFrom = React.memo(function ({columns, item, setItem}) {
    /*function addressConcatenation(data){
        let tempAddress = '';
        if(data !== undefined && data !== {} && data['address'] !== undefined){
            tempAddress = data['address']['streetAddress'] + ' ' + data['address']['city'] + ' '
                + data['address']['state']+ ' ' + data['address']['zip'];
        }
        return tempAddress;
    }*/

    function hideViewForm(){
        setItem({visibility: 'hidden'});
    }

    // let counter = 0;
    return item.visibility === 'visible' && <div>
        {/*<table>
            <tbody>
            {columns.map((col) => <tr key={counter++}>
                <td>{col}</td>
                <td>{col === 'address' ? addressConcatenation(item.data) : item.data[col]}</td>
            </tr>)}
            </tbody>
        </table>*/}
        <div>
            <div>Выбран пользователь <b>{item.data.firstName + ' ' + item.data.lastName}</b></div>
            <div>Описание:
                <textarea>{item.data.description}</textarea></div>
            <div>Адрес проживания: <b>{item.data.address.streetAddress}</b></div>
            <div>Город: <b>{item.data.address.city}</b></div>
            <div>Провинция/штат: <b>{item.data.address.state}</b></div>
            <div>Индекс: <b>{item.data.address.zip}</b></div>
        </div>
        <button onClick={hideViewForm}>close</button>
    </div>
});

export default SuperViewFrom;