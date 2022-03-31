import styles from './index.module.scss'
import Image from 'next/image'

const pageSix = (props) => (
    <div className={styles.pageSix}>
        <div className={styles.pageSix__imgCont}>
            <Image src='/meta-banners_logo.png' height={150} width={150} alt="logo" />
        </div>
    </div>
)

export default pageSix