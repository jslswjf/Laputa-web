
import * as React from 'react';
import HandMakeSpace from '../../space/handmake';
import styles from './index.less';

export default class ToSpaceComponent extends React.Component<{
  elem:any,
  finished:boolean
}>{

  public render(){

    const { elem,finished, ...ComponentProps  } = {...this.props};

    return <div style={elem.style}>
            <HandMakeSpace {...elem.space} />
          </div>;
  }

}