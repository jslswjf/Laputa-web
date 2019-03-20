import api from '../src/services/defs';

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
  
  [api.version.get.method +' '+ api.version.get.url] : (req, res)=>{

    setTimeout(() => {
      res.json(varsion);
    }, 1000);

  },

  [api.session.login.method +' '+ api.session.login.url] : (req, res)=>{

    const token = GenerateToken();
    userInfo.token = token;
    userInfo.iseducator = (Math.random()>0.5);
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

  [api.session.logout.method +' '+ api.session.logout.url] : (req, res)=>{


    if(BadTokenRes(req,res)){
      return;
    }

    setTimeout(() => {
      res.json({ });
    }, 1000);

  },

  [api.school.select.method +' '+ api.school.select.url] : (req, res)=>{

    
    if(BadTokenRes(req,res)){
      return;
    }
    
    const schoolid = userInfo.schools[(Math.random()>0.5)?0:1].id;
    userInfo.schoolid = schoolid;

    console.log(schoolid);

    setTimeout(() => {
      res.json({schoolid});
    }, 1000);

  },


}
