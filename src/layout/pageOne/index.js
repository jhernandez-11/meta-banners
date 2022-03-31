import styles from './index.module.scss'
import HeaderOne from '../../components/header/index'
import anime from 'animejs/lib/anime';
import { Component } from 'react/cjs/react.production.min';

class PageOne extends Component {
    state = {
        load: true
    }

    componentDidMount() {
        jQuery.extend(jQuery.easing, {
            easeOutQuart: function (x, t, b, c, d) {
              return -c * ((t = t / d - 1) * t * t * t - 1) + b;
            }
        });

        $('#up').hide('slow')
        anime({
            targets: '#ib p',
            color: '#ffff59',
            duration: 3000,
            delay: anime.stagger(200, {grid: [11, 1], from: 'center'}),
            easing: 'easeInOutSine',
        });
    }

    iconAnimeOne() {
        anime({
            targets: '#d-icon',
            keyframes: [
                {translateY: 6},
                {translateY: 0},
                {translateY: 6},
                {translateY: 0}
              ],
              easing: 'steps(3)',
              duration: 3000
        })
    }

    page(pageId) {
        if (typeof window !== 'undefined') {
            let page = document.querySelector(`#page${pageId}`);
            page.scrollIntoView({behavior: "smooth"});
        }
    }

    topPage() {
        if (typeof window !== 'undefined') {
            $("html, body").velocity({ scrollTop: 0 }, "slow");
        }
    }

    render() {
        if (typeof window !== 'undefined') {
            $(window).on('load scroll', () => {
                let sc = $(window).scrollTop();
                $('#ib').css({
                    'transform': 'translateY(' + sc / 9 + 'px)'
                  });
            });

            $(window).on('load scroll', () => {
                let position = window.scrollY
                let viewHeight = window.innerHeight
                if (position >= viewHeight) {
                    $('#up').show('slow')
                } else {
                    $('#up').hide('slow')
                }
            })
        }

        
        return (
            <div className={styles.pageOne} id="pageOne">
                <HeaderOne 
                    pageTwo={() => this.page('Two')}
                    pageThree={() => this.page('Three')}
                    pageFour={() => this.page('Four')}
                    pageFive={() => this.page('Five')}
                 />
                <div className={styles.pageOne__splash}>
                    <div id='ib' className={styles.pageOne__title}>
                        <p>m</p>
                        <p>e</p>
                        <p>t</p>
                        <p style={{'marginRight': '3rem'}}>a</p>
                        <p>b</p>
                        <p>a</p>
                        <p>n</p>
                        <p>n</p>
                        <p>e</p>
                        <p>r</p>
                        <p>s</p>
                    </div>
                </div>
                <div className={styles.pageOne__info}>
                    <p className={styles.pageOne__heading}>Discover our limited collection of NFTs, best suited for your header photo!</p>
                    <div className={styles.pageOne__more} onMouseOver={this.iconAnimeOne} onClick={() => this.page('Two')}>
                        <p>view details</p>
                        <ion-icon name="caret-down-outline" id='d-icon'></ion-icon>                    
                    </div>
                </div>
                <div className={styles.upIcon} id='up' onClick={this.topPage}>
                    <ion-icon name="arrow-up-circle-outline"></ion-icon>
                </div>
            </div>
        )
    } 
} 

export default PageOne