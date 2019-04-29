import React, { useState } from 'react';

function TodoForm(props) {

    const [value, setValue] = useState('');

    const submitForm = e => {
        e.preventDefault();
        if(!value) return;
        props.addTodo(value);
        setValue('');
    };

    return (
        <div className="form">
            <form onSubmit={ submitForm }>
                <label>Add a todo</label>
                <input value={ value } onChange={ e => setValue(e.target.value) } name="" className="input" />
            </form>

        </div>
    )
}



export default TodoForm;