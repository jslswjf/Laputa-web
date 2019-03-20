
import api from '../services/api';

/**
 * 内容版本
 */
export default {
    namespace: 'version',
    state:{
    },
    effects: {
        *GetVersion(payload, {call,put}){
            const version = yield call(api.version.get, payload );
            yield put({ type: 'SetVersion', payload: version });
        }
    },
    reducers:{
        SetVersion(_,{payload:version}) {
            return {...version}
        }
    }
};