import { connect } from 'dva';
import * as React from 'react';

export default (WrappedComponent) => {
    
    const mapStateToProps = (state) => {

        if(!state.scene.info){
            return {}
        }

        const { info,objects,scenes,sceneid,stepid } = state.scene;

        const maxSceneId = info && info.scenescount;

        const sceneInfo = sceneid < maxSceneId &&
                            scenes && scenes[sceneid] &&
                            scenes[sceneid].info;
        
        const nxtSceneInfo = sceneid+1 < maxSceneId &&
                            scenes && scenes[sceneid+1] &&
                            scenes[sceneid+1].info;

        const sceneObjects = sceneid < maxSceneId &&
                            scenes && scenes[sceneid] &&
                            scenes[sceneid].objects;

        const sceneAllObjects = {...objects};
        if(sceneObjects){
            Object.keys(sceneObjects).map(objkey=>{
                if(sceneObjects[objkey]){
                    
                    if(sceneAllObjects[objkey]){
                        Object.keys(sceneObjects[objkey]).map(propskey=>{
                            if(sceneAllObjects[objkey][propskey] && !(sceneAllObjects[objkey][propskey] instanceof Array) && (sceneAllObjects[objkey][propskey] instanceof Object)){
                                sceneAllObjects[objkey][propskey] = 
                                    (sceneAllObjects[objkey][propskey] 
                                    && {...sceneAllObjects[objkey][propskey],...sceneObjects[objkey][propskey]})
                                    || {...sceneObjects[objkey][propskey]}
                            }else{
                                sceneAllObjects[objkey][propskey] =
                                    typeof sceneObjects[objkey][propskey] === 'object' ?
                                    {...sceneObjects[objkey][propskey]}:
                                    sceneObjects[objkey][propskey]
                            }

                        })
                    }else{
                        sceneAllObjects[objkey] = {...sceneObjects[objkey]}
                    }
                }
            })
        }


        const steps =   sceneid < maxSceneId &&
                            scenes && scenes[sceneid] &&
                            scenes[sceneid].steps && scenes[sceneid].steps.slice(0,stepid+1);

        const stepObjects = [];
        if(steps){
            let curstepobjectsstatus = {};
    
            for(let i=0; i<=stepid; ++i ){
                curstepobjectsstatus = {...curstepobjectsstatus,...steps[i].objects}
            }
    
            for(const key in curstepobjectsstatus){
                if(curstepobjectsstatus[key].appear){
                    const tmp = {...curstepobjectsstatus[key]}
                    if(sceneAllObjects[key]){
                        Object.keys(sceneAllObjects[key]).map(propskey=>{
                            if(!(sceneAllObjects[key][propskey] instanceof Array)&&(sceneAllObjects[key][propskey] instanceof Object)){
                                tmp[propskey] = 
                                    (tmp[propskey] 
                                    && {...sceneAllObjects[key][propskey],...tmp[propskey]})
                                    || {...sceneAllObjects[key][propskey]}
                            }else{
                                tmp[propskey] = tmp[propskey] || sceneAllObjects[key][propskey]
                            }
                        })
                    }
                    stepObjects.push(tmp);
                }
            }
        }

        const scenescount = info && info.scenescount;
        const stepcount = sceneInfo && sceneInfo.stepcount;

        return {
            sceneAllObjects,
            stepObjects,
            nxtSceneInfo,
            scriptInfo:info,
            sceneInfo,
            steps,
            sceneid,
            stepid,
            stepcount,
            scenescount
        };
    };
    
    const mapDispatchToProps = (dispatch) => {
        return {
            InitScene: () => {
                const action = {
                    type: `scene/InitScene`,
                };
                dispatch(action);
            },
            GetScene: (sceneid) => {
                const action = {
                    type: `scene/GetScene`,
                    payload:sceneid
                };
                dispatch(action);
            },
            SetSceneId: (sceneid) => {
                const action = {
                    type: `scene/SetSceneId`,
                    payload:sceneid
                };
                dispatch(action);
            },
            SetStepId: (stepid) => {
                const action = {
                    type: `scene/SetStepId`,
                    payload:stepid
                };
                dispatch(action);
            },
            SceneProcess : (sceneid,stepid) => {
                const action = {
                    type: `scene/SceneProcess`,
                    payload:sceneid,stepid
                };
                dispatch(action);
            }
        };
    };

    @connect(mapStateToProps, mapDispatchToProps)
    class SceneWrapper extends React.Component<{
        sceneAllObjects:any,
        stepObjects:any,
        scriptInfo:any,
        sceneInfo:any,
        nxtSceneInfo:any,
        steps:any,
        sceneid:number,
        stepid:number,
        stepcount:number,
        scenescount:number,
        InitScene:any,
        GetScene:any,
        SetSceneId:any,
        SetStepId:any,
        SceneProcess:any,
    }>{

        public componentWillMount(){
            if(!this.props.scriptInfo){
                this.props.InitScene();
            }
        }

        public componentDidUpdate(prevProps){

            if(prevProps.sceneid !== this.props.sceneid || prevProps.stepid !== this.props.stepid)
            {
                this.props.SceneProcess(this.props.sceneid,this.props.stepid);
            }
            
            if(!this.props.sceneInfo && (prevProps.sceneid !== this.props.sceneid) && (this.props.scenescount-1>=this.props.sceneid)){
                this.props.GetScene(this.props.sceneid);
            }
            if(!this.props.nxtSceneInfo&& (prevProps.sceneid !== this.props.sceneid) &&this.props.scenescount-1>=(this.props.sceneid+1)){
                this.props.GetScene(this.props.sceneid+1);
            }
        }
  
        public render(){

            const {
                sceneAllObjects,
                stepObjects,
                scriptInfo,
                sceneInfo,
                steps,
                sceneid,
                stepid,
                stepcount,
                scenescount,
                SetSceneId,
                SetStepId,
            } = {...this.props}


            if(scenescount-1<sceneid){
                return (<div>TODO: 游戏结束...</div>);
            }

            if(!scriptInfo || !sceneInfo){
                return (<div>TODO: 加载中...</div>);
            }
            
            if(!stepcount || !scenescount){
                return (<div>TODO: 游戏加载错误...</div>);
            }

            const SceneProps = {
                sceneObjects:sceneAllObjects,
                stepObjects,
                scriptInfo,
                sceneInfo,
                stepInfo:steps[stepid].info,
                OnNextStep:()=>{
                    if(stepcount-1>stepid){
                        SetStepId(stepid+1);
                    }else if(scenescount>=(sceneid+1)){
                        SetSceneId(sceneid+1);
                    }
                },
            };

            return (<WrappedComponent {...SceneProps} />);
        }
  
    }
  
    return SceneWrapper;

}