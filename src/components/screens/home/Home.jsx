import { useNavigate } from 'react-router-dom'

import Button from '../ui/button/Button'

import Layout from '../../layout/layout'

import styles from './Home.module.scss'

import { useAuth } from '../../hooks/useAuth'


function Home() {
  const {isAuth} = useAuth()

  const navigate = useNavigate()

  return (
    <Layout bgImage = '/public/images/home-bg.jpg'>
      <Button clickHandler={() => navigate(isAuth ? '/new-workout':
       '/auth')}>
        {isAuth ? 'New' : 'Sign in'}
      </Button>
      <h1 className={styles.heading}>
      EXERCISES FOR THE SHOULDERS
      </h1>
      {/*Counters*/}
    </Layout>
  )
}

export default Home
