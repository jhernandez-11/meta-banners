import anime from 'animejs'
import styles from './index.module.scss'

const pageThree = (props) => {
    const animateColor = () => {
        if (typeof window !== 'undefined') {
            $(window).on('load scroll', () => {
                $(window).on('load scroll', () => {
                    let position = window.scrollY
                    let viewHeight = window.innerHeight

                    if (position > (viewHeight * 1.8)) {
                        anime({
                            targets: '#rocket',
                            opacity: 1,
                        })
                    }
                    
                    if (position > (viewHeight * 1.9)) {
                        anime({
                            targets: '#site',
                            opacity: 1,
                        })
                    }

                    if (position > (viewHeight * 2)) {
                        anime({
                            targets: '#spark',
                            opacity: 1,
                        })
                    }
                })
            });
        }

        if (typeof window !== 'undefined') {
            anime({
                targets: '#border',
                keyframes: [
                    {width: '90%'},
                    {width: '75%'},
                    {width: '81%'},
                    {width: '60%'},
                    {width: '87%'}
                  ],
                  loop: true,
                  duration: 6000
            })
        }
    }

    animateColor()

    return (
        <div id='pageThree' className={styles.pageThree}>
            <div className={styles.pageThree__icons}>
                <div className={styles.pageThree__icons__icon} id='rocket'>
                    <p className={styles.pageThree__icons__icon__text}>Jan. 2022 - Production starts for conceptual art. <br /> Official season one banners begin rollout.</p>
                    <div id='border' className={styles.pageThree__icons__icon__border}></div>
                </div>
                
                <div className={styles.pageThree__icons__icon2} id='site'>
                    <br />
                    <div id='border' className={styles.pageThree__icons__icon__border}></div>
                    <p className={styles.pageThree__icons__icon__text}>Feb. 2022 - Front-end development and UI for website begin. <br /> Season one banners continue production.</p>
                </div>
                <div className={styles.pageThree__icons__icon} id='spark'>
                    <p className={styles.pageThree__icons__icon__text}>Mar. 2022 - Website complete, listed on Opensea. <br /> Starting sales of banners for season one.</p>    
                    <div id='border' className={styles.pageThree__icons__icon__border}></div>
                </div>
            </div>
        </div>
    )
}

export default pageThree