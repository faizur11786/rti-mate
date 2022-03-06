import { Edit } from '@/page-components/PIO'
import ProtectRoutes from 'HOC/ProtectRoutes'
import React from 'react'

const EditPIOPage = () => {
    return (
        <>
            <Edit />
        </>
    )
}

export default ProtectRoutes( EditPIOPage, ["user", "admin"] )