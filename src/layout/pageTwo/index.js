import styles from './index.module.scss'
import React from "react";
import Image from 'next/image';
import { SwiperSlide } from "swiper/react";
import Swiper from '../../components/UI/swiper';

const banners = ['/cartwheel-pixel-galaxy.png', '/dark-pixel-galaxy.png', '/firework-pixel-galaxy.png', '/frontier-pixel-galaxy.png', '/main-pixel-galaxy.png']

const pageTwo = (props) => {
    const elements = []
    const elementLoop = () => {
        for (let i = 0; i < banners.length; i++) {
            elements.push(
                <SwiperSlide>
                    <Image src={banners[i]} alt={'banner' + i} layout='fill' priority />
                </SwiperSlide>
            )
          }
    }
    elementLoop()

    return (
        <div id='pageTwo' className={styles.pageTwo}>
            <p className={styles.pageTwo__heading}>Season One. <br /> Goes Interstellar.</p>
            <div className={styles.pageTwo__banners}>
                <Swiper>
                    { elements }
                </Swiper>
            </div>
            <div className={styles.pageTwo__info}>
                <ion-icon name="tablet-landscape-outline"></ion-icon>
                <p className={styles.pageTwo__info}>All banners have a dimension ratio of 3:1.</p>
            </div>
        </div>
    )
}

export default pageTwo