import request from '../utils/request';

export default {
    
    Params : values => (
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
    ),

    version : {

        get : (params)=>{
            return request('/api/version/get',{
                method: 'GET',
                ...params
            });
        },

    },

    session : {

        login : (params)=>{
            return request('/api/session/login',{
                method: 'POST',
                ...params
            });
        },

        logout : (params)=>{
            return request('/api/session/logout',{
                method: 'DELETE',
                ...params
            });
        },

    },
    
    school : {

        select : (params)=>{
            return request('/api/school/select',{
                method: 'PUT',
                ...params
            });
        },

    },

    course : {
        
        catalogue : (params)=>{
            return request('/api/course/catalogue',{
                method: 'GET',
                ...params
            });
        },

        list : (params)=>{
            return request('/api/course/list',{
                method: 'GET',
                ...params
            });
        },

        more : (params)=>{
            return request('/api/course/more',{
                method: 'GET',
                ...params
            });
        },

    },

    scene : {
        init : (params)=>{
            return request('/api/scene/init',{
                method: 'GET',
                ...params
            });
        },
        item : (params)=>{
            return request('/api/scene/item',{
                method: 'GET',
                ...params
            });
        },
        
    }

};
