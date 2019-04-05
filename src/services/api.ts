import request from '../utils/request';

const Params2Url = (values) => (
    '?'.concat(Object.keys(values).map(key => {
        const value = typeof values[key] === 'undefined' ? '' : values[key];
        const encodeKeyValuePair = val => (
            [key, val].map(encodeURIComponent).join('=')
        );
        if (Array.isArray(value)) {
            return value.map(encodeKeyValuePair).join('&');
        }
        return encodeKeyValuePair(value);
    })
        .join('&'))
);

export default {
    

    version : {

        get : (params)=>{
            return request('/api/version/get'+Params2Url(params),{
                method: 'GET'
            });
        },

    },

    session : {

        login : (params)=>{
            return request('/api/session/login',{
                method: 'POST',
                body:JSON.stringify(params),
                headers:{
                    'Content-Type': 'application/json'
                  },
            });
        },

        logout : (params)=>{
            return request('/api/session/logout',{
                method: 'DELETE',
                body:JSON.stringify(params),
                headers:{
                    'Content-Type': 'application/json'
                  },
            });
        },

    },
    
    school : {

        select : (params)=>{
            return request('/api/school/select',{
                method: 'PUT',
                body:JSON.stringify(params),
                headers:{
                    'Content-Type': 'application/json'
                  },
            });
        },

    },

    course : {
        
        catalogue : (params)=>{
            return request('/api/course/catalogue'+Params2Url(params),{
                method: 'GET'
            });
        },

        list : (params)=>{
            return request('/api/course/list'+Params2Url(params),{
                method: 'GET'
            });
        },

        more : (params)=>{
            return request('/api/course/more'+Params2Url(params),{
                method: 'GET'
            });
        },

    },

    scene : {
        init : (params)=>{
            return request('/api/scene/init'+Params2Url(params),{
                method: 'GET'
            });
        },
        item : (params)=>{
            return request('/api/scene/item'+Params2Url(params),{
                method: 'GET'
            });
        },
        process:(params)=>{
            return request('/api/scene/process',{
                method: 'PUT',
                body:JSON.stringify(params),
                headers:{
                    'Content-Type': 'application/json'
                  },
            });
        },
        
    }

};
