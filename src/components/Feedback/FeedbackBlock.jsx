import DownElement from './DownElement/DownElement';
import FeedbackBackground from './FeedbackBackground/FeedbackBackground';
import styles from './FeedbackBlock.module.css';
import UpperElement from './UpperElement/UpperElement';

function FeedbackBlock() {
    return (
        <>
            <div className={styles.feedbackBg}>
                <FeedbackBackground />
                <div className={styles.feedback}>
                    <UpperElement />
                    <DownElement />
                </div>
            </div>
        </>
    );
}

export default FeedbackBlock;