
import api from '../services/api';

/**
 * 游戏内容
 */
export default {
    namespace: 'scene',
    state:{
        info:null,
        objects:null,
        scenes:null,
        sceneid:null,
        stepid:null,
    },
    effects: {
        *InitScene({}, {call,put}){
            const state = yield call(api.scene.init, {} );
            yield put({ type: 'SetScene', payload: state });
        },
        *GetScene({payload:sceneid}, {call,put}){
            const scene = yield call(api.scene.item, {sceneid} );
            yield put({ type: 'AppendScene', payload: sceneid, scene });
        },
        *SceneProcess({payload:sceneid,stepid}, {call}){
            yield call(api.scene.process, {sceneid,stepid} );
        },
    },
    reducers:{
        SetScene(_,{payload:state}) {
            return {..._,...state}
        },
        AppendScene(state,{payload:sceneid,scene}) {
            const _ = {...state};
            if (_.scenes.length > sceneid){
                _.scenes[sceneid] = scene;
            }else if(_.scenes.length === sceneid){
                _.scenes.push(scene);
            }else{
                let jmp = sceneid - _.scenes.length;
                while(jmp--){
                    _.scenes.push(null);
                }
                _.scenes.push(scene);
            }
            return _
        },
        SetSceneId(state,{payload:sceneid}) {
            return {...state,stepid:0,sceneid}
        },
        SetStepId(state,{payload:stepid}) {
            return {...state,stepid}
        },
    }
};