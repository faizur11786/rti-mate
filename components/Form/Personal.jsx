import { useAppContext } from 'context/AppContext';
import React, { useState } from 'react'
import TextArea from '../TextArea';
import TextInput from '../Textinput';
import css from "./index.module.scss"

const PersonalDetalsForm = ( { setIsOpen } ) => {

    const { state, dispatch } = useAppContext();
    const { applicant, email, mobile, address } = state?.form
    const [parent, setParent] = useState( null );

    const updateParent = ( e ) => {
        switch ( parent ) {
            case "fatherName":
                dispatch( { type: "REMOVE_FORM_DATA", payload: { name: "husbandName", } } )
                dispatch( { type: "SAVE_FORM_DATA", payload: { name: "fatherName", value: e.target.value } } )
                break;
            case "husbandName":
                dispatch( { type: "REMOVE_FORM_DATA", payload: { name: "fatherName", } } )
                dispatch( { type: "SAVE_FORM_DATA", payload: { name: "husbandName", value: e.target.value } } )
                break;
            default:
                break;
        }
    }

    const submiteForm = ( e ) => {
        e.preventDefault()
        setIsOpen( 2 )
    }
    return (
        <>
            <form className={css.form} onSubmit={submiteForm}>
                <div className={css.row}>
                    <div className={css.col}>
                        <TextInput
                            onChange={( e ) => {
                                dispatch( { type: "SAVE_FORM_DATA", payload: { name: "applicant", value: e.target.value } } )
                            }}
                            defaultValue={applicant}
                            label="Applicant Name"
                            name="applicant"
                            type="text"
                            placeholder='Enter Your Name'
                            text="Provide Applicant Name"
                            required
                        />
                    </div>
                    <div className={css.col}>
                        <label htmlFor="father" className={css.label}>Father&apos;s/Husband&apos;s Name <span>*</span></label>
                        <div className={css.father}>
                            <div className={css.father_row}>
                                <select onClick={( e ) => {
                                    setParent( e.target.value )
                                }}>
                                    <option value="fatherName">Father&apos;s Name</option>
                                    <option value="husbandName">Husband&apos;s Name</option>
                                </select>
                            </div>
                            <input type="text"
                                onChange={( e ) => updateParent( e )}
                                placeholder='Enter Father/Husband Name'
                                className={css.input} />
                        </div>
                        <span className={css.text}>Provide Father&apos;s/Husband&apos;s Name</span>
                    </div>
                    <div className={css.col}>
                        <TextInput
                            onChange={( e ) => {
                                dispatch( { type: "SAVE_FORM_DATA", payload: { name: "email", value: e.target.value } } )
                            }}
                            defaultValue={email}
                            label="Email Id"
                            name="email"
                            type="email"
                            placeholder='Enter your Email Id'
                            text="Provide your email address"
                            required
                        />
                    </div>
                    <div className={css.col}>
                        <TextInput
                            onChange={( e ) => {
                                dispatch( { type: "SAVE_FORM_DATA", payload: { name: "mobile", value: e.target.value } } )
                            }}
                            defaultValue={mobile}
                            label="Mobile Number"
                            name="mobile"
                            type="number"
                            placeholder='Enter Mobile Number'
                            text="Provide 10 digit Mobile Number Without Zero"
                            required
                        />
                    </div>
                    <div className={css.col}>
                        <TextArea
                            onChange={( e ) => {
                                dispatch( { type: "SAVE_FORM_DATA", payload: { name: "address", value: e.target.value } } )
                            }}
                            defaultValue={address}
                            label="Your Address with PIN Code "
                            name="address"
                            type="address"
                            placeholder='Enter your Address with PIN Code'
                            text="Provide Your Address with PIN Code"
                            required
                        />
                    </div>
                    <div className={css.col}>
                        <button className='btn btn-primary btn-flex' type='submit'> Continue
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24">
                                <path d="M13.172 12l-4.95-4.95 1.414-1.414L16 12l-6.364 6.364-1.414-1.414z" />
                            </svg>
                        </button>
                    </div>
                </div>
            </form>
        </>
    )
}

export default PersonalDetalsForm