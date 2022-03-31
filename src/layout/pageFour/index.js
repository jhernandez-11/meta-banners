import styles from './index.module.scss'
import Image from 'next/image'

const pageFour = (props) => (
    <div id='pageFour' className={styles.pageFour}>
        <div className={styles.pageFour__heading}>
            <p>Purchase.</p>
        </div>
        <div className={styles.pageFour__image}>
            <Image src="/opensea_custom.png" height={300} width={300} alt='opeasea logo' />
            <p className={styles.pageFour__image__text}>ありがと！！！</p>
            <a href="https://www.opensea.io" target="_blank" rel="noopener noreferrer"></a>
        </div>
        <div className={styles.pageFour__info}>
            <p>NFTs are now live on Opensea.</p>
            <p>Seasons will be limited to a quarterly basis.</p>
        </div>
    </div>
)

export default pageFour