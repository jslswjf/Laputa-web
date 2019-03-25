import * as React from 'react';
import { compose } from 'redux';
import SessionHOC from '../../librarys/SessionHOC';
import VersionHOC from '../../librarys/VersionHOC';
import Cover from '../../pages/Game/cover';
import styles from './index.less';

class Course extends React.Component<{
    version:any,
    GetVersion:any
}>{

    public render(){
        return (<div>
            <div>1</div>
            <Cover>sdfsd </Cover>
        </div>)
    }
    
}

export default compose(
    VersionHOC,
    SessionHOC
  )(Course);