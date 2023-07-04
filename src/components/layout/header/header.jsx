import { FiArrowLeft } from 'react-icons/fi'
import { useAuth } from '../../hooks/useAuth'
import styles from './Header.module.scss'
import Hamburger from '../hamburger/hamburger'

const Header = ({ backLink }) => {
    /*ToDo:React router useHistory*/

    const { isAuth } = useAuth()

    return (
        <header className={styles.header}>
            <button onClick={()=> {}}>
                <FiArrowLeft />
            </button>
            {/*User profile */}
            <Hamburger/>
        </header>
    )
}

export default Header