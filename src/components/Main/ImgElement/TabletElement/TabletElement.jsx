import styles from './TabletElement.module.css';

import grayTablet from '/tablet/greyTablet.svg';

function TabletElement() {
    
    return (
        <>
            <div className={ styles.tablets }>
                <img src={grayTablet} alt="grayTablet" />
                <img src={grayTablet} alt="grayTablet" />
                <img src={grayTablet} alt="grayTablet" />
            </div>
        </>
    );
}

export default TabletElement;