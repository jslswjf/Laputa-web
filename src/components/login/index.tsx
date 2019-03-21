
import * as React from 'react';
import styles from './index.less';

export default class Login extends React.Component<{
  onLogin:any
}>{

  public render(){

    const {
      onLogin,
    } = {...this.props}

    return (
      <div className={styles.bodyLogin}>
        <div className={styles.Logo}>
          <h1 className={styles.platformLogo}/>
          <span/>
          <p className={styles.platformName}>创客平台</p>
        </div>
        <div className={styles.AccountLogin}>
          <ul className={styles.AccountTab}>
            <li className={styles.Choice}>账号登录</li>
            <li>账号注册</li>
          </ul>
          <div className={styles.Account}>
            <input type="text" name="account" placeholder="请输入账号"/>
            <span className={styles.errorMessage}>提示</span>
          </div>
          <div className={styles.password}>
            <input type="password" name="password" placeholder="请输入密码" />
            <span className={styles.errorMessage}>提示</span>
          </div>
          <input type="submit" value="登陆" onClick={()=>onLogin()} className={styles.SignIn}/>
        </div>
      </div>
    );
  }

}