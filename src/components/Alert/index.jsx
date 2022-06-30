import React from "react";
import { useDispatch } from "react-redux";
import { closeAlert } from "../../redux/actionCreators";

import styles from "./index.module.scss";

const Alert = () => {
    const dispatch = useDispatch();

    const handleCloseAlert = () => {
         dispatch(closeAlert());
    };

    const stopProp = (e) => {
        e.stopPropagation();
    };

    return (
        <div className={styles.container} onClick={handleCloseAlert}>
            <div className={styles.alertContent} onClick={stopProp}>
                <span
                    className={styles.close}
                    id="close"
                    onClick={handleCloseAlert}
                >
                    &times;
                </span>

                <div className={styles.form}>
                    <h1>Please, answer to all questions.</h1>

                    <button className={styles.okButton} onClick={handleCloseAlert}>
                        OK
                    </button>
                </div>
            </div>
        </div>
    );
};

export default Alert;
