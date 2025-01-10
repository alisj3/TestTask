import { Carousel } from '../Slider/Carousel'
import styles from './Intro.module.css'

export function Intro(){
    return (
        <div className={styles.intro}>
                <div className={styles.intro__inner}>

                    <div className={styles.intro__text}>
                        <h1 className={styles.intro_h1}>High-Quality Furniture Just For You</h1>
                        <p className={styles.intro_p}>Our furniture is made from selected and best quality materials that are suitable for your dream home</p>
                        <button className={styles.button}>Shop now</button>
                    </div>

                    <Carousel />
                </div>
        </div>
    )
}