import styles from './ImgElement.module.css';
import TabletElement from './TabletElement/TabletElement';

import people from '../../../../public/sticker/peoples.png';
import StarElement from './StarElement/StarElement';

function ImgElement() {

    return (
        <>
            <div className={styles.imgsElement}>
                <TabletElement />
                <StarElement />
                <img src={people} alt="para" />
            </div>
        </>
    );
}

export default ImgElement;