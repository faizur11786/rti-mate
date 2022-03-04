import TextInput from '@/components/Textinput'
import ProtectRoutes from 'HOC/ProtectRoutes'
import { useRouter } from 'next/router'
import { useState } from 'react'
import toast from 'react-hot-toast'
import { useDispatch } from 'react-redux'
import { login } from 'redux/actions/auth'
import styles from './auth.module.scss'

const Login = () => {
    const router = useRouter()
    const dispatch = useDispatch()
    const [values, setValues] = useState( {
        email: 'user12@gmail.com',
        referenceNo: 'RTIM5593892734BR'
    } )

    const loginhandler = ( e ) => {
        toast.dismiss()
        e.preventDefault()
        toast.promise( dispatch( login( values ) ), {
            loading: 'Please Wait...',
            success: ( res ) => {
                if ( res.status === 200 ) {
                    router.push( '/dashboard' )
                }
                return res.data.message
            },
            error: err => err.message,
        } )
    }
    return (
        <div className={styles.card}>
            <div className={styles.card__header}>
                <h1 className={styles.card__title}>Login</h1>
                <p className={styles.card__subtitle}>Sign in to your account</p>
            </div>
            <div className={styles.card__body}>
                <form onSubmit={loginhandler} className={styles.form}>
                    <TextInput label="Email Id"
                        name="Email"
                        type="email"
                        placeholder='Enter your Email Id'
                        value={values.email}
                        required />
                    <TextInput label="Ref No."
                        name="referenceNo"
                        type="text"
                        value={values.referenceNo}
                        placeholder='Enter your Refrance No.'
                        required />
                    <button type='submit' className="btn btn-primary">Login</button>
                </form>
            </div>
        </div>
    )
}

export default Login