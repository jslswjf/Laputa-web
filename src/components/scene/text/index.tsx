
import * as React from 'react';
import styles from './index.less';

export default class TextComponent extends React.Component<{
  elem:any,
  finished:boolean
},{
  item:number
}>{

  public intimeout:boolean=false;

  constructor(props){
    super(props);
    this.state={item:props.finished?props.elem.text.length:1}
  }

  public timeout(){
    if(this.intimeout){return;}
    this.intimeout = true;
    setTimeout(()=>{
      this.intimeout = false;
      this.setState({item:this.state.item+1});
    },300);
  }

  public render(){

    const { elem ,finished, ...ComponentProps } = {...this.props};

    if(elem.text.length>this.state.item)
    {
      this.timeout();
    }

    return <div style={elem.style}  {...ComponentProps} >
      { elem.text.filter((x,i)=>i<this.state.item).map((txt,i)=>(<div key={i} >{txt}</div>)) }
    </div>;
    
  }

}