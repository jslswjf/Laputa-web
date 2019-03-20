
import api from '../services/api';

/**
 * 课程
 */


export default {
    namespace: 'course',
    state:{
        catalogue:null,
        total:null,
        items:null,
        filter:{},
        last:null,
        details:{}
    },
    effects: {
        *GetCatalogue( _ , {call,put}){
            const catalogue = yield call(api.course.catalogue);
            yield put({ type: 'SetCatalogue', payload: catalogue });
        },
        *ListCourse({payload : filter }, {call,put}){
            const course = yield call(api.course.list, {filter} );
            yield put({ type: 'SetItems', payload: filter,course });
        },
        *MoreItems({payload : last,filter }, {call,put}){
            const items = yield call(api.course.more, {last,filter} );
            yield put({ type: 'AppendItems', payload: items });
        },
    //     *DetailCourse({courseid}, {call,put}){
    //         const detail = yield call(api.course.detail, {courseid});
    //         yield put({ type: 'SetDetails', payload: courseid, detail });
    //     },
    },
    reducers:{
        SetCatalogue(state,{payload:catalogue}) {
            return {...state,catalogue};
        },
        SetItems(state,{payload: filter,course }) {
            const last = course.length?course.last():null;
            return {...state, last, filter, ...course};
        },
        AppendItems(state,{payload: items }) {
            return {...state, items:[...state.items,...items]};
        },
        ClearItems(state) {
            return {...state, items:null};
        },
        SetDetails(state,{payload: courseid, detail }) {
            state.details[courseid]=detail;
            return {...state};
        },
    }
};


