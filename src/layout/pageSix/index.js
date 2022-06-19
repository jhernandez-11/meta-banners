import styles from './index.module.scss'
import Image from 'next/image'

const pageSix = (props) => (
    <div className={styles.pageSix}>
        <p>Meta Banners</p>
        <div className={styles.footer}>
            <h1>Follow &#9733;</h1>
            <a href="#"><ion-icon name="logo-twitter" style={{fontSize: '3.2rem', marginRight: '1.5rem', color: 'white'}}></ion-icon></a>
            <a href="#"><ion-icon name="logo-instagram" style={{fontSize: '3.2rem', color: 'white'}}></ion-icon></a>
        </div>
    </div>
)

export default pageSix