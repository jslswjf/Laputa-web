import request from '../utils/request';
import api from './defs';

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
            return request(api.version.get.url,{
                method: api.version.get.method,
                ...params
            });
        },

    },

    session : {

        login : (params)=>{
            return request(api.session.login.url,{
                method: api.session.login.method,
                ...params
            });
        },

        logout : (params)=>{
            return request(api.session.logout.url,{
                method: api.session.logout.method,
                ...params
            });
        },

    },
    
    school : {

        select : (params)=>{
            return request(api.school.select.url,{
                method: api.school.select.method,
                ...params
            });
        },

    },



};
