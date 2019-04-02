
import * as React from 'react';
import styles from './index.less';

export default class StepsComponent extends React.Component<{
  elem:any,
  finished:boolean
}>{


  public render(){

    const { elem,finished, ...ComponentProps  } = {...this.props};

    if(elem['Content-Type'].startsWith('image')){
      return <img src={elem.src} style={elem.style} {...ComponentProps} />
    }
    return null;
    
  }

}