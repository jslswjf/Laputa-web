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

        const sceneObjects = sceneid < maxSceneId &&
                            scenes && scenes[sceneid] &&
                            scenes[sceneid].objects;

        const stepsObjects = {...objects, ...sceneObjects};



        const steps =   sceneid < maxSceneId &&
                            scenes && scenes[sceneid] &&
                            scenes[sceneid].steps && scenes[sceneid].steps.slice(0,stepid+1);

        const scenescount = info && info.scenescount;
        const stepcount = sceneInfo && sceneInfo.stepcount;

        return {
            stepsObjects,
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
        };
    };

    @connect(mapStateToProps, mapDispatchToProps)
    class SceneWrapper extends React.Component<{
        stepsObjects:any,
        scriptInfo:any,
        sceneInfo:any,
        steps:any,
        sceneid:number,
        stepid:number,
        stepcount:number,
        scenescount:number,
        InitScene:any,
        GetScene:any,
        SetSceneId:any,
        SetStepId:any,
    }>{

        public componentWillMount(){
            if(!this.props.scriptInfo){
                this.props.InitScene();
            }
        }

        public componentDidUpdate(prevProps){
            
            if(!this.props.sceneInfo && (prevProps.sceneid !== this.props.sceneid) && (this.props.scenescount-1>=this.props.sceneid)){
                this.props.GetScene(this.props.sceneid);
            }
        }
  
        public render(){

            const {
                stepsObjects,
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

            let objects = {};

            for(let i=0; i<=stepid; ++i ){
                objects = {...objects,...steps[i].objects}
            }

            const SceneProps = {
                objects,
                objectsInfo:stepsObjects,
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