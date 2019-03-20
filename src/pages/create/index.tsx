import * as React from 'react';
import { compose } from 'redux';
import SessionHOC from '../../librarys/SessionHOC';
import VersionHOC from '../../librarys/VersionHOC';
import styles from './index.less';

class Course extends React.Component<{
    version:any,
    GetVersion:any
}>{

    public render(){
        return (<div />)
    }
    
}

export default compose(
    VersionHOC,
    SessionHOC
  )(Course);