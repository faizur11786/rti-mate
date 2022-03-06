import { PrivateLayout } from 'layout/private'
import React from 'react'

export default ( WrappedComponent ) => {
    const hocComponent = ( { ...props } ) => {
        return (
            <PrivateLayout>
                <WrappedComponent {...props} />
            </PrivateLayout>
        )
    }
    return hocComponent
}
