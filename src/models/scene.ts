
import api from '../services/api';

/**
 * 场景设置
 */
export default {
    namespace: 'scene',
    state:{
        resoursepath:null,
        title:null,
        tasks:null,
        taskid:0,
        stepid:0
    },
    effects: {
        *GetScene(payload, {call,put}){
            const scene = yield call(api.scene.get, payload );
            yield put({ type: 'SetScene', payload: scene });
        }
    },
    reducers:{
        SetScene(_,{payload:scene}) {
            return {..._,...scene}
        },
        SetTask(_,{payload:taskid}) {
            return {..._,stepid:0,taskid}
        },
        SetStep(_,{payload:stepid}) {
            return {..._,stepid}
        },
    }
};