import * as React from 'react';
import { compose } from 'redux';
import SceneHOC from '../../../librarys/SceneHOC';
import SessionHOC from '../../../librarys/SessionHOC';
import VersionHOC from '../../../librarys/VersionHOC';
import styles from './index.less';

class AlitaScene extends React.Component<{
    title: string,
    basepath: string,
    step: any,
    OnNextStep: any
}>{


    public render(){

        const {
            title,
            basepath,
            step,
            OnNextStep
        } = {...this.props};

        return (<div>
            <span>{ step.title }</span>
            <img src={basepath+'/'+step.background}/>
            {step.contents.map((c,i)=>(<div key={i}>{c}</div>))}
            <button onClick={()=>OnNextStep()}>下一节</button>
        </div>)
    }
    
}

export default compose(
    VersionHOC,
    SessionHOC,
    SceneHOC,
  )(AlitaScene);