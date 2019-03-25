import * as React from 'react';
import styles from './index.less';
export default (props)=>(
    <div className={styles.cover} id="cover">
        <input type="button" value="开始学习" className={styles.Start} onClick={()=>{
            document.getElementById("cover").style.top="-100%"
        }} />
    </div>
);