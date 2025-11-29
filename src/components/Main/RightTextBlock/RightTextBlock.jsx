import KeepUpdateBtn from './KeepUpdateBtn/KeepUpdateBtn';
import styles from './RightTextBlock.module.css';

function RightTextBlock() {
    
    return (
        <>
            <div className={styles.rightText}>
                <p>Tijd om dat te veranderen, vonden we bij Noodz. Daarom zijn we écht eerlijk over onze mondverzorgingsproducten. We vertellen je precies waar we ze maken, wat er in zit en hoe we ze bij jou thuis bezorgen. Binnenkort lanceren we de eerste Noodz: tandpasta die je kunt kauwen.</p>
                <p>Niets te verbergen. Choose Noodz!</p>
                <KeepUpdateBtn/>
            </div>
        </>
    );
}

export default RightTextBlock;