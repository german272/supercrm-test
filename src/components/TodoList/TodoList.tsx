import { FC, ReactNode } from "react";
import { ITodo } from "../../types/types"
import classes from './TodoList.module.scss'
import Todo from "../Todo/Todo";


interface todoListProps {
    todos: ITodo[];
}

const TodoList:FC<todoListProps> = ({todos}) => {
    return (
        <ul className={classes.List}>
            {todos.map(todo => (
                <li key={todo.id} className={classes.List__item}>
                    <Todo todo={todo}/>
                </li>
            ))}
        </ul>
    )
}

export default TodoList