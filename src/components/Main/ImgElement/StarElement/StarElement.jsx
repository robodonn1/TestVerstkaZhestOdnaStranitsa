import styles from './StarElement.module.css';

import star from '/sticker/Star.svg';

function StarElement() {
    
    return (
        <>
            <div className={ styles.stars }>
                <img src={star} alt="star" />
                <img src={star} alt="star" />
                <img src={star} alt="star" />
                <img src={star} alt="star" />
                <img src={star} alt="star" />
                <img src={star} alt="star" />
            </div>
        </>
    );
}

export default StarElement;