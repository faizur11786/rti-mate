import styles from '../styles/Footer.module.scss'
import Link from 'next/link'

const Footer = () => {
  return (
    <footer className={styles.footer}>
      <div className="container">
        <div className={styles.content}>
          <div className={styles.row}>
            <div className={styles.col}>
              <div className={styles.links}>
                <h3 className={styles.title}>Site Link</h3>
                <ul className={styles.list}>
                  <li className={styles.item} >
                    <Link href="#"><a >About Us</a></Link>
                  </li>
                  <li className={styles.item}>
                    <Link href="#"><a>Contact Us</a></Link>
                  </li>
                  <li className={styles.item}>
                    <Link href="#"><a href="#">Privacy Policy</a></Link>
                  </li>
                  <li className={styles.item}>
                    <Link href="#"><a href="#">Terms of Use</a></Link>
                  </li>
                  <li className={styles.item}>
                    <Link href="#"><a href="#">Apply Now</a></Link>
                  </li>
                  <li className={styles.item}>
                    <Link href="#"><a href="#">FAQs</a></Link>
                  </li>
                  <li className={styles.item}>
                    <Link href="#"><a href="#">Blog</a></Link>
                  </li>
                </ul>
              </div>
            </div>
            <div className={styles.col}>
              <div className={styles.links}>
                <h3 className={styles.title}>RTI City Link</h3>
                <ul className={styles.list}>
                  <li className={styles.item}>
                    <Link href="#"><a >RTI in New Delhi</a></Link>
                  </li>
                  <li className={styles.item}>
                    <Link href="#"><a>RTI in Mumbai</a></Link>
                  </li>
                  <li className={styles.item}>
                    <Link href="#"><a>RTI in Chennai</a></Link>
                  </li>
                  <li className={styles.item}>
                    <Link href="#"><a>RTI in Kolkata</a></Link>
                  </li>
                  <li className={styles.item}>
                    <Link href="#"><a>RTI in Bangalore</a></Link>
                  </li>
                  <li className={styles.item}>
                    <Link href="#"><a>RTI in Chandigarh</a></Link>
                  </li>
                  <li className={styles.item}>
                    <Link href="#"><a>RTI in Patna</a></Link>
                  </li>
                </ul>
              </div>
            </div>
            <div className={styles.col}>
              <div className={styles.links}>
                <h3 className={styles.title}>Online RTI State Link</h3>
                <ul className={styles.list}>
                  <li className={styles.item}>
                    <Link href="#" ><a>RTI Online Andhra Pradesh</a></Link>
                  </li>
                  <li className={styles.item}>
                    <Link href="#" ><a>RTI Online Chhattisgarh</a></Link>
                  </li>
                  <li className={styles.item}>
                    <Link href="#" ><a>RTI Online Delhi</a></Link>
                  </li>
                  <li className={styles.item}>
                    <Link href="#" ><a>RTI Online Gujarat</a></Link>
                  </li>
                  <li className={styles.item}>
                    <Link href="#" ><a>RTI Online Himachal Pradesh</a></Link>
                  </li>
                  <li className={styles.item}>
                    <Link href="#" ><a>RTI Online Karnataka</a></Link>
                  </li>
                  <li className={styles.item}>
                    <Link href="#" ><a>RTI Online Madhya Pradesh</a></Link>
                  </li>
                </ul>
              </div>
            </div>
            <div className={styles.col}>
              <div className={styles.links}>
                <h3 className={styles.title}>Contacts</h3>
                <ul className={styles.list}>
                  <li className={styles.item}>
                    <Link href="#" ><a>Email: admin@filertionline.in</a></Link>
                  </li>
                  <li className={styles.item}>
                    <Link href="#" ><a>Call : 7838597250</a></Link>
                  </li>
                  <li className={styles.item}>
                    <Link href="#" ><a>Chat : Click4Chat</a></Link>
                  </li>
                  <li className={styles.item}>
                    <Link href="#" ><a>Time (08AM-2PM)</a></Link>
                  </li>
                  <li className={styles.item}>
                    <Link href="#" ><a>(Call on MON-SAT)</a></Link>
                  </li>

                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer;