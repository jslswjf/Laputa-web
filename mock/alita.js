
const sctipt = {
    resoursepath:'/alita',
    title:'六足步行机器人',
    tasks:[
        {
            title:'阿丽塔的钢铁城探秘——六足步行机器人',
            steps:[
                {
                    title:'学习目标',
                    background:'钢铁城-家.png',
                    contents:[
                        '认识并探索六足机器人',
                        '学习并认识多种六足机器人',
                        '了解差速运动和差速器',
                        '搭建六足机器人'
                    ]
                }
            ]
        }
    ]
};


export default {
  
    'GET /api/scene/get' : (req, res)=>{
  
      setTimeout(() => {
        res.json(sctipt);
      }, 1000);
  
    },
}