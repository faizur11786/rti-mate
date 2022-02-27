import TextArea from './TextArea'
import Textinput from './Textinput'
import styles from '../styles/Form.module.scss'

const Form = () => {
    return (
        <>

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
                        <label htmlFor="">Father's/Husband's Name</label>
                        <div className={styles.father}>
                            <div className={styles.father_row}>
                                <div className={styles.father_col}>
                                    <input type="radio" className={styles.btn_check} name="btnradio" id="father" checked />
                                    <label className={styles.checked} for="father">Father's Name</label>
                                </div>
                                <div className={styles.father_col}>
                                    <input type="radio" className={styles.btn_check} name="btnradio" id="husband" />
                                    <label className={styles.checked} for="husband">Husband's Name</label>
                                </div>
                            </div>
                            <input type="text" placeholder='Enter Father/Husband Name' className={styles.input} />

                        </div>
                        <span>Provide Father's/Husband's Name</span>
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
                        <button className='btn btn-primary'> Continue</button>
                    </div>
                </div>
            </form>
        </>
    )
}

export default Form