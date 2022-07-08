import { useState } from "react";


let id = 0;
const Todo = (props) => (
    <div>
        <input onClick={() => props.check(props.todo.id)} checked={props.todo.done} type='checkbox' />
        <button onClick={() => props.delete(props.todo.id)}>Delete</button>
        <span>{props.todo.todo}</span>
    </div>
)

const TodoApp = () => {
    const [todos, setTodos] = useState([{
        id: id,
        todo: 'Hey',
        done: true
    }])

    const checkTodo = (id) => {
        setTodos(prevTodos => (
            prevTodos.map(todo => {
                if (todo.id !== id) return todo
                return {
                    id: todo.id,
                    todo: todo.todo,
                    done: !todo.done
                }
            })
        ))
    }

    const deleteTodo = (id) => {
        setTodos(prevTodos => (
            prevTodos.filter(todo => (
                todo.id !== id
            ))
        ))
    }

    const addTodo = () => {
        id++
        const todo = document.getElementById('todo').value;
        setTodos(prevTodos => (
            [...prevTodos,
            {
                id: id,
                todo,
                done: false
            }]
        ))

        document.getElementById('todo').value = ''
    }

    return (
        <>
            <div>
                <h4>You have {todos.length} todos</h4>
                <h4>You have {todos.filter(todo => (
                    todo.done === true
                )).length} checked todos</h4>
            </div>
            <input id="todo" type='text' />
            <button onClick={addTodo} >Add Todo</button>
            <div>
                {
                    todos.map(todo => {
                        return (
                            <Todo check={checkTodo} delete={deleteTodo} todo={todo} />
                        )
                    })
                }
            </div>
        </>
    )
};

export default TodoApp;