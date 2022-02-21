import anime from 'animejs'
import styles from './index.module.scss'

const pageThree = (props) => {
    const animateColor = () => {
        if (typeof window !== 'undefined') {
            const startOne = () => {
                anime({
                    targets: '#rocket',
                    keyframes: [
                        {color: '#64c1ff'},
                        {color: '#fff'}
                    ],
                    duration: 3000,
                    complete: () => startTwo()
                })
            }
            
            const startTwo = () => {
                anime({
                    targets: '#site',
                    keyframes: [
                        {color: '#64c1ff'},
                        {color: '#fff'}
                    ],
                    duration: 3000,
                    complete: () => startThree()
                })
            }

            const startThree = () => {
                anime({
                    targets: '#spark',
                    keyframes: [
                        {color: '#64c1ff'},
                        {color: '#fff'}
                    ],
                    duration: 3000,
                    complete: () => startOne()
                })
            }

            startOne()
        }
    }

    animateColor()

    return (
        <div id='pageThree' className={styles.pageThree}>
            <div className={styles.pageThree__icons}>
                <div className={styles.pageThree__icons__icon1} id='rocket'>
                    <ion-icon name="rocket-outline"></ion-icon>
                </div>

                <p className={styles.pageThree__text1}>Project Launched</p>

                <div className={styles.pageThree__icons__icon2}>
                    <ion-icon name="return-down-forward-outline"></ion-icon>
                </div>
                <div className={styles.pageThree__icons__icon3} id='site'>
                    <ion-icon name="browsers-outline"></ion-icon>
                </div>

                <p className={styles.pageThree__text2}>Website Initiated</p>

                <div className={styles.pageThree__icons__icon4}>
                    <ion-icon name="return-down-forward-outline"></ion-icon>
                </div>

                <p className={styles.pageThree__text3}>Listed on Opensea</p>

                <div className={styles.pageThree__icons__icon5} id='spark'>
                    <ion-icon name="sparkles-outline"></ion-icon>                
                </div>
            </div>
        </div>
    )
}

export default pageThree