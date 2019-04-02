
import * as React from 'react';
import styles from './index.less';

export default class ProcessBarComponent extends React.Component<{
    timestamp:any,
    timeout:any,
    backgroundstyle:any,
    processstyle:any,
},{
    timestamp:any,
}>{

    public timer:any;

    constructor(props){
        super(props);
        this.state = {timestamp:this.props.timestamp};
        this.timer=setInterval(
            ()=>{
                this.setState({timestamp: (new Date()).getTime() });
            }
            ,30);
    }

    public componentWillUnmount(){
        clearInterval(this.timer);
        this.timer = null;
    }

    public componentWillReceiveProps(newProps){
        if(this.props.timestamp !== newProps.timestamp){
            if(this.timer){
                clearInterval(this.timer);
            }
            this.timer=setInterval(
                ()=>{
                    this.setState({timestamp: (new Date()).getTime() });
                }
                ,30);
        }
    }

    public render(){


        const { timeout,backgroundstyle,processstyle,timestamp } = {...this.props};

        const process = 100*(Number(this.state.timestamp) - Number(timestamp))/Number(timeout);

        if(process>100){
            clearInterval(this.timer);
        }

        return (<div style={backgroundstyle} >
            <div style={{...processstyle,width:String(Math.min(process,100))+'%'}}/>
        </div>);
    
  }

}