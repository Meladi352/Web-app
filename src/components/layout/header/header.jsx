import { FaUserAlt } from 'react-icons/fa'
import { IoMdArrowBack } from 'react-icons/io'
import { useAuth } from '../../hooks/useAuth'
import styles from './Header.module.scss'
import Hamburger from '../hamburger/hamburger'
import { useNavigate, useLocation } from 'react-router'


const Header = ({ backLink = '' }) => {
    /*ToDo:React router useHistory*/

    const {pathname} = useLocation()
    const navigate= useNavigate()

    const { isAuth } = useAuth()

    return (
        <header className={styles.header}>
            {pathname!== '/' ? (
            <button onClick={()=> {
                navigate(backLink)
                }}
                >
                <IoMdArrowBack fill= '#fff' fontSize={30}/>
            </button>
            ):<button onClick={()=> {
                navigate('/profile')
                }}
                >
                <FaUserAlt fill= '#fff' fontSize={25}/>
            </button>}
            {/*User profile */}
            <Hamburger/>
        </header>
    )
}

export default Header