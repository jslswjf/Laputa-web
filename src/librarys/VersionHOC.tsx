import { connect } from 'dva';
import * as React from 'react';

export default (WrappedComponent) => {
    
    const mapStateToProps = (state) => {
        return {
            majorVersion:state.version.major,
            courseVersion:state.version.course || state.version.major,
        };
    };
    
    const mapDispatchToProps = (dispatch) => {
        return {
            GetVersion: () => {
                const action = {
                    type: `version/GetVersion`,
                };
                dispatch(action);
            },
        };
    };

    @connect(mapStateToProps, mapDispatchToProps)
    class VersionWrapper extends React.Component<{
        majorVersion:any
        courseVersion:any,
        GetVersion:any,
        history:any,
        match:any,
        computedMatch:any,
    }>{

        public componentWillMount(){
            if(!this.props.majorVersion){
                this.props.GetVersion();
            }
        }
  
        public render(){

            const {
                majorVersion, 
                courseVersion, 
                GetVersion, 
                history, 
                match,
                computedMatch,
                ...ComponentProps
            } = {...this.props} 

            return (<WrappedComponent {...ComponentProps} />);
        }
  
    }
  
    return VersionWrapper;

}