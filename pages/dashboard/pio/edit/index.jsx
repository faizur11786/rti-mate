import ProtectRoutes from 'HOC/ProtectRoutes'
import React from 'react'

const EditPIO = () => {
    return (
        <div>EditPIO</div>
    )
}

export default ProtectRoutes( EditPIO, ["admin"] )