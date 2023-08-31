import {FC} from 'react'
import classes from './Header.module.scss'

interface headerProps {
    count: number;
}

const Header:FC<headerProps> = ({count}) => {
    return (
        <header className={classes.Header}>
            <h2 className={classes.Header__title}>Today</h2>
            <button className={classes.Header__addBtn}>
                +
            </button>
            <span className={classes.Header__counter}>{count}</span>
        </header>
    )
}

export default Header;