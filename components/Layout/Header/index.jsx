import { Container } from ".."
import styles from "./Header.module.css"

const Header = () => {
    return (
        <header className={styles.header}>
            <Container>
                <h2 style={{ margin: 0 }}>RTI Mate</h2>
            </Container>
        </header>
    )
}
export default Header