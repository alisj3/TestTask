import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faFacebook, faSquareInstagram, faYoutube, faPinterest } from '@fortawesome/free-brands-svg-icons'
import styles from './Footer.module.css'

export function Footer(){
    return (
        <>
            <footer>
                <div className="container">
                    <div className={styles.footer__inner}>
                        <div className="footer__left">


                            <div className="social">
                                <FontAwesomeIcon className={styles.social_link} icon={faFacebook} />
                                <FontAwesomeIcon className={styles.social_link} icon={faSquareInstagram} />
                                <FontAwesomeIcon className={styles.social_link} icon={faYoutube} />
                                <FontAwesomeIcon className={styles.social_link} icon={faPinterest} />
                            </div>

                            <div className={styles.services}>
                                <div className={styles.services_box}>
                                    <h2>Our services</h2>
                                    <div className={styles.services_links}>
                                        <a href="#">Features</a>
                                        <a href="#">Subscription</a>
                                        <a href="#">Vouchers</a>
                                        <a href="#">B2B</a>
                                    </div>
                                    
                                </div>

                                <div className={styles.services_box}>
                                    <h2>More services</h2>
                                    <div className={styles.services_links}>
                                        <a href="#">Help center</a>
                                        <a href="#">Blog</a>
                                        <a href="#">Shop</a>
                                        <a href="#">Contact Us</a>
                                    </div>
                                </div>

                                <div className={styles.services_box}>
                                    <h2>Corporate</h2>
                                    
                                    <div className={styles.services_links}>
                                        <a href="#">Careers</a>
                                        <a href="#">Discover Outdooractive</a>
                                        <a href="#">Outdooractive30</a>
                                    </div>

                                    
                                </div>

                            </div>
                        </div>

                        <div className={styles.footer__right}>
                            <div>
                                <a href="#" className={styles.market_link}>
                                    <img src="/PlayMarket.png" className={styles.market} alt="" />
                                </a>
                                <a href="#" className={styles.market_link}>
                                    <img src="/AppStore.png" className={styles.market} alt="" />
                                </a>
                            </div>
                            
                            <a className={styles.learn_more} href="#">Learn more about the apps for Android and IOS</a>
                        </div>
                    </div>
                </div>
            </footer>
        </>
    )
}