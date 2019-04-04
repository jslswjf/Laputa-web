
import * as React from 'react';
import ParseScene from '../ParseScene';
import styles from './index.less';

export default class DragComponent extends React.Component<{
  elem:any,
  sceneObjects:any,
  OnNextStep:any,
  finished:boolean,
},{
  dragedList:boolean[]
}>{

  public key:number = null;

  constructor(props){
    super(props);
    this.state = {dragedList:new Array(props.elem.objects.length).fill(this.props.finished)}
  }

  public drag(key:any){
    this.key = key;
  }

  public drop(key:any){
    if(this.key === key){
      const dragedList = this.state.dragedList;
      dragedList[key] = true;
      this.setState({ dragedList});
    }
  }

  public over(key:any){
    if(this.key === key){
      event.preventDefault();
    }
  }

  public render(){

    const { elem , sceneObjects,OnNextStep,finished} = {...this.props };

    return <div style={elem.style} onDragOver={()=>this.over(-1)} onClick={
      ()=>{if(!this.state.dragedList.filter(x=>!x).length&&!finished){OnNextStep()}}
    }>
    
      {elem.objects.map((obj,i)=>{

        if(this.state.dragedList[i]){
          return null;
        }
        
        return <ParseScene {...{
          elem:sceneObjects[obj.source],
          renderInfo:{
            draggable:true,
            onDragStart:()=>this.drag(i)
          },
          sceneObjects,
          finished,
          OnNextStep }
        } key={i}/>;

      })}
      {elem.objects.map((obj,i)=>{

        const child = sceneObjects[obj.source];
        let style = {...child.style,...obj.target.style};
        
        if(!this.state.dragedList[i]){
          style = { ...style,...obj.target.hide };
        }

        return <ParseScene {...{
          elem:{...child,style},
          renderInfo:{
            draggable:false,
            onDrop:()=>this.drop(i),
            onDragOver:()=>this.over(i)
          },
          sceneObjects,
          finished,
          OnNextStep }
        } key={i}/>;

      })}
      {elem.objects.map((obj,i)=>{
        
        if(!this.state.dragedList[i]){
          return null;
        }

        return <ParseScene {...{
          elem:sceneObjects[obj.explain],
          renderInfo:{
            draggable:false
          },
          sceneObjects,
          finished,
          OnNextStep }
        } key={i}/>;

      })}
    </div>;
    
  }

}