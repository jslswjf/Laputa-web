import * as React from 'react';
import contentType from '../../utils/defs';
import DragComponent from './drag';
import GroupComponent from './group';
import ObjectComponent from './object';
import StepsComponent from './steps';
import TextComponent from './text';


export default class ParseScene extends React.Component<{
    elem:any,
    renderInfo:any,
    key:any,
    objectsInfo:any,
    finished:boolean,
    OnNextStep:any
  }>{

    public render(){

        const {elem,renderInfo,key,objectsInfo,finished,OnNextStep} = {...this.props};
        
        const signrenderInfo = {...renderInfo,key,elem,finished}
        const comprenderInfo = {...signrenderInfo,objectsInfo,OnNextStep}

        if(elem.type === contentType.TextElem){
            return <TextComponent  {...signrenderInfo} />;
        }
        if(elem.type === contentType.ObjectElem){
            return <ObjectComponent {...signrenderInfo} />;
        }
        if(elem.type === contentType.DragExam){
            return <DragComponent {...comprenderInfo}/>;
        }
        if(elem.type === contentType.GroupElem){
            return <GroupComponent {...comprenderInfo} />;
        }
        if(elem.type === contentType.StepsElem){
            return <StepsComponent {...signrenderInfo} />;
        }
        
        return null;
    }
}
