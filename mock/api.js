
const GenerateToken = ()=>{
  const token =  'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, function(c) {
    var r = Math.random() * 16 | 0,
      v = c == 'x' ? r : (r & 0x3 | 0x8);
    return v.toString(16);
  }).toUpperCase();
  return token;
}

let varsion = {
  major: '0'
}

let catalogue = {
  major:[
    {
      id:'0',
      name:'普惠课',
      sub:[
        {
          id:'0/0',
          name:'探究与发明'
        },
        {
          id:'0/1',
          name:'人工智能下的物联网'
        },
        {
          id:'0/2',
          name:'创新与创意'
        },
      ]
    },{
      id:'1',
      name:'社团课',
      sub:[
        {
          
          id:'1/0',
          name:'Scratch'
        },
        {
          id:'1/1',
          name:'Python'
        },
        {
          id:'1/2',
          name:'3D Design'
        },
        {
          id:'1/3',
          name:'3D Print'
        },
        {
          id:'1/4',
          name:'无人机'
        },
        {
          id:'1/5',
          name:'航模'
        },
      ]
    },{
      id:'2',
      name:'竞赛课',
      sub:[
        {
          id:'2/0',
          name:'FLL'
        },
        {
          id:'2/1',
          name:'FGC'
        },
        {
          id:'2/2',
          name:'FTC'
        },
        {
          id:'2/3',
          name:'VEX'
        },
        {
          id:'2/4',
          name:'足球篮球'
        },
        {
          id:'2/5',
          name:'综合技能'
        },
      ]
    }
  ]
}

let course = {
  total:100,
  items:[
    '-1-','-2-','-3-','-4-','-5-'
  ]
}

let userInfo = {
  userid: "userid",
  account: "account",
  username:"username",
  token: null,
  thumbnail: '/favicon.ico',
  iseducator: (Math.random()>0.5),
  schoolid: null,
  schools:[ {id:0,name:'稼轩'}, {id:1,name:'二中'} ]
}

const BadTokenRes = (req,res)=>{
  // console.log(req.headers)
  if(!userInfo.token || req.headers.token != userInfo.token){
    setTimeout(() => {
      res.sendStatus(401);
    }, 1000);
    return true;
  }
  return false;
}

export default {
  
  'GET /api/version/get' : (req, res)=>{

    setTimeout(() => {
      res.json(varsion);
    }, 1000);

  },

  'POST /api/session/login' : (req, res)=>{

    const token = GenerateToken();
    userInfo.token = token;
    userInfo.iseducator = (Math.random()>0.1);
    userInfo.username = userInfo.iseducator ? 'A老师':'B同学'
    setTimeout(()=>{
      if(token == userInfo.token){
        userInfo.token = null;
      }
    },1000*60*3);

    setTimeout(() => {
      res.json(userInfo);
    }, 1000);

  },

  'DELETE /api/session/logout' : (req, res)=>{


    if(BadTokenRes(req,res)){
      return;
    }

    setTimeout(() => {
      res.json({ });
    }, 1000);

  },

  'PUT /api/school/select' : (req, res)=>{

    
    if(BadTokenRes(req,res)){
      return;
    }
    
    const schoolid = userInfo.schools[(Math.random()>0.5)?0:1].id;
    userInfo.schoolid = schoolid;

    setTimeout(() => {
      res.json({schoolid});
    }, 1000);

  },

  'GET /api/course/catalogue' : (req, res)=>{

    
    if(BadTokenRes(req,res)){
      return;
    }
    
    setTimeout(() => {
      res.json(catalogue);
    }, 1000);

  },

  'GET /api/course/list' : (req, res)=>{

    
    if(BadTokenRes(req,res)){
      return;
    }
    
    setTimeout(() => {
      res.json(course);
    }, 1000);

  },

  'GET /api/course/more' : (req, res)=>{

    
    if(BadTokenRes(req,res)){
      return;
    }
    
    setTimeout(() => {
      res.json(course.items);
    }, 1000);

  },


}
