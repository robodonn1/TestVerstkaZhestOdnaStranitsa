import styles from './EmailContact.module.css';

function EmailContact({ textH1, textP }) {
    return (
        <>
            <div className={styles.emailContact}>
                <h1>{textH1}</h1>
                <p>{textP}</p>
            </div>
        </>
    );
}

export default EmailContact;