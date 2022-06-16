import styles from './index.module.scss'
import Image from 'next/image'

const pageFive = (props) => (
    <div id='pageFive' className={styles.pageFive}>
        <div className={styles.pageFive__textContainer}>
            <p className={styles.pageFive__textContainer__heading}>Known as my alias <span className={styles.pageFive__textContainer__heading__span}>Hyouka</span>: I&apos;m a web developer and graphic artist. As a recent college graduate,  I started this project solo but will expand with a team in hopes of seeing my vision fruition. In addition to being a savvy tech sorcerer, I also enjoy watching anime, reading novels, and traveling.</p>
        </div>
        <div className={styles.pageFive__profileContainer}>
            <Image src='/fushi.png' layout="fill" alt='hyouka pic' />
        </div>
    </div>
)

export default pageFive