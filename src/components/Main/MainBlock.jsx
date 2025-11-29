import ImgElement from './ImgElement/ImgElement';
import LeftTextElement from './LeftTextElement/LeftTextElement';
import styles from './MainBlock.module.css';
import RightTextBlock from './RightTextBlock/RightTextBlock';
import VideoBlock from './VideoBlock/VideoBlock';

function MainBlock() {

    return (
        <>
            <div className={styles.mainBlockBG}>
                <div className={styles.mainBlock}>
                    <ImgElement />
                    <LeftTextElement />
                    <RightTextBlock />
                    <VideoBlock/>
                </div>
            </div>
        </>
    );
}

export default MainBlock;