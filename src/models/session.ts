import cookie from 'react-cookies';
import api from '../services/api';

/**
 * 会话
 */ 
const NULLUSER = {
  userid: null,
  account: null,
  token: null,
  thumbnail: null,
  iseducator: null,
  name: null,
  schoolid: null,
  school:{}
}

const session = {

  namespace: 'session',
  
  state:{
    user: cookie.load('state/session/user') || NULLUSER,
  },

  effects: {
    *login({ payload: account, password }, { call, put }) {
      const user = yield call(api.session.login,  {account,password} );
      yield put({ type: 'SetSession', payload: user });
    },
    *logout( _, { call, put }) {
      yield call(api.session.logout, {});
      yield put({ type: 'ClearSession' });
    },
    *selectschool( {payload:schoolid}, { call, put }) {
      const updateinfo = yield call(api.school.select, {schoolid});
      yield put({ type: 'SelectSchool' , payload:updateinfo });
    },
  },

  reducers: {
    SetSession(state, { payload: user }) {
      cookie.save('state/session/user',user);
      return {...state,user};
    },
    ClearSession(state) {
      cookie.remove('state/session/user');
      window.location.reload();
      return {...state, NULLUSER};
    },
    SelectSchool(state, {payload:updateinfo}) {
      const user = {...state.user,...updateinfo};
      cookie.save('state/session/user',user);
      window.location.reload();
      return {...state, user};
    },
  },

};

export {
  session as default,
};
