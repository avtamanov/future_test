import React, {useEffect, useState} from 'react';

const SuperItemAdded = React.memo(({data, setData}) => {


    // TODO После заполнения всех инпутов активируется кнопка Добавить в таблицу которая вставляет заполненный ряд в начало таблицы
    // visible form or not
    const [isFormVisible, setIsFromVisible] = useState(false);

    // new table record
    const [newItem, setNewItem] = useState({
        id: '',
        firstName: '',
        lastName: '',
        email: '',
        phone: ''
    });

    // is field validate well, all true => accept avalible
    const [validator, setValidator] = useState({
        id: false,
        firstName: false,
        lastName: false,
        email: false,
        phone: false
    });

    useEffect(() => {
        let field = newItem.id;
        if(field.length < 1 || !Number.isInteger(+field)){
            setValidator({...validator, id: false});
            return;
        }
        setValidator({...validator, id: true});
    },[newItem.id]);

    useEffect(() => {
        let field = newItem.firstName;
        if(field.length < 1 || field.match(/[^A-Za-zА-Яа-я]/) !== null){
            setValidator({...validator, firstName: false});
            return;
        }
        setValidator({...validator, firstName: true});
    },[newItem.firstName]);

    useEffect(() => {
        let field = newItem.lastName;
        if(field.length < 1 || field.match(/[^A-Za-zА-Яа-я]/) !== null){
            setValidator({...validator, lastName: false});
            return;
        }
        setValidator({...validator, lastName: true});
    },[newItem.lastName]);

    useEffect(() => {
        let field = newItem.email;
        if(field.length < 1 || field.match(/[^A-Za-z0-9_@.]/) !== null || field.match(/\w+@\w+\.\w+/) === null){
            setValidator({...validator, email: false});
            return;
        }
        setValidator({...validator, email: true});
    },[newItem.email]);

    useEffect(() => {
        let field = newItem.phone;
        if(field.length < 1 || field.match(/[^0-9()-]/) !== null || field.match(/\(\d\d\d\)\d\d\d-\d\d\d\d\b/) === null){
            setValidator({...validator, phone: false});
            return;
        }
        setValidator({...validator, phone: true});
    },[newItem.phone]);

    const onAddClick = () => {
        setIsFromVisible(true);
    };

    const onSubmitClick = () => {
        let newData = [...data];
        newData.unshift(newItem);
        setData(newData);
        setValidator({
            id: false,
            firstName: false,
            lastName: false,
            email: false,
            phone: false
        });
        setIsFromVisible(false);
    };

    const onCancelClick = () => {
        setValidator({
            id: false,
            firstName: false,
            lastName: false,
            email: false,
            phone: false
        });
        setIsFromVisible(false);
    };

    return <div>
        <button className="add_button button_add" onClick={onAddClick}>Add item in table</button>
        {isFormVisible && <table className="add_table table">
            <tbody>
            <tr>
                <td>id</td>
                <td><input onChange={(e) => {setNewItem({...newItem, id: e.target.value});}}/></td>
                {!validator.id && <td>Заполните id целым числом!</td>}
            </tr>
            <tr>
                <td>firstName</td>
                <td><input onChange={(e) => {setNewItem({...newItem, firstName: e.target.value});}}/></td>
                {!validator.firstName && <td>Заполните имя латинскими или русскими буквами!</td>}
            </tr>
            <tr>
                <td>lastName</td>
                <td><input onChange={(e) => {setNewItem({...newItem, lastName: e.target.value});}}/></td>
                {!validator.lastName && <td>Заполните фимилию латинскими или русскими буквами!</td>}
            </tr>
            <tr>
                <td>email</td>
                <td><input onChange={(e) => {setNewItem({...newItem, email: e.target.value});}}/></td>
                {!validator.email && <td>Заполните email латинскими буквами в формате ***@***.***!</td>}
            </tr>
            <tr>
                <td>phone</td>
                <td><input onChange={(e) => {setNewItem({...newItem, phone: e.target.value});}}/></td>
                {!validator.phone && <td>Заполните телефон в формате (***)***-****!</td>}
            </tr>
            </tbody>
        </table>}
        {isFormVisible && <button className="add_table button_submit"
                                  onClick={onSubmitClick}
                                  disabled={!(validator.id && validator.firstName && validator.lastName &&
                                    validator.email && validator.phone)}
                                 >Add item</button>}
        {isFormVisible && <button className="add_table button_cancel"
                                  onClick={onCancelClick}>Cancel</button>}
    </div>
});

export default SuperItemAdded;