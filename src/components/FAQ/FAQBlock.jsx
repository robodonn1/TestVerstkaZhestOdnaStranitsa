import AnswerElement from './AnswerElement/AnswerElement';
import styles from './FAQBlock.module.css';
import lents from '/sticker/lents.png';

function FAQBlock() {

    return (
        <>
            <div className={styles.faqBlockBg}>
                <div className={styles.faqBlock}>
                    <hr />
                    <h1>FAQ</h1>
                    <hr />
                    <AnswerElement answerText="Wie zit er achter Noodz?" />
                    <hr />
                    <AnswerElement answerText="Wat is Noodz?" />
                    <hr />
                    <AnswerElement answerText="Waarom is Noodz opgericht?" />
                    <hr />
                    <AnswerElement answerText="Is Noodz volledig eco-friendly, vegan en klimaatneutraal?" />
                    <hr />
                </div>
                <img src={lents} alt="" />
            </div>
        </>
    );
}

export default FAQBlock;