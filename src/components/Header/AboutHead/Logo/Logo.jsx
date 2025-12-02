import NChar from '/logoChars/N.svg';
import OChar from '/logoChars/O.svg';
import DChar from '/logoChars/D.svg';
import ZChar from '/logoChars/Z.svg';

import styles from './Logo.module.css';

function Logo() {
    
    return (
        <>
            <div className={styles.logo}>
                <img src={NChar} alt="N" />
                <img src={OChar} alt="O" />
                <img src={OChar} alt="O" />
                <img src={DChar} alt="D" />
                <img src={ZChar} alt="Z" />
            </div>
        </>  
    );
}

export default Logo;