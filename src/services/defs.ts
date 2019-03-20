
export default {

    version : {

        get : {
            url: '/api/version/get',
            method: 'GET',
            params: { },
            filter: { },
            return: { version:{ } }
        },

    },

    enroll : {
        url: '/api/enroll/post',
        method: 'POST',
        params: { detail:{ } },
        filter: { },
        return: { enrollid:0 },
    },

    session : {


        login : {
            url: '/api/session/login',
            method: 'POST',
            params: { account:'', password:'' },
            filter: { },
            return: { }
        },

        logout : {
            url: '/api/session/logout',
            method: 'DELETE',
            params: { },
            filter: { },
            return: { }
        },

    },
    
    school : {

        select : {
            url: '/api/school/select',
            method: 'PUT',
            params: { schoolid:0 },
            filter: { },
            return: { }
        },

    },
    
    course : {

        create : {
            url: '/api/course/create',
            method: 'POST',
            params: { detail:{ } },
            filter: { },
            return: { courseid:0 },
        },

        own : {
            url: '/api/course/own', // into additional
            method: 'POST',
            params: { courseid:0 , own:true },
            filter: { },
            return: { },
        },

        collect : {
            url: '/api/course/collect', // into additional
            method: 'POST',
            params: { courseid:0 , collect:true },
            filter: { },
            return: { },
        },

        share : {
            url: '/api/course/share', // into additional
            method: 'POST',
            params: { courseid:0 , share:true },
            filter: { free: false },
            return: { },
        },
        
        delete : {
            url: '/api/course/delete',
            method: 'DELETE',
            params: { courseid:0 },
            filter: { },
            return: { },
        },
        
        update : {
            url: '/api/course/update',
            method: 'PUT',
            params: { courseid:0 , detail: { } },
            filter: { },
            return: { },
        },

        catalogue : {
            url: '/api/course/catalogue',
            method: 'GET',
            params: { },
            filter: { },
            return: { } // { [ { major, [ { sub } ] } ] }
        },

        list : {
            url: '/api/course/list',
            method: 'GET',
            params: { },
            filter: { majorid:0, subid:0, page:{ chunk:20, id:0 }, own:true , collected:true },
            return: { courses: [ ] }
        },

        detail : {
            url: '/api/course/detail',
            method: 'GET',
            params: { courseid:0 },
            filter: { },
            return: { detail: { } , sections: [ ] , additional: { } } // { detail, [ { section } ], additional }
        },

    },

    section : {

        create : {
            url: '/api/section/create',
            method: 'POST',
            params: { detail:{ } },
            filter: { },
            return: { sectionid:0 },
        },

        delete : {
            url: '/api/section/delete',
            method: 'DELETE',
            params: { sectionid:0 },
            filter: { },
            return: { },
        },

        update : {
            url: '/api/section/update',
            method: 'PUT',
            params: { sectionid:0 , detail:{ } },
            filter: { },
            return: { },
        },

        edit : {
            url: '/api/section/edit',
            method: 'GET',
            params: { sectionid:0 },
            filter: { },
            return: { content:{ } },
        },

        content : {
            url: '/api/section/content',
            method: 'GET',
            params: { sectionid:0 },
            filter: { },
            return: { content:{ } },
        },

    },

    period : {

        start: {
            url: '/api/period/start',
            method: 'POST',
            params: { sectionid:0 },
            filter: { },
            return: { periodid:0 },
        },

        stop: {
            url: '/api/period/stop',
            method: 'DELETE',
            params: { periodid:0 },
            filter: { },
            return: { },
        },

        pasue: {
            url: '/api/period/pasue',
            method: 'PUT',
            params: { periodid:0 },
            filter: { },
            return: { },
        },

        list: {
            url: '/api/period/list',
            method: 'GET',
            params: { },
            filter: {  majorid:0, subid:0, schoolid:0, gradeid:0, teamid:0, courseid:0, sectionid:0, periodid:0, time:{ } , page:{ chunk:20, id:0 }, serving:true, join:false },
            return: { periods:[ ] },
        },

        status: {
            url: '/statistic/period/status',
            method: 'GET',
            params: { periodid:0 },
            filter: { },
            return: { status:{ } },
        },

        update: {
            url: '/statistic/period/update',
            method: 'PUT',
            params: { periodid:0, status:{ } },
            filter: { },
            return: { },
        },

    },

    team : {

        create: {
            url: '/api/team/create',
            method: 'POST',
            params: { detail:{ } },
            filter: { },
            return: { teamid:0 },
        },

        delete: {
            url: '/api/team/delete',
            method: 'DELETE',
            params: { teamid:0 },
            filter: { },
            return: { },
        },

        update: {
            url: '/api/team/update',
            method: 'PUT',
            params: { teamid:0, detail:{ } },
            filter: { },
            return: { },
        },

        list: {
            url: '/api/team/list',
            method: 'GET',
            params: { },
            filter: { gradeid:0, serving:true, join:false },
            return: { teams: [ ] }
        },
    
    },

    member : {

        create: {
            url: '/api/member/create',
            method: 'POST',
            params: { detail:{ } },
            filter: { },
            return: { },
        },

        join: {
            url: '/api/member/join',
            method: 'POST',
            params: { memberid:0, teamid:0 , join:true },
            filter: { },
            return: { },
        },

        batchcreate: {
            url: '/api/member/batchcreate',
            method: 'POST',
            params: { teamid:0 },
            filter: { },
            return: { },
        },

        batchjoin: {
            url: '/api/member/batchjoin',
            method: 'POST',
            params: { teamid:0 },
            filter: { },
            return: { },
        },

        list: {
            url: '/api/member/list',
            method: 'GET',
            params: { },
            filter: { gradeid:0, teamid:0 },
            return: { members: [ ] }
        },
    
    },

    educator : {

        // create: {
        //     url: '/api/educator/create',
        //     method: 'POST',
        //     params: { detail:{ } },
        //     filter: { },
        //     return: { },
        // },

        // joinschool: {
        //     url: '/api/educator/joinschool',
        //     method: 'POST',
        //     params: { schoolname:'' },
        //     filter: { },
        //     return: { },
        // },

        joinclass: {
            url: '/api/educator/joinclass',
            method: 'POST',
            params: { teamid:0 , join:true },
            filter: { },
            return: { },
        },

        list: {
            url: '/api/educator/list',
            method: 'GET',
            params: { },
            filter: { gradeid:0, teamid:0 },
            return: { educators: [ ] }
        },

    },

    works : {
        
        create : {
            url: '/api/works/create',
            method: 'POST',
            params: { detail:{ } },
            filter: { },
            return: { worksid:0 },
        },
        
        delete : {
            url: '/api/works/delete',
            method: 'DELETE',
            params: { worksid:0 },
            filter: { },
            return: { },
        },
        
        update : {
            url: '/api/works/update',
            method: 'PUT',
            params: { worksid:0 , detail: { } },
            filter: { },
            return: { },
        },

        collect : {
            url: '/api/works/collect', // into additional
            method: 'POST',
            params: { worksid:0 , collect:true },
            filter: { },
            return: { },
        },

        star : {
            url: '/api/works/star',  // into additional， only for student
            method: 'POST',
            params: { worksid:0 , star:true },
            filter: { },
            return: { },
        },

        barrage : {
            url: '/api/works/barrage',  // into additional， only for student
            method: 'POST',
            params: { worksid:0 , barrage:{ } },
            filter: { },
            return: { },
        },

        evaluate : {
            url: '/api/works/evaluate',  // into additional， only for teacher
            method: 'POST',
            params: { worksid:0 , evaluate:{ } },
            filter: { },
            return: { },
        },

        comment : {
            url: '/api/works/comment',  // into additional， only for teacher
            method: 'POST',
            params: { worksid:0 , comment:{ } },
            filter: { },
            return: { },
        },

        share : {
            url: '/api/works/share', // into additional
            method: 'POST',
            params: { worksid:0 },
            filter: { },
            return: { },
        },

        list : {
            url: '/api/works/list',
            method: 'GET',
            params: { },
            filter: { majorid:0, subid:0, schoolid:0, gradeid:0, teamid:0, courseid:0 , sectionid:0, periodid:0, page:{ chunk:20, id:0 }, collected:true },
            return: { works: [ ] } // with additional
        },

    },

    user : {
        
        update : {
            url: '/api/user/update',
            method: 'PUT',
            params: { detail: { } },
            filter: { },
            return: { },
        },

    },

};
