import AboutHeadElement from "./AboutHead/AboutHeadElement";
import AboutMidElement from "./AboutMid/AboutMidElement";

import styles from './HeaderBlock.module.css';

import Chel from '/sticker/chel.png';

function HeaderBlock() {

    return (
        <>
            <div className={styles.mainBlockBG}>
                <div className={styles.mainBlock}>
                    <AboutHeadElement />
                    <AboutMidElement />
                    <img src={Chel} alt="" />
                </div>
            </div>
        </>
    );
}

export default HeaderBlock;