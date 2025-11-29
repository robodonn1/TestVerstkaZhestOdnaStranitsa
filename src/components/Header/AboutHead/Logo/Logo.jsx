import NChar from '../../../../../public/logoChars/N.svg';
import OChar from '../../../../../public/logoChars/O.svg';
import DChar from '../../../../../public/logoChars/D.svg';
import ZChar from '../../../../../public/logoChars/Z.svg';

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