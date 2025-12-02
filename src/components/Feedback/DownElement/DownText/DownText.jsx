import styles from './DownText.module.css';

function DownText() {
    return (
        <>
            <div className={ styles.downText }>
                <h1>HOU ME OP DE HOOGTE</h1>
                <div>
                    <p>MELD ME AAN</p>
                    <img src="/public/tablet/arrow.svg" alt="" />
                </div>
                <hr />
            </div>
        </>
    );
}

export default DownText;