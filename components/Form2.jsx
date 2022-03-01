
import TextArea from './TextArea'
import Textinput from './Textinput'
import styles from '../styles/Form.module.scss'
import Dropdown from './Layout/Dropdown'
const Form2 = () => {
  return (
      <>
          <div className={styles.heading2}>
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
                        <TextArea
                            label="Your RTI Query/Questions "
                            name="RTI Query"
                            type="text"
                            placeholder='Enter Your RTI Query/Questions'
                            text="Provide Your RTI Query/Questions"
                            required
                        />
                    </div>
                    <div className={styles.col}>
                        <TextArea
                            label="Name and Address of Organization where you want to file RTI"
                            name="RTI Query"
                            type="Address"
                            placeholder='Enter Organization Address'
                            text="Name and Address of Organization"
                            required
                        />
                  </div>
                  <div className={styles.col}>
                      <Dropdown
                          label="Name and Address of Organization where you want to file RTI"
                      />
                  </div>
                    <div className={styles.col}>
                      <p><b>Fee Includes :</b> Shipping Charge + Drafting Fee + Processing Fee +RTI government fees</p>
                    </div>
                    <div className={styles.col}>
                      <p><b>Note :</b> If you are asking for photocopy of any documents through rti, then you will have to pay extra for it separately, according to the pages.</p>
                    </div>
                    <div className={styles.col}>
                        <div className={styles.btn_group}>
                          <button className='btn btn-secondary btn-flex'>
                              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24">
                                  <path fill="none" d="M0 0h24v24H0z" />
                                  <path d="M10.828 12l4.95 4.95-1.414 1.414L8 12l6.364-6.364 1.414 1.414z" />
                              </svg>
                              Back
                          </button>
                            <button className='btn btn-primary'>Submit</button>
                        </div>
                    </div>
                </div>
            </form>
      </>
  )
}

export default Form2