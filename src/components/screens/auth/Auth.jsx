import { useForm } from 'react-hook-form'

import { useState } from 'react'

import Button from '../ui/button/Button'

import Layout from '../../layout/layout'

import Field from '../ui/field/Field'

import Loader from '../ui/loader/Loader'

import styles from './Auth.module.scss'



const isLoading = false
const isLoadingAuth = false
const Auth = () => {
const [type, setType] = useState('auth')

    const {
        register,
        handleSubmit,
        formState: { errors }
    } = useForm({
        mode: 'onChange'
    })
    const onSubmit = data => {
        console.log(data)
    }
    return (
        <>
        <Layout heading='Sign in' bgImage='/public/images/auth-bg.jpg'/>
            <div className='wrapper-inner-page'>
                {(isLoading || isLoadingAuth) && <Loader/>}
                <form onSubmit={handleSubmit(onSubmit)}>
                    <Field
                        error={errors?.email?.message}
                        name='email'
                        register={register}
                        options={{
                            required: 'Email is required'
                        }}
                        type='text'
                        placeholder='Enter email'
                    />
                    <Field
                        error={errors?.password?.message}
                        name='password'
                        register={register}
                        options={{
                            required: 'Password is required'
                        }}
                        type='password'
                        placeholder='Enter password'
                    />
                    <div className={styles.wrapperButtons}>
                    <Button clickHandler={() => setType('auth')}>Sign in</Button>

                    <Button clickHandler={() => setType('reg')}>Sign up</Button>
                    </div>
                </form>
            </div>
            </>
    )
}

export default Auth
