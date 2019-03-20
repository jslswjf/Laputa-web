
import * as React from 'react';
import styles from './index.less';

export default class Login extends React.Component<{
  onLogin:any
}>{

  public render(){
    return (
      <div>
        <div>
          <input type="text" name="account" />
          <input type="password" name="password" />
          <input type="submit" value="登陆" onClick={this.props.onLogin}/>
        </div>
      </div>
    );
  }

}