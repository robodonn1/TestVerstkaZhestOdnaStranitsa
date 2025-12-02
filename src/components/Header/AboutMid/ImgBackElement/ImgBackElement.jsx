import styles from './ImgBackElement.module.css';
import TabletsImages from './TabletsImages/TabletsImages';

import Oval from '/tablet/oval.svg';

function ImgBackElement() {

    return (
        <>
            <div className={styles.imgBack}>
                <TabletsImages />
                <img src={Oval} alt="" />
            </div>
        </>
    );
}

export default ImgBackElement;
