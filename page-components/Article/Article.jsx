import { AdminLayout } from 'HOC'
import { useEffect, useState } from 'react'
import css from "./index.module.scss"
import { getArticle } from "../../actions/app"
import Link from 'next/link'

const Article = () => {

    const [data, setData] = useState( null )
    const [isLoading, setLoading] = useState( false )

    useEffect( () => {
        setLoading( true )
        getArticle()
            .then(
                response => {
                    setData( response.data.articles )
                    setLoading( false )
                },
                error => {
                    console.log( "error", error );
                    setLoading( false )
                }
            )
    }, [] )

    if ( isLoading ) return <p>Loading...</p>
    if ( !data ) return <p>No profile data</p>


    return (
        <div className={css.articles}>
            {data.map( ( article, index ) => (
                <Link href={`article/${article.referenceNo}`} key={index}>
                    <div className={css.article}>
                        <span>{article.referenceNo}</span>
                        <h1>{article.orgState}</h1>
                        <p>{article.orgAddress}</p>
                    </div>
                </Link>
            ) )}
        </div>
    )
}

export default AdminLayout( Article )