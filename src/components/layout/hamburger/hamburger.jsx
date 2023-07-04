import { useState } from "react"
import styles from './Hamburger.module.scss'
import {RxHamburgerMenu} from 'react-icons/rx'
import {VscClose} from 'react-icons/vsc'
import Menu from './menu.jsx'


const Hamburger = () => {
    const [isShow, setIsShow] = useState(false)


    return (
        <div className={styles.wrapper}>
            <button onClick={() => setIsShow(!isShow)}>
            {isShow ? <VscClose color='white'/>: <RxHamburgerMenu color ='white'/>}
            </button>
            <Menu isShow={isShow}/>
        </div>
    )
}
export default Hamburger
