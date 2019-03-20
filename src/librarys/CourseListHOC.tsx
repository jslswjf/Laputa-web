import { connect } from 'dva';
import * as React from 'react';
import router from 'umi/router';
import {getPageQuery,getQueryPath} from '../utils/utils';

export default (WrappedComponent) => {
    
    const mapStateToProps = (state) => {
        return {
            catalogue:state.course.catalogue,
            items:state.course.items,
            filter:state.course.filter||{},
            last:state.course.last,
            total:state.course.total||0,
            loading:state.loading.effects[`course/MoreItems`] || state.loading.effects[`course/ListCourse`] || state.loading.effects[`course/GetCatalogue`]
        };
    };
    
    const mapDispatchToProps = (dispatch) => {
        return {
            GetCatalogue: () => {
                const action = {
                    type: `course/GetCatalogue`,
                };
                dispatch(action);
            },
            ListCourse: (filter) => {
                const action = {
                    type: `course/ListCourse`,
                    payload: filter,
                };
                dispatch(action);
            },
            MoreItems: (last,filter) => {
                const action = {
                    type: `course/MoreItems`,
                    payload: last,filter,
                };
                dispatch(action);
            },
            ClearItems: (filter) => {
                const action = {
                    type: `course/ClearItems`,
                };
                dispatch(action);
            },
        };
    };

    @connect(mapStateToProps, mapDispatchToProps)
    class CourseListWrapper extends React.Component<{
        catalogue:any,
        GetCatalogue:any,
        items:any,
        filter:any,
        total:number,
        ListCourse:any,
        MoreItems:any,
        ClearItems:any,
        location:any,
        last:any,
        loading:any
    }>{

        public componentWillMount(){
            if(!this.props.catalogue){
                this.props.GetCatalogue();
            }
            if(!this.props.items){
                this.props.ListCourse(getPageQuery());
            }
        }
  
        public render(){

            const {
                GetCatalogue,
                location,
                ListCourse,
                MoreItems,
                ClearItems,
                filter,
                last,
                loading,
                ...ComponentProps
            } = {...this.props};

            const UpdateView = (nxtfilter)=>{
                this.props.ClearItems();
                this.props.ListCourse(nxtfilter);
                router.push({pathname:location.pathname,query:nxtfilter});
            }

            const More = () => {
                if(!loading){
                    MoreItems(last,filter);
                }
            }

            return (<WrappedComponent {...{UpdateView,More,filter}} {...ComponentProps} />);
        }
  
    }
  
    return CourseListWrapper;

}