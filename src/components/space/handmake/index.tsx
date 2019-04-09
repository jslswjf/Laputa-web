import * as React from 'react';
import styles from './index.less';

export default class HandMakeSpaceComponent extends React.Component<{
    pathto:string,
    items:any[],
},{
    curstep:number
}>{

    constructor(props){
        super(props);
        this.state={curstep:0};
    }

    public render(){

        const { pathto,items, ...ComponentProps  } = {...this.props};
        const step = items[this.state.curstep];
        const imgCnt = step.length;
        return step.map((img,id)=>{
            return (null);
        });

    }

}