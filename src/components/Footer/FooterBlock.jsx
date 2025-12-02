import EmailContact from './EmailContact/EmailContact';
import styles from './FooterBlock.module.css';

function FooterBlock() {
    return (
        <>
            <div className={styles.footerBlockBg}>
                <div className={styles.footerBlock}>
                    <div className={styles.upp}>
                        <EmailContact textH1="WE ARE NOODZ" textP="En we zijn open over alles! Stel ons je vragen of deel je ideeën: letstalk@wearenoodz.com" />
                        <EmailContact textH1="PREMS" textP="Neem contact op voor onze presskit of regel een interview: letstalk@wearenoodz.com" />
                    </div>
                    <div className={ styles.logo }>
                        <img src="/public/logoChars/N.svg" alt="" />
                        <img src="/public/logoChars/O.svg" alt="" />
                        <img src="/public/logoChars/O.svg" alt="" />
                        <img src="/public/logoChars/D.svg" alt="" />
                        <img src="/public/logoChars/Z.svg" alt="" />
                    </div>
                    <div className={ styles.nothing }>
                        <p>* Nothing to hide</p>
                        <p>* Nothing to hide</p>
                        <p>* Nothing to hide</p>
                        <p>* Nothing to hide</p>
                    </div>
                    <div className={ styles.someNavigation }>
                        <p>Privacyverklaring</p>
                        <p>Disclaimer</p>
                        <p>We Cut the Code 🤘🏽</p>
                    </div>
                </div>
            </div>
        </>
    );
}

export default FooterBlock;