import React from 'react'
import styles from './LoaderSections.module.css';

export default function LoaderSection() {
    return (
        <>
            <div className={styles.loading}>
                <div class={styles["spinner"]}>
                    <div class={styles["bounce1"]}></div>
                    <div class={styles["bounce2"]}></div>
                    <div class={styles["bounce3"]}></div>
                </div>
            </div>
        </>
    )
}
