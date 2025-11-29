import styles from './AnswerElement.module.css';

import plus from '../../../../public/sticker/plus.svg';

function AnswerElement({ answerText }) {

    return (
        <>
            <div className={styles.answer}>
                <h1>{answerText}</h1>
                <img src={ plus } alt="plus" />
            </div>
        </>
    );
}

export default AnswerElement