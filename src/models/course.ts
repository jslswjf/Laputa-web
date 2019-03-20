
import api from '../services/api';

/**
 * 课程
 */

export default {
    namespace: 'course',
    state:{
        catalogue:null,
        courses:{},
        details:{}
    },
    // effects: {
    //     *GetCatalogue( _ , {call,put}){
    //         const catalogue = yield call(api.course.catalogue);
    //         yield put({ type: 'SetCatalogue', payload: catalogue });
    //     },
    //     *ListCourse({major,sub,pagecnt,userid}, {call,put}){
    //         const courses = yield call(api.course.list, {major,sub,pagecnt,userid} );
    //         const params = api.Params({major,sub,pagecnt,userid});
    //         yield put({ type: 'SetCourses', payload: params, courses });
    //     },
    //     *DetailCourse({courseid}, {call,put}){
    //         const detail = yield call(api.course.detail, {courseid});
    //         yield put({ type: 'SetDetails', payload: courseid, detail });
    //     },
    // },
    reducers:{
        SetCatalogue(state,{payload:catalogue}) {
            return {...state,catalogue}
        },
        SetCourses(state,{payload: params, courses }) {
            state.course[params]=courses;
            return {...state}
        },
        SetDetails(state,{payload: courseid, detail }) {
            state.details[courseid]=detail;
            return {...state}
        },
    }
};


