
import * as React from 'react';
import ParseScene from '../ParseScene';
import styles from './index.less';

export default class GroupComponent extends React.Component<{
  elem:any,
  objectsInfo:any,
  OnNextStep,
  finished:boolean
}>{


  public render(){

    const { elem , objectsInfo,OnNextStep,finished,...ComponentProps} = {...this.props };

    return <div style={elem.style} {...ComponentProps}>

        {
            Object.keys(elem.members).map((key,i)=>{
                const member = objectsInfo[key];
                const style = {...member.style,...elem.members[key].style};

                return <ParseScene {...{
                  elem:{...member,style},
                  renderInfo:{
                    draggable:false,
                  },
                  objectsInfo,
                  finished,OnNextStep }
                } key={i}/>;

            })
        }

      })}
    </div>;
    
  }

}