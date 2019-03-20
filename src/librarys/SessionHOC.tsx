
import { connect } from 'dva';
import * as React from 'react';
import Redirect from 'umi/redirect';
import LoginComponent from '../components/login';
import NavComponent from '../components/nav';
import SchoolSelectComponent from '../components/schoolselect';

export default (WrappedComponent)=>{
  
  const mapStateToProps = (state) => {
    return {
      iseducator:state.session.user.iseducator,
      schoolid:state.session.user.schoolid,
      token:state.session.user.token,
      schools:state.session.user.schools,
    };
  };

  const mapDispatchToProps = (dispatch) => {
    return {
      
      Login: (account, password) => {
        const action = {
          type: `session/login`,
          payload: account, password, 
        };
        dispatch(action);
      },
      
      Logout: () => {
        const action = {
          type: `session/logout`
        };
        dispatch(action);
      },

      SelectSchool: (schoolid) => {
        const action = {
          type: `session/selectschool`,
          payload: schoolid,
        };
        dispatch(action);
      },

    };
};

  const PagesTeacherOnly = [
    '/course',
    '/dashboard',
  ];

  const PagesInnerNav = [
    '/classroom',
    '/dashboard',
  ];

  @connect(mapStateToProps, mapDispatchToProps)
  class SessionWrapper extends React.Component<{
    iseducator:boolean,
    schoolid:string,
    route:any,
    Login:any,
    Logout:any,
    SelectSchool:any,
    token:string,
    schools:any[],
  }>{

    public innerNav(){
      return (<WrappedComponent { ...this.props } />)
    }

    public render(){

      const { 
        iseducator, 
        schoolid, 
        token, 
        route,
        Login,
        Logout, 
        SelectSchool,
        schools, 
        children,
        ...ComponentProps 
      } = this.props;

      const onLogout = ()=>Logout();
      const onSelectSchool = (schoolId:string)=>SelectSchool(schoolId);
      const navProps = {iseducator,onLogout};
      const schoolselectProps = {onSelectSchool,schools};

      if(token===null){
        return  (<LoginComponent
          onLogin = {()=>{
            const inputs = window.document.getElementsByTagName('input');
            Login(inputs.account.value, inputs.password.value);
          }}
          />);
      }

      if(schoolid===null){
        return  (<SchoolSelectComponent {...schoolselectProps} />);
      }

      if(!iseducator && (PagesTeacherOnly.includes(this.props.route.path))){
          return (<Redirect to="/" />);
      }

      if(PagesInnerNav.includes(this.props.route.path)){
        return <WrappedComponent {...navProps} {...schoolselectProps} { ...ComponentProps } />
      }
      
      return <div>
        <NavComponent  { ...navProps } {...schoolselectProps} />
        <WrappedComponent { ...ComponentProps }/>
        </div>;
    }

  }

  return SessionWrapper;

}

