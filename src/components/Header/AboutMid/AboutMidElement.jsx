import styles from './AboutMidElement.module.css';
import ImgBackElement from './ImgBackElement/ImgBackElement';
import TextFrontElement from './TextFrontElement/TextFrontElement';

function AboutMidElement() {

    return (
        <>
            <div className={styles.aboutMid}>
                <ImgBackElement />
                <TextFrontElement />
            </div>
        </>
    );
}

export default AboutMidElement;