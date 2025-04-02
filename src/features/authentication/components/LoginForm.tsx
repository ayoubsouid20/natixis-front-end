import './login-form.css'
import LIGHT from '../../../assets/light-bulb.png'
import Input from '../../../components/inputs/Input'
import Button from '../../../components/buttons/Button'
import { useEffect, useState } from 'react'

import { useAuthUser } from '../hooks/useAuthUser'
import Loader from '../../../components/Loader/Loader'
import { useSelector } from 'react-redux'
import { RootState } from '../../../store/store'
import { useNavigate } from 'react-router'

const LoginForm = () => {
    const { mutate, isPending } = useAuthUser()
    const navigate = useNavigate()
    const isUserAuthenticated = useSelector((state: RootState) => state.auth.token) !== null
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [showText, setShowText] = useState(false)

    useEffect(()=>{
        if(isUserAuthenticated)
            navigate('/products')
    },[isUserAuthenticated])


    const loginHandler = async () => {
        mutate({ username: email, password })
    }
    return (
        <div className='login-form-parent-container'>
            <h1>Login to Explore our Products</h1>
            <div className='login-form-container'>
                <div className='inputs-container'>
                    <Input label={'Email: '} type='email' value={email} onchangeFunc={setEmail}
                        placeholder='Enter your email'
                    />
                    <Input label={'Password: '} value={password} onchangeFunc={setPassword}
                        type={'password'}
                        placeholder='Enter your password'
                    />
                </div>
                {isPending ? <Loader/> : <Button title='Login' clickHandler={loginHandler}
                    extraStyle={{
                        fontSize: 25
                    }}
                />}
            </div>
            <img src={LIGHT} className='light-image'
                onClick={() => setShowText(!showText)}
                style={{
                    animation: !showText ? 'pulse 2s infinite' : 'none'
                }}
            />
            {showText && <h1 className='hint-text'>
                "Login Credentials are stored in H2 DB to faclitate the test you will find it
                in README file"
            </h1>}
        </div>
    )
}

export default LoginForm