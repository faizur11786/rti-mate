import { useEffect, useState } from 'react'
import styles from '../styles/Home.module.scss'
import axios from "axios"

const loadScript = async ( url ) => {
  return new Promise( ( resolve ) => {
    const script = document.createElement( 'script' )
    script.src = url
    script.onload = () => {
      resolve( true )
    }
    script.onerror = () => {
      resolve( false )
    }
    document.body.appendChild( script )
  } )
}


export default function Home () {
  // const { token, user } = useSelector( state => state.auth )
  // const dispatch = useDispatch()
  // console.log( "token", token );
  const [amount, setAmount] = useState( 0 )
  const [first, setFirst] = useState( [] )
  const OpenRezorpay = async ( e ) => {
    e.preventDefault()
    const sdk = await loadScript( 'https://checkout.razorpay.com/v1/checkout.js' )

    if ( !sdk ) {
      return alert( 'Failed to load Razorpay SDK! Please reload page' )
    }
    const result = await axios.post( "/api/payment/create", {
      amount: amount * 100,
    },
      {
        headers: {
          // "Authorization": `"${token}"`,
        }
      }
    )
    // const { data } = useSWR( '/api/payment/create', fetcher )
    console.log( result );

    const options = {
      key: "rzp_test_6iPgcJxAqs4LRu",
      amount: Number( amount ) * 100,
      currency: "INR",
      name: "Faizur Rahman",
      description: "Test payment",
      image: "https://i.imgur.com/3g7nmJC.png",
      prefill: {
        name: '<YOUR NAME>',
        email: user.email || "",
        contact: user.mobile || "",
      },
      notes: {
        address: 'Example Corporate Office',
      },
    }
    const payObject = new window.Razorpay( options )
    payObject.open()
  }


  return (

    <div className={styles.container}>
      <h2>1. APPLY API CRAETED BY NEXT.JS BUT IT&apos;S NOT READY FOR PRODUCTION. I&apos;M CURRENTLY WORKING ON IT.</h2>
      <form onSubmit={OpenRezorpay}>
        <input type="number" required onChange={e => setAmount( e.target.value )} name='amout' />
        <button type='submit' className="btn btn-primary">Pay RS.{amount}
        </button>
      </form>
    </div>
  )
}