import TextArea from './TextArea'
import Textinput from './Textinput'
import styles from '../styles/Form.module.scss'

const Form1 = () => {
    return (
        <>
            <div className={styles.heading1}>
                <div className={styles.heading_col}>
                    <span className={styles.heading_number1}> 1 </span>
                    <p className={styles.heading_text}>Personal Details</p>
                </div>
                <div className={styles.heading_col}>
                    <span className={styles.heading_number2}> 2 </span>
                    <p className={styles.heading_text}> RTI Details </p>
                </div>
            </div>
            <form action="" className={styles.form}>
                <div className={styles.row}>
                    <div className={styles.col}>
                        <Textinput
                            label="Applicant Name"
                            name="Name"
                            type="text"
                            placeholder='Enter Your Name'
                            text="Provide Applicant Name"
                            required
                        />
                    </div>

                    <div className={styles.col}>
                        <label htmlFor="" className={styles.label}>Father's/Husband's Name <span>*</span></label>
                        <div className={styles.father}>
                            <div className={styles.father_row}>
                                <div className={styles.father_col}>
                                    <input type="radio" className={styles.btn_check} name="btnradio" id="father" />
                                    <label className={styles.checked} htmlFor="father">Father's Name</label>
                                </div>
                                <div className={styles.father_col}>
                                    <input type="radio" className={styles.btn_check} name="btnradio" id="husband" />
                                    <label className={styles.checked} htmlFor="husband">Husband's Name</label>
                                </div>
                            </div>
                            <input type="text" placeholder='Enter Father/Husband Name' className={styles.input} />
                        </div>
                        <span className={styles.text}>Provide Father's/Husband's Name</span>
                    </div>

                    <div className={styles.col}>
                        <Textinput
                            label="Mobile Number"
                            name="Number"
                            type="number"
                            placeholder='Enter Mobile Number'
                            text="Provide 10 digit Mobile Number Without Zero"
                            required
                        />
                    </div>
                    <div className={styles.col}>
                        <Textinput
                            label="Email Id"
                            name="Email"
                            type="email"
                            placeholder='Enter your Email Id'
                            text="Provide your email address"
                            required
                        />
                    </div>
                    <div className={styles.col}>
                        <TextArea
                            label="Your Address with PIN Code "
                            name="Address"
                            type="address"
                            placeholder='Enter your Address with PIN Code'
                            text="Provide Your Address with PIN Code"
                            required
                        />
                    </div>
                    <div className={styles.col}>
                        <button className='btn btn-primary btn-flex'> Continue
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24">
                                <path fill="none" d="M0 0h24v24H0z" />
                                <path d="M13.172 12l-4.95-4.95 1.414-1.414L16 12l-6.364 6.364-1.414-1.414z" />
                            </svg>
                        </button>
                    </div>
                </div>
            </form>
        </>
    )
}

export default Form1