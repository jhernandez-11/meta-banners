import Link from "next/link"
import styles from './index.module.scss'

const Header = (props) => (
    <header className={styles.header}>
        <div className={styles.header__icons}>
            <a href="https://www.opensea.io" target="_blank" rel="noopener noreferrer"><ion-icon name="boat-outline" style={{fontSize: '3.2rem'}}></ion-icon></a>
            <a href="#"><ion-icon name="logo-twitter" style={{fontSize: '3.2rem'}}></ion-icon></a>
            <a href="#"><ion-icon name="logo-instagram" style={{fontSize: '3.2rem'}}></ion-icon></a>
        </div>
        <div className={styles.header__links}>
            <a onClick={props.pageTwo}>about</a>
            <a onClick={props.pageThree}>roadmap</a>
            <a onClick={props.pageFour}>explore</a>
            <a onClick={props.pageFive}>devs</a>
        </div>
    </header>
)

export default Header