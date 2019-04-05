
import script from '../src/utils/sykcj';


const status = {
    sceneid:0,
    stepid:0
}


script.info.scenescount = script.scenes.length;
script.scenes.map((scene,i)=>{
    script.scenes[i].info.stepcount = scene.steps.length;
});

export default {
  
    'GET /api/scene/init' : (req, res)=>{
  
        setTimeout(() => {
            const info = script.info;
            const sceneid = status.sceneid;
            const stepid = status.stepid;
            const objects = script.objects;
            const scenes = new Array(sceneid+1).fill(null);
            scenes[sceneid] = script.scenes[sceneid];
            res.json({ info, objects, scenes, sceneid, stepid });
        }, 3000);
  
    },
  
    'GET /api/scene/item' : (req, res)=>{

      setTimeout(() => {
        const sceneid = Number(req.query.sceneid);
        if(sceneid < 0 || sceneid >= script.scenescount-1){
            res.sendStatus(404);
        }else{
            res.json(script.scenes[sceneid]);
        }
      }, 3000);
  
    },

    'PUT /api/scene/process' : (req, res)=>{

      setTimeout(() => {
        if(req.body.sceneid<status.sceneid){
            status.sceneid =  Math.min(req.body.sceneid, script.info.scenescount-1);
            status.stepid = Math.min(req.body.stepid, script.scenes[status.sceneid].info.stepcount-1);
        }else if(req.body.sceneid===status.sceneid){
            status.sceneid =  Math.min(req.body.sceneid, script.info.scenescount-1);
            status.stepid = Math.min(status.stepid+1, req.body.stepid, script.scenes[status.sceneid].info.stepcount-1);
        }else if(req.body.sceneid===status.sceneid+1){
            status.sceneid =  Math.min(req.body.sceneid, script.info.scenescount-1);
            status.stepid = 0;
        }else{
            res.sendStatus(404);
            return;
        }
        res.json({...status});
      }, 3000);
  
    },

}