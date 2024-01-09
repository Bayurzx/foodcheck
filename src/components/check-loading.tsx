import React from 'react'
import styles from '@/styling/loading.module.css'; // Import your CSS module

const CheckLoading = () => {
    return (
        <>
            <div className={styles.loadingOverlay}>
                <div className={styles.loadingSpinner} />
            </div>
            <div className={styles.blurBackground}>
                <h1>Loading...</h1>
            </div>
        </>
    );
}

export default CheckLoading