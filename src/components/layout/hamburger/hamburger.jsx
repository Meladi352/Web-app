import { RxHamburgerMenu } from 'react-icons/rx'
import { VscClose } from 'react-icons/vsc'

import { useOnClickOutside } from "../../hooks/useOnClickOutside"

import styles from './Hamburger.module.scss'
import Menu from './menu.jsx'



const Hamburger = () => {
    const { isShow, ref, setIsShow } = useOnClickOutside(false)


    return (
        <div className={styles.wrapper} ref={ref}>
            <button onClick={() => setIsShow(!isShow)}>
                {isShow ? <VscClose /> : <RxHamburgerMenu />}
            </button>
            <Menu isShow={isShow} />
        </div>
    )
}
export default Hamburger
