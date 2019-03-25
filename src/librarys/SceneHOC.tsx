import { connect } from 'dva';
import * as React from 'react';

export default (WrappedComponent) => {
    
    const mapStateToProps = (state) => {
        return {
            title:state.scene.title,
            resoursepath:state.scene.resoursepath,
            tasks:state.scene.tasks,
            taskid:state.scene.taskid,
            stepid:state.scene.stepid
        };
    };
    
    const mapDispatchToProps = (dispatch) => {
        return {
            GetScene: () => {
                const action = {
                    type: `scene/GetScene`,
                };
                dispatch(action);
            },
            SetTask: (taskid) => {
                const action = {
                    type: `scene/SetTask`,
                    payload:taskid
                };
                dispatch(action);
            },
            SetStep: (stepid) => {
                const action = {
                    type: `scene/SetStep`,
                    payload:stepid
                };
                dispatch(action);
            },
        };
    };

    @connect(mapStateToProps, mapDispatchToProps)
    class SceneWrapper extends React.Component<{
        title:any
        resoursepath:any,
        tasks:any,
        GetScene:any,
        taskid:number,
        stepid:number,
        SetTask:any,
        SetStep:any,
    }>{

        public componentWillMount(){
            if(!this.props.title){
                this.props.GetScene();
            }
        }

        public componentWillUpdate(){
            const {
                title, 
                resoursepath, 
                tasks, 
                GetScene,
                taskid,
                stepid,
                SetTask,
                SetStep,
                ...ComponentProps
            } = {...this.props} 

            if(tasks&&tasks[taskid]&&tasks[taskid].steps){
                if(tasks[taskid].steps.length===0){
                    SetTask(taskid+1);
                }else{
                    if(stepid >= tasks[taskid].steps.length){
                        SetStep(tasks[taskid].steps.length-1);
                    }
                }
            }


        }
  
        public render(){

            const {
                title, 
                resoursepath, 
                tasks, 
                GetScene,
                taskid,
                stepid,
                SetTask,
                SetStep,
                ...ComponentProps
            } = {...this.props} 

            if(!tasks){
                return (<div>TODO: 加载中...</div>);
            }

            if(tasks.length===0){
                return (<div>TODO: 加载失败...</div>);
            }

            if(taskid >= tasks.length){
                return (<div>任务结束</div>);
            }

            if(tasks[taskid].steps.length===0){
                return (<div>TODO: 空白任务...</div>);
            }

            if(stepid >= tasks[taskid].steps.length){
                return (<div>TODO: 错误的步骤页...</div>);
            }

            const islaststep = stepid >= tasks[taskid].steps.length-1;

            const SceneProps = {
                title,
                basepath: resoursepath,
                step: tasks[taskid].steps[stepid],
                OnNextStep:()=>{
                    if(!islaststep){
                        SetStep(stepid+1)
                    }else{
                        SetTask(taskid+1)
                    }
                },
            };

            return (<WrappedComponent {...SceneProps} {...ComponentProps} />);
        }
  
    }
  
    return SceneWrapper;

}