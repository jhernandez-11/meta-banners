import styles from './index.module.scss';

const layout = (props) => (
    <main className={styles.main}>
        <div className={styles.main__video}>
            <video autoPlay loop muted className={styles.main__video__content}>
                <source src='/splash-bg.mp4' type='video/mp4'></source>
            </video>
        </div>
        {props.children}
    </main>
)

export default layout