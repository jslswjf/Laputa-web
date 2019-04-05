import * as React from 'react';
import ParseScene from '../parse';
import styles from './index.less';

export default class ClickComponent extends React.Component<{
  elem:any,
  sceneObjects:any,
  OnNextStep,
  finished:boolean
},{
    keyshowing:number
}>{

    constructor(props){
        super(props)
        this.state={keyshowing:-1}
    }

    public render(){

        const { elem , sceneObjects,OnNextStep,finished,...ComponentProps} = {...this.props };

        return <div style={elem.style} {...ComponentProps}>
            <ParseScene {...{
                        elem:{...sceneObjects[elem.container],style:{
                            top:'0%',right:'0%',bottom:'0%',left:'0%',width:'100%'
                        }},
                        renderInfo:{
                            draggable:false,
                        },
                        sceneObjects,
                        finished,OnNextStep }
                    } key={-1}/>
            {
                Object.keys(elem.members).map((key,i)=>{
                    const member = sceneObjects[key];
                    const style = {...member.style,...elem.members[key].style,cursor:'pointer'};

                    return (this.state.keyshowing === i)?<ParseScene {...{
                        elem:{...member,style},
                        renderInfo:{
                            draggable:false,
                        },
                        sceneObjects,
                        finished,OnNextStep,
                        onClick:()=>{
                                this.setState({keyshowing:-1});
                            }
                        }
                    } key={i}/>:null;

                })
                
            }
            {
                this.state.keyshowing === -1?
                Object.keys(elem.members).map((key,i)=>{
                    const trigger = elem.members[key].trigger;

                    return <div {...trigger} key={i} onClick={
                        ()=>{
                            this.setState({keyshowing:i});
                        }
                    }/>;

                }):null
            }

        </div>;
    
    }

}