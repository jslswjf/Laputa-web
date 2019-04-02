import * as React from 'react';
import { compose } from 'redux';
import ParseScene from '../../components/scene/ParseScene';
import ProcessBarComponent from '../../components/scene/processbar';
import SceneHOC from '../../librarys/SceneHOC';
import SessionHOC from '../../librarys/SessionHOC';
import VersionHOC from '../../librarys/VersionHOC';
import styles from './index.less';


class Scene extends React.Component<{
    scriptInfo:any,
    sceneInfo:any,
    objects:any,
    objectsInfo:any,
    stepInfo:any,
    OnNextStep: any,
},{
    cannext:boolean
}>{

    public timestamp:number = null;
    public timer:any =null;


    constructor(props){
        super(props);
        this.state = {cannext:false}
    }

    public Next(){
        this.setState({cannext:false});
        this.timer = null;
        this.timestamp = null;
        this.props.OnNextStep();
    }

    public frontScene(){

        const {
            objects,
            objectsInfo, 
            OnNextStep
        } = {...this.props};

        const elements = [];
        for(const key in objects){
            if(objects[key].appear){
                objectsInfo[key].style = {...objectsInfo[key].style,...objects[key].style};
                elements.push(objectsInfo[key]);
            }
        }

        return elements.map((elem,i)=>{
            return <ParseScene {...{
                elem,
                renderInfo:{},
                objectsInfo,
                finished:elements.length > i+1 }
            } key={i} OnNextStep={OnNextStep}/>;
        })


    }

    public componentWillUnmount(){
        if(this.timer){
            clearTimeout(this.timer);
        }
    }

    public render(){

        const {
            sceneInfo,
            stepInfo,
        } = {...this.props};

        if(!this.timer && !this.state.cannext && stepInfo.timeout){

            this.timestamp = (new Date()).getTime();
            this.timer = stepInfo.auto===true?
                setTimeout(()=>{this.Next()},stepInfo.timeout)
                :setTimeout(()=>this.setState({cannext:true}),stepInfo.timeout)

        }
        

        return (<div
            className={styles.scene}
            style={{background:sceneInfo.background}}
            onClick = { ()=>{
                            if(this.state.cannext){
                                this.Next()
                            }
                        }
                    }
            >            
                <ProcessBarComponent
                    timestamp={this.timestamp}
                    timeout={stepInfo.timeout||1} 
                    backgroundstyle={{width:'100%',background:'white',height:'3px'}}
                    processstyle={{background:'black',height:'3px'}}
                    />
                {this.frontScene()}
        </div>)
    }
    
}

export default compose(
    VersionHOC,
    SessionHOC,
    SceneHOC,
  )(Scene);