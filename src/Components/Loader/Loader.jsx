import React from 'react'
import styles from './Loader.module.css';

export default function Loader() {
    return (
        <>
            <div className={styles.loading}>
                <div class={styles.skCircle}>
                    <div class={`${styles.skChild} ${styles.skCircle1}`}></div>
                    <div class={`${styles.skChild} ${styles.skCircle2}`}></div>
                    <div class={`${styles.skChild} ${styles.skCircle3}`}></div>
                    <div class={`${styles.skChild} ${styles.skCircle4}`}></div>
                    <div class={`${styles.skChild} ${styles.skCircle5}`}></div>
                    <div class={`${styles.skChild} ${styles.skCircle6}`}></div>
                    <div class={`${styles.skChild} ${styles.skCircle7}`}></div>
                    <div class={`${styles.skChild} ${styles.skCircle8}`}></div>
                    <div class={`${styles.skChild} ${styles.skCircle9}`}></div>
                    <div class={`${styles.skChild} ${styles.skCircle10}`}></div>
                    <div class={`${styles.skChild} ${styles.skCircle11}`}></div>
                    <div class={`${styles.skChild} ${styles.skCircle12}`}></div>
                </div>
            </div>

        </>
    )
}
