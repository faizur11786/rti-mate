import React, { useEffect } from 'react'
import { useSelector } from 'react-redux'
import jwt from 'jsonwebtoken'
import { useRouter } from 'next/router'
import { useAppContext } from 'context/AppContext'
export default ( WrappedComponent, access ) => {
    const hocComponent = ( { ...props } ) => {
        const router = useRouter()
        const { state: { auth: { token } } } = useAppContext()
        // Decode Token
        const decode = jwt.decode( token || null )

        if ( decode && !access.includes( decode.role ) ) {
            return (
                <div style={{ textAlign: "center", minHeight: "40vh", margin: "4rem" }}>
                    <h1 style={{ margin: "1rem" }}>You are not authorized to access this page</h1>
                    <button className='btn btn-primary' onClick={() => router.back()}>Go Back</button>
                </div>
            )
        }
        useEffect( () => {
            if ( !token ) {
                router.push( '/login' )
            }
        }, [decode] )

        if ( router.asPath === '/login' ) {
            router.push( '/dashboard' )
        }
        return <WrappedComponent {...props} />
    }
    return hocComponent
}
