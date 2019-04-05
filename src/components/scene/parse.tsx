import * as React from 'react';
import contentType from '../../utils/defs';
import ClickComponent from './click';
import DragComponent from './drag';
import GroupComponent from './group';
import ObjectComponent from './object';
import TextComponent from './text';
import ToSpaceComponent from './tospace';


export default class ParseScene extends React.Component<{
    elem:any,
    renderInfo:any,
    key:any,
    sceneObjects:any,
    finished:boolean,
    OnNextStep:any
  }>{

    public render(){


        const {elem,renderInfo,key,sceneObjects,finished,OnNextStep,...ComponentProps} = {...this.props};
        
        if(!elem){
            return null;
        }
        
        const signrenderInfo = {...renderInfo,key,elem,finished,...ComponentProps}
        const comprenderInfo = {...signrenderInfo,sceneObjects,OnNextStep}

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
            return <ToSpaceComponent {...signrenderInfo} />;
        }
        if(elem.type === contentType.ClickElem){
            return <ClickComponent {...comprenderInfo} />;
        }
        
        
        return null;
    }
}