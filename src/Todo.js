import React from 'react';

function Todo(props) {



    return (
        <div className="todo" style={{textDecoration: props.todo.isDone ? 'line-through' : ''}}>

            { props.todo.title }
            <div>
                <button onClick={ () => props.doneWithTodo(props.index) }>Done</button>
                <button onClick={ () => props.deleteTodo(props.index) }>X</button>

            </div>

        </div>
    )
}



export default Todo;