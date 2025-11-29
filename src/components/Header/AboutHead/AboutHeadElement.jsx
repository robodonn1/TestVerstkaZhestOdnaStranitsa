import Logo from "./Logo/Logo";
import Slogan from "./Slogan/Slogan";

import styles from './AboutHeadElement.module.css';

function AboutHeadElement() {
    
    return (
        <>
            <div className={ styles.aboutHead }>
                <hr />
                <div className={ styles.aboutHeadComponents }>
                    <Logo />
                    <Slogan/>
                </div>
                <hr />
            </div>
        </>
    );
}

export default AboutHeadElement;