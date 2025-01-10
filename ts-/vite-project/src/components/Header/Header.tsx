import styles from './Header.module.css'
import '../../styles/global.css'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faCircleUser } from '@fortawesome/free-regular-svg-icons'
import { Link } from 'react-router-dom';

export function Header(){

    return (
        <>
            <header>
                <div className="container">
                    <div className={styles.header__inner}>
                        <nav>
                            <Link to="/"><img src="/Funiro..png" alt="" /></Link>
                            <a className={styles.link} href="#">Walks</a>
                            <a className={styles.link} href="#">Difficulties</a>
                            <a className={styles.link} href="#">Regions</a>
                        </nav>

                        <Link to="/profile"><FontAwesomeIcon className={styles.login} icon={faCircleUser} /></Link>
                            
                        
                    </div>
                </div>
            </header>
        </>
    )
}