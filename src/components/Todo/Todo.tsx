import {FC} from 'react'
import { ITodo } from '../../types/types';
import classes from './Todo.module.scss'
import {faker} from '@faker-js/faker';
import avatar from '../../img/Img.svg'

interface todoProps {
    todo: ITodo;
}

const Todo:FC<todoProps> = ({todo}) => {
    const randomDescription = faker.lorem.words({min: 3, max: 20})
    

    return (
        <div className={classes.Todo}>
            <label className={classes.Todo__title}>
                <input className={classes.Todo__check} type="checkbox" checked={todo.completed}/>
                {todo.title}
            </label>
            <div className={classes.Todo__dates}>
                <span className={classes.Todo__date}>
                    Oct 12, 01:00 PM
                </span>
                <span className={classes.Todo__date}>
                    Oct 01, 02:00 PM
                </span>
            </div>
            <p className={classes.Todo__description}>
                {randomDescription}
            </p>

            <div className={classes.Todo__footer}>
                <ul className={classes.Todo__tags}>
                    <li className={classes.Todo__tag}>{faker.lorem.word()}</li>
                    <li className={classes.Todo__tag}>{faker.lorem.word()}</li>
                </ul>
                <img src={avatar} alt="avatar" className={classes.Todo__avatar}/>
            </div>
        </div>
    )
}

export default Todo;