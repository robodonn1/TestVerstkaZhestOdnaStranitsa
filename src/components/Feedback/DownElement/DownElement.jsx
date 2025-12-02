import styles from './DownElement.module.css';
import DownText from './DownText/DownText';

function DownElement() {
    return (
        <>
            <div className={ styles.downElement }>
                <img src="/public/sticker/smilefac.png" alt="" />
                <DownText/>
            </div>
        </>
    );
}

export default DownElement;