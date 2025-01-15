import React from 'react';
import { Link } from 'react-router-dom';
import styles from '../../assets/css/LogIn.module.css'; // Import the CSS module

export default function LogInSection(props) {
   
   /*
    const backGround = ` ${
        props.bg === 'transparent' ? styles.transparentMode : styles.whiteMode        
    }`; 
    */
    
    
    
    return (
        <>
        <section className={`py-5 d-flex align-items-center ${styles.LogIn__container} 
        ${props.bg === 'transparent' ? styles.transparentMode : ''} 
        ${props.bg === 'white' ? styles.whiteMode : ''}
        `}>              
            <div className={styles.LogIn__contact_box}>
                <Link id='bazariaImgLink' to="/">
                <div className={styles.LogIn__left}><h3 className={styles.LogIn__lefth3}>Bazaria™</h3></div>
                </Link>            
                <div className={styles.LogIn__right}>
                    <h2 className={styles.LogIn__h2}>{props.mainTitle}</h2>
                    <form data-netlify="true">
                        <input
                            type="text"
                            name="name"
                            className={styles.LogIn__field}
                            placeholder={`${props.firstPlaceHolder}`}
                            required
                        />
                        <input
                            type="text"
                            name="email"
                            className={styles.LogIn__field}
                            placeholder={`${props.secondPlaceHolder}`}
                            required
                        />
                        <input
                            type="text"
                            name="message"
                            className={`${styles.LogIn__field} ${styles.LogIn__f1}`}
                            placeholder={`${props.thirdPlaceHolder}`}
                            required
                        />
                        <button className={`${styles.LogIn__btn1} mt-3`}>{props.mainBtn}</button>
                        <div className={`${styles.LogIn__rowDiv} mt-3`}>
                          <button className={`${styles.LogIn__btn2} mt-3`}>{props.rightBtn}</button>
                          <button className={`${styles.LogIn__btn2} mt-3`}>{props.leftBtn}</button>
                        </div>                        
                    </form>
                </div>
            </div>
        </section>
        </>
    );
}
