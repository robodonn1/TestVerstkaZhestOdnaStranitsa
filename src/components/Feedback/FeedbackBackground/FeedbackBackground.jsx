import styles from './FeedbackBackground.module.css';

function FeedbackBackground() {
    
    return (
        <>
            <div className={ styles.feedbackBackground }>
                <div className={ styles.horizontalLines }>
                    <hr />
                    <hr />
                    <hr />
                    <hr />
                    <hr />
                    <hr />
                    <hr />
                </div>
                <div className={ styles.verticalLines }>
                    <hr />
                    <hr />
                    <hr />
                    <hr />
                </div>
            </div>
        </>
    );
}

export default FeedbackBackground;