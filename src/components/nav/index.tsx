
import * as React from 'react';
import NavLink from 'umi/navlink';
import styles from './index.less';

export default (props)=>(
    <div className={styles.g_Width}>
        <div className={styles.Logo}>
            <h1 className={styles.platformLogo}/>
            <span/>
            <p className={styles.platformName}>创客平台</p>
            <div className={styles.g_nav}>
                <NavLink to='/'>首页</NavLink>
                {props.iseducator?<NavLink to='/course'>课程</NavLink>:null}
                <NavLink to='/found'>发现</NavLink>
                <NavLink to='/school'>学校</NavLink>
                <NavLink to='/grade'>年级</NavLink>
                <NavLink to='/team'>班级</NavLink>
                <NavLink to='/create'>创作</NavLink>
            </div>
        </div>
        
    </div>
);