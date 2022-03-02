import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.scss'

export default function Home () {

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

  const OpenRezorpay = async () => {
    const sdk = await loadScript( 'https://checkout.razorpay.com/v1/checkout.js' )

    if ( !sdk ) {
      return alert( 'Failed to load Razorpay SDK! Please reload page' )
    }

    const options = {
      key: "rzp_test_6iPgcJxAqs4LRu",
      amount: "1000",
      currency: "INR",
      name: "Faizur Rahman",
      description: "Test payment",
      image: "https://i.imgur.com/3g7nmJC.png",
      prefill: {
        name: '<YOUR NAME>',
        email: 'example@example.com',
        contact: '9999999999',
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
      <button onClick={OpenRezorpay} className="btn btn-primary">Pay RS.100</button>
    </div>
  )
}
