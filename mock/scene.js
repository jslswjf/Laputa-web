
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
        if(status.sceneid < 0 && status.sceneid >= script.scenescount-1){
            res.sendStatus(404);
        }else{
            status.sceneid = status.sceneid + 1;
            res.json(script.scenes[status.sceneid]);
        }
      }, 3000);
  
    },
}