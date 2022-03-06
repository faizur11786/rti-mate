import { AdminLayout } from 'HOC'
import { useRouter } from 'next/router'
import React from 'react'

const Details = () => {
    const router = useRouter()
    const { refNo } = router.query
    return (
        <>
            <button
                className='btn btn-primary'
                onClick={() => {
                    router.back()
                }}
            >Back</button>
            <div>{refNo}</div>
        </>
    )
}

export default AdminLayout( Details )