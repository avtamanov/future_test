import React, {useEffect, useState} from 'react';

const SuperItemAdded = React.memo(() => {


    // TODO После заполнения всех инпутов активируется кнопка Добавить в таблицу которая вставляет заполненный ряд в начало таблицы

    const [isFormHidden, setIsFromHidden] = useState(false);
    /*useEffect(() => {
        const table = document.getElementsByClassName('add_table');
        console.log(table);
        for (let element in table) {
            if(element === 'length'){ break; }
            console.log(element);
            console.log(table[element]);
            console.log(table[element].style['visibility']);
            table[element].style['visibility'] = isFormHidden;
        }
    }, [isFormHidden]);*/

    const onAddClick = () => {
        console.log('add');
        setIsFromHidden(true);
    }

    const onSubmitClick = () => {
        console.log('submit');
        setIsFromHidden(false);
    }

    const onCancelClick = () => {
        console.log('cancel');
        setIsFromHidden(false);
    }

    return <div>
        <button className="add_button button_add" onClick={onAddClick}>Add item in table</button>
        {isFormHidden && <table className="add_table table">
            <tbody>
            <tr>
                <td>id</td>
                <td><input/></td>
            </tr>
            <tr>
                <td>firstName</td>
                <td><input/></td>
            </tr>
            <tr>
                <td>lastName</td>
                <td><input/></td>
            </tr>
            <tr>
                <td>email</td>
                <td><input/></td>
            </tr>
            <tr>
                <td>phone</td>
                <td><input/></td>
            </tr>
            <tr>
                <td>address</td>
                <td><input/></td>
            </tr>
            <tr>
                <td>description</td>
                <td><input/></td>
            </tr>
            </tbody>
        </table>}
        {isFormHidden && <button className="add_table button_submit" onClick={onSubmitClick}>Add item</button>}
        {isFormHidden && <button className="add_table button_cancel" onClick={onCancelClick}>Cancel</button>}
    </div>
});

export default SuperItemAdded;