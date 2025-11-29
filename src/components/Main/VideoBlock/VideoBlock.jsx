import styles from './VideoBlock.module.css';

import triangle from '../../../../public/sticker/triangle.svg'
import video from '../../../../public/sticker/Vido.png';

function VideoBlock() {
    
    return (
        <>
            <div className={styles.videoBlock }>
                <div className={styles.player}>
                    <div className={styles.circle}></div>
                    <img src={ triangle} alt="triangle" />
                </div>
                <img src={video } alt="video" />
            </div>
        </>
    );
}

export default VideoBlock;