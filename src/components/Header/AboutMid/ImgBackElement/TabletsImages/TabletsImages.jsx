import styles from './TabletsImages.module.css';
import tablet from '/tablet/tablet.svg';

function TabletsImages() {

    return (
        <>
            <div className={styles.tablets}>
                <img src={tablet} alt="tablet" />
                <img src={tablet} alt="tablet" />
                <img src={tablet} alt="tablet" />
            </div>
        </>
    );
}

export default TabletsImages;