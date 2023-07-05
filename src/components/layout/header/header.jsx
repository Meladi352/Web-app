import { IoMdArrowBack } from 'react-icons/io'
import { useAuth } from '../../hooks/useAuth'
import styles from './Header.module.scss'
import Hamburger from '../hamburger/hamburger'

const Header = ({ backLink }) => {
    /*ToDo:React router useHistory*/

    const { isAuth } = useAuth()

    return (
        <header className={styles.header}>
            <button onClick={()=> {}}>
                <IoMdArrowBack fill= '#fff' fontSize={30}/>
            </button>
            {/*User profile */}
            <Hamburger/>
        </header>
    )
}

export default Header