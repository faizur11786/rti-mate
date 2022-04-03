import { State } from 'country-state-city';
import { useAppContext } from 'context/AppContext';
import { createArticle } from 'actions/app';
import toast from 'react-hot-toast';
import css from "./index.module.scss"
import TextArea from '../TextArea';
import { loadScript } from 'utils';
import axios from 'axios';

const RTIQueryForm = ( { setIsOpen } ) => {

    const { state, dispatch } = useAppContext();
    const { orgState, rtiQuery, orgAddress } = state.form


    const OpenRezorpay = async ( res ) => {
        const { applicant } = res.article
        const { auth: { user } } = state
        const sdk = await loadScript( 'https://checkout.razorpay.com/v1/checkout.js' )

        if ( !sdk ) {
            return alert( 'Failed to load Razorpay SDK! Please reload page' )
        }
        let amount = 599;
        const result = await axios.post( "/api/payment/create", {
            amount: amount * 100,
            articleId: res.article._id,
        } );

        console.log( result.data.order );
        const { id, currency, amount: _amount } = result.data.order
        const options = {
            key: "rzp_test_6iPgcJxAqs4LRu",
            amount: _amount.toString(),
            currency: currency,
            name: applicant,
            description: rtiQuery,
            order_id: id,
            // image: "https://i.imgur.com/3g7nmJC.png",
            handler: async function ( response ) {
                const data = {
                    orderCreationId: order_id,
                    razorpayPaymentId: response.razorpay_payment_id,
                    razorpayOrderId: response.razorpay_order_id,
                    razorpaySignature: response.razorpay_signature,
                };

                console.log( "data ", data, response );
                const result = await axios.post( "/api/payment/success", data );
                console.log( "result", result );
                // alert( result.data.msg );
            },
        }
        const payObject = new window.Razorpay( options )
        payObject.open()
    }

    const submiteForm = ( e ) => {
        toast.dismiss()
        e.preventDefault()
        toast.promise( createArticle( state.form ), {
            loading: 'Please Wait...',
            success: ( res ) => {
                OpenRezorpay( res.data )
                return res.data.message
            },
            error: err => {
                if ( Array.isArray( err.error ) ) {
                    err.error.forEach( error => {
                        toast.error( error )
                    } )
                }
            },
        } )
    }

    return (
        <>
            <form action="" className={css.form}>
                <div className={css.row}>
                    <div className={css.col}>
                        <select onChange={( e ) => {
                            const splitState = e.target.value.split( "," );
                            dispatch( {
                                type: "SAVE_FORM_DATA", payload: {
                                    name: "orgState", value: splitState[0]
                                }
                            } )
                            dispatch( {
                                type: "SAVE_FORM_DATA", payload: {
                                    name: "isoCode", value: splitState[1]
                                }
                            } )
                        }}>
                            {State.getStatesOfCountry( "IN" ).map( ( state, index ) => (
                                <option key={index} value={`${state.name},${state.isoCode}`}>{`${state.name}`}</option>
                            ) )}
                        </select>
                    </div>
                    <div className={css.col}>
                        <TextArea
                            onChange={( e ) => {
                                dispatch( { type: "SAVE_FORM_DATA", payload: { name: "rtiQuery", value: e.target.value } } )
                            }}
                            defaultValue={rtiQuery}
                            label="Your RTI Query/Questions "
                            name="RTI Query"
                            type="text"
                            placeholder='Enter Your RTI Query/Questions'
                            text="Provide Your RTI Query/Questions"
                            required
                        />
                    </div>
                    <div className={css.col}>
                        <TextArea
                            onChange={( e ) => {
                                dispatch( { type: "SAVE_FORM_DATA", payload: { name: "orgAddress", value: e.target.value } } )
                            }}
                            defaultValue={orgAddress}
                            label="Name and Address of Organization where you want to file RTI"
                            name="RTI Query"
                            type="Address"
                            placeholder='Enter Organization Address'
                            text="Name and Address of Organization"
                            required
                        />
                    </div>
                    <div className={css.col}>
                        <div className={css.btn_group}>
                            <button
                                type='button'
                                className='btn btn-secondary btn-flex' onClick={() => {
                                    setIsOpen( 1 )
                                }}>
                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24">
                                    <path fill="none" d="M0 0h24v24H0z" />
                                    <path d="M10.828 12l4.95 4.95-1.414 1.414L8 12l6.364-6.364 1.414 1.414z" />
                                </svg>
                                Back
                            </button>
                            <button className='btn btn-primary' type='submit' onClick={submiteForm}>Submit</button>
                        </div>
                    </div>
                </div>
            </form>
        </>
    )
}

export default RTIQueryForm