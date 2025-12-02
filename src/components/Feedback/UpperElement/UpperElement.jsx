import styles from './UpperElement.module.css';

function UpperElement() {

    return (
        <>
            <div className={styles.upperElement}>
                <div className={styles.hashTag}>
                    <p>@WEARENOODZ</p>
                </div>
                <div className={styles.angleBlock}>
                    <hr />
                    <h1>WE</h1>
                    <hr />
                    <img src="/tablet/tablet.svg" alt="tablet" />
                </div>
                <div className={styles.angleBlock}>
                    <hr />
                    <h1>ARE</h1>
                    <hr />
                </div>
                <div className={styles.angleBlock}>
                    <hr />
                    <h1>NOODZ</h1>
                    <hr />
                    <div>
                        <p>wearenoodz.com</p>
                    </div>
                    <img src="/tablet/tablet.svg" alt="tablet" />
                </div>
            </div>
        </>
    );
}

export default UpperElement;