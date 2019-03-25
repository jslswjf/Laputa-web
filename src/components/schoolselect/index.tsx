
import * as React from 'react';
import styles from './index.less';

export default (props)=>(
    <div className={styles.bodyLogin}>
        <div className={styles.Logo}>
          <h1 className={styles.platformLogo}/>
          <span/>
          <p className={styles.platformName}>创客平台</p>
        </div>
        <ul  className={styles.schoolChoice}>
            {props.schools.map((school,i)=>
                (<li
                    key={i}
                    onClick={()=>props.onSelectSchool(school.id)}
                    >
                    <img src={school.logo} className={styles.schoolLogo} />
                    <p className={styles.schoolName}>{school.name}</p>
                    
                </li>)
            )}
        </ul>
    </div>    
);