import contentType from '../src/utils/defs';

const basePath = '/scene/石油开采机';

const script = {
    info:{
        title:'石油开采机',
        scenescount:null,
    },
    objects:{
        '皮带轮':{
            type:contentType.ObjectElem,
            src:`${basePath}/皮带轮.png`,
            'Content-Type':'image/png',
            style:{
                position:'absolute',
                left:'50%',
                top:'10%',
                margin:'413px 0 0 -312px',
                width:'100px',
                display:'block',

            }
        },
        '皮带':{
            type:contentType.ObjectElem,
            src:`${basePath}/皮带.png`,
            'Content-Type':'image/png',
            style:{
                position:'absolute',
                left:'50%',
                top:'10%',
                margin:'413px 0 0 -312px',
                width:'100px',
                display:'block',

            }
        },
        '大轮':{
            type:contentType.ObjectElem,
            src:`${basePath}/大轮.png`,
            'Content-Type':'image/png',
            style:{
                position:'absolute',
                left:'50%',
                top:'10%',
                margin:'413px 0px 0px -273.8px',
                width:'62px',
                display:'block',
            }
        },
        '小轮':{
            type:contentType.ObjectElem,
            src:`${basePath}/小轮.png`,
            'Content-Type':'image/png',
            style:{
                position:'absolute',
                left:'50%',
                top:'10%',
                margin:'507px 0px 0px -312px',
                width:'23px',
                display:'block',
            }
        },
        '连杆':{
            type:contentType.ObjectElem,
            src:`${basePath}/连杆.png`,
            'Content-Type':'image/png',
            style:{
                position:'absolute',
                left:'50%',
                top:'10%',
                margin:'507px 0px 0px -312px',
                width:'23px',
                display:'block',
            }
        },
        '游梁':{
            type:contentType.ObjectElem,
            src:`${basePath}/游梁.png`,
            'Content-Type':'image/png',
            style:{
                position:'absolute',
                left:'50%',
                top:'10%',
                margin:'507px 0px 0px -312px',
                width:'23px',
                display:'block',
            }
        },
        '连杆机构':{
            type:contentType.ObjectElem,
            src:`${basePath}/连杆机构.png`,
            'Content-Type':'image/png',
            style:{
                position:'absolute',
                left:'50%',
                top:'20%',
                margin:'50px 0 0 510px',
                display:'block',
                width:'80px',
            }
        },
        '曲柄机构':{
            type:contentType.ObjectElem,
            src:`${basePath}/曲柄机构.png`,
            'Content-Type':'image/png',
            style:{
                position:'absolute',
                left:'50%',
                top:'50%',
                margin:'50px 0 0 510px',
                display:'block',
                width:'80px',
            }
        },
    },
    scenes:[
        {
            info:{
                title:'学习目标',
                background:`url(${basePath}/房间.png)`,
                stepcount:null,
            },
            objects:{
                '石油开采机':{
                    type:contentType.ObjectElem,
                    src:`${basePath}/石油开采机.gif`,
                    'Content-Type':'image/gif',
                    style:{
                        position:'absolute',
                        bottom:'100px',
                        left:'500px',
                        display:'block',
                        width:'100px'
                    },
                },
                '学习目标':{
                    type:contentType.TextElem,
                    text:[
                        `学习石油开采机的结构，了解其工作原理。`,
                        `学习平台四杆机构，了解运动副的概念及其类型。`,
                        `学习平台四杆机构的类型，了解其结构特点。`,
                        `通过搭建石油开采机的模型，掌握平面四杆机构的联动方式。`
                    ],
                    style:{
                        color:'white',
                        fontSize:'24px',
                        lineHeight:'48px',
                        margin:'50px',
                        textShadow:'0 0 0.2em #000, -0 -0 0.2em #000',
                        textAlign:'center',
                    },
                },
            },
            steps:[
                {
                    objects:{
                        '石油开采机':{
                            style:{},
                            appear:true,
                        }
                    },
                    info:{
                        timeout:300,
                        auto:true,
                    }
                },
                {
                    objects:{
                        '学习目标':{
                            style:{},
                            appear:true,
                        }
                    },
                    info:{
                        timeout:1000,
                    }
                }
            ]
        },
        {
            info:{
                title:'紧急信件',
                background:`#000`,
                stepcount:null,
            },
            objects:{
                
                '开场独白':{
                    type:contentType.TextElem,
                    text:[
                        `呃......头好疼`,
                        `这是哪里？我是谁？`,
                        `地上是什么?`
                    ],
                    style:{
                        color:'white',
                        fontSize:'24px',
                        lineHeight:'48px',
                        margin:'50px',
                        textShadow:'0 0 0.2em #000, -0 -0 0.2em #000',
                        textAlign:'center',
                    },
                },
                '地上的信件':{
                    type:contentType.ObjectElem,
                    src:`${basePath}/地上的信件.png`,
                    'Content-Type':'image/png',
                    style:{
                        position:'absolute',
                        bottom:'20px',
                        left:'50%',
                        margin:'0 0 0 -250px',
                        display:'block',
                        width:'500px',
                    },
                },
                '读信件':{
                    type:contentType.ObjectElem,
                    src:`${basePath}/读信件.png`,
                    'Content-Type':'image/png',
                    style:{
                        position:'absolute',
                        bottom:0,
                        left:'50%',
                        margin:'0 0 0 -500px',
                        display:'block',
                        width:'1000px',
                    }
                },
                '读信后独白':{
                    type:contentType.TextElem,
                    text:[
                        `我是首席机械师？有点想不起来了...`,
                        `他们很着急，可是石油开采机怎么做呢？`,
                        `去书房里找找有没有什么资料。`
                    ],
                    style:{
                        color:'white',
                        fontSize:'24px',
                        lineHeight:'48px',
                        margin:'50px',
                        textShadow:'0 0 0.2em #000, -0 -0 0.2em #000',
                        textAlign:'center',
                    },
                },
            },
            steps:[
                {
                    objects:{
                        '开场独白':{
                            style:{},
                            appear:true,
                        }
                    },
                    info:{
                        timeout:1000,
                        auto:true,
                    }
                },
                {
                    objects:{
                        '地上的信件':{
                            style:{},
                            appear:true,
                        }
                    },
                    info:{
                        timeout:300,
                    }
                },
                {
                    objects:{
                        '开场独白':{
                            style:{},
                            appear:false,
                        },
                        '地上的信件':{
                            style:{},
                            appear:false,
                        },
                        '读信件':{
                            style:{},
                            appear:true,
                        }
                    },
                    info:{
                        timeout:300,
                        auto:true
                    }
                },
                {
                    objects:{
                        '读信后独白':{
                            style:{},
                            appear:true,
                        }
                    },
                    info:{
                        timeout:1000,
                    }
                }
            ]
        },
        {
            info:{
                title:'图纸',
                background:`url(${basePath}/房间.png)`,
                stepcount:null,
            },
            objects:{
                '模糊的图纸':{
                    type:contentType.ObjectElem,
                    src:`${basePath}/模糊的图纸.png`,
                    'Content-Type':'image/png',
                    style:{
                        position:'absolute',
                        left:`${2.5*19.20}px`,
                        top:`${64*10.80}px`,
                    }
                },
                '模糊的图纸展开':{
                    type:contentType.ObjectElem,
                    src:`${basePath}/模糊的图纸展开.png`,
                    'Content-Type':'image/png',
                    style:{
                        position:'absolute',
                        left:'50%',
                        top:'10%',
                        margin:'50px 0 0 -500px',
                        display:'block',
                        width:'1000px',
                    }
                },
                '观察图纸':{
                    type:contentType.TextElem,
                    text:[
                        `好像缺了什么？`,
                        `在脑海中复现一下吧`,
                    ],
                    style:{
                        color:'white',
                        fontSize:'24px',
                        lineHeight:'48px',
                        textShadow:'0 0 0.2em #000, -0 -0 0.2em #000',
                        textAlign:'center',
                    },
                },
                '连杆机构是什么':{
                    type:contentType.TextElem,
                    text:[
                        `印象：连杆机构`,
                        `包含一个“运动副”（低副）`,
                        `可以与曲柄机构连接成“低副机构”`
                    ],
                    style:{
                        color:'#000',
                        fontSize:'24px',
                        lineHeight:'48px',
                        position:'absolute',
                        left:'50%',
                        top:'10%',
                        margin:'150px 0 0 100px',
                        display:'block',
                        textShadow:'0 0 0.2em #fff, -0 -0 0.2em #fff',
                    },
                },
                '曲柄机构是什么':{
                    type:contentType.TextElem,
                    text:[
                        `印象：曲柄机构`,
                        `可以与连杆机构连接成“低副机构”`,
                        `可以与皮带轮连接成“高副机构”`
                    ],
                    style:{
                        color:'#000',
                        fontSize:'24px',
                        lineHeight:'48px',
                        position:'absolute',
                        left:'50%',
                        top:'10%',
                        margin:'358px 0 0 0',
                        display:'block',
                        textShadow:'0 0 0.2em #fff, -0 -0 0.2em #fff',

                    },
                },
                '修复图纸':{
                    type:contentType.DragExam,
                    objects:[
                        {
                            source:'曲柄机构',
                            target:{
                                style:{
                                    top:'10%',
                                    margin:'358px 0 0 -215px',
                                    width:'122.5px',
                                },
                                hide:{
                                    opacity:0.1
                                }
                            },
                            explain:'曲柄机构是什么'
                        },
                        {
                            source:'连杆机构',
                            target:{
                                style:{
                                    top:'10%',
                                    margin:'218px 0 0 -235px',
                                    width:'280px',
                                },
                                hide:{
                                    height:'100px',
                                    opacity:0.1
                                }
                            },
                            explain:'连杆机构是什么'
                        },
                    ],
                    style:{

                    },
                },
                '想起了一些':{
                    type:contentType.TextElem,
                    text:[
                        `我隐约回忆起了一些...`,
                        `可是“运动副”,“高副”和“低副”都是什么？`,
                        `头有点疼，还是找找资料吧`,
                    ],
                    style:{
                        color:'white',
                        fontSize:'24px',
                        lineHeight:'48px',
                        textShadow:'0 0 0.2em #000, -0 -0 0.2em #000',
                        textAlign:'center',
                    },
                },
            },
            steps:[
                {
                    objects:{
                        '模糊的图纸':{
                            style:{},
                            appear:true,
                        }
                    },
                    info:{
                        timeout:300,
                    }
                },
                {
                    objects:{
                        '模糊的图纸':{
                            style:{},
                            appear:false,
                        },
                        '模糊的图纸展开':{
                            style:{},
                            appear:true,
                        },
                    },
                    info:{
                        timeout:1000,
                        auto:true,
                    }
                },
                {
                    objects:{
                        '观察图纸':{
                            style:{},
                            appear:true,
                        }
                    },
                    info:{
                        timeout:100,
                        auto:true,
                    }
                },
                {
                    objects:{
                        '模糊的图纸展开':{
                            style:{
                                left:'50%',
                                transition: 'margin 1s',
                                margin:'50px 0 0 -600px',
                            },
                            appear:true,
                        }
                    },
                    info:{
                        timeout:600,
                        auto:true,
                    }
                },
                {
                    objects:{
                        // '皮带轮':{
                        //     style:{
                        //     },
                        //     appear:true,
                        // },
                        '修复图纸':{
                            style:{
                                position:'fixed',
                                top:0,
                                left:0,
                                bottom:0,
                                right:0,
                            },
                            appear:true,
                        },
                    },
                    info:{
                    }
                },
                {
                    objects:{
                        '观察图纸':{
                            style:{
                            },
                            appear:false,
                        },
                        '想起了一些':{
                            style:{
                            },
                            appear:true,
                        },
                    },
                    info:{
                        timeout:1500,
                        auto:true,
                    }
                    
                }
            ]
        },
        {
            info:{
                title:'设计要领',
                background:`url(${basePath}/书桌.png)`,
                stepcount:null,
            },
            objects:{
                '皮带轮机构组合':{
                    type:contentType.GroupElem,
                    style:{
                        position:'absolute',
                        left:'50%',
                        top:'10%',
                        margin:'500px 0 0 500px',
                        width:'100px',
                        height:'150px',
                    },
                    members:{
                        '皮带':{
                            style:{
                                left:'0%',
                                top:'0%',
                                margin:'0 0 0 0',
                                width:'100px',
                            },
                        },
                        '大轮':{
                            style:{
                                left:'0%',
                                top:'0%',
                                margin:'0 0 0 35px',
                                width:'65px',
                                animation:'TurntableAnimation 0.62s infinite linear'
                            },
                        },
                        '小轮':{
                            style:{
                                left:'0%',
                                top:'0%',
                                margin:'97px 0 0 0',
                                width:'23px',
                                animation:'TurntableAnimation 0.23s infinite linear'
                            },
                        },
                    },
                },
                '连杆机构组合':{
                    type:contentType.GroupElem,
                    style:{
                        position:'absolute',
                        left:'50%',
                        top:'10%',
                        margin:'150px 0 0 500px',
                        width:'170px',
                        height:'170px',
                    },
                    members:{
                        '游梁':{
                            style:{
                                left:'0%',
                                top:'0%',
                                margin:'0 0 0 0',
                                width:'140px',
                            },
                        },
                        '连杆':{
                            style:{
                                left:'0%',
                                top:'0%',
                                margin:'19.5px 0 0 16px',
                                width:'48.25px',
                                animation:'ReciprocatingAnimation 5s infinite linear',
                                transformOrigin:'12.5% 7%'
                            },
                        },
                    },
                },
                '皮带轮运动副分析':{
                    type:contentType.TextElem,
                    text:[
                        ``,
                    ],
                    style:{
                        display:'none',
                    },
                },
                '连杆运动副分析':{
                    type:contentType.TextElem,
                    text:[
                        ``,
                    ],
                    style:{
                        display:'none',
                    },
                },
                '书籍还原':{
                    type:contentType.DragExam,
                    objects:[
                        {
                            source:'连杆机构组合',
                            target:{
                                style:{
                                    top:'10%',
                                    margin:'360px 0 0 -450px',
                                },
                                hide:{
                                    opacity:0.01
                                }
                            },
                            explain:'连杆运动副分析'
                        },
                        {
                            source:'皮带轮机构组合',
                            target:{
                                style:{
                                    top:'10%',
                                    margin:'320px 0 0 90px',
                                },
                                hide:{
                                    opacity:0.01
                                }
                            },
                            explain:'皮带轮运动副分析'
                        },
                    ],
                    style:{
                        position:'fixed',
                        top:0,
                        left:0,
                        bottom:0,
                        right:0,
                    },
                },
                '打开的机械书':{
                    type:contentType.ObjectElem,
                    src:`${basePath}/打开的机械书.png`,
                    'Content-Type':'image/png',
                    style:{
                        position:'absolute',
                        left:'50%',
                        top:'10%',
                        margin:'50px 0 0 -600px',
                        display:'block',
                        width:'1200px',
                    }
                },
                '找到机械书':{
                    type:contentType.TextElem,
                    text:[
                        `找到了一本笔记`
                    ],
                    style:{
                        color:'white',
                        fontSize:'24px',
                        lineHeight:'48px',
                        textShadow:'0 0 0.2em #000, -0 -0 0.2em #000',
                        textAlign:'center',
                        margin:'50px',
                    },
                },
                '看机械书时':{
                    type:contentType.TextElem,
                    text:[
                        `一些内容缺失了`,
                        `我好像有点印象`,
                        `仔细读一读（半分钟）`,
                    ],
                    style:{
                        color:'white',
                        fontSize:'24px',
                        lineHeight:'48px',
                        textShadow:'0 0 0.2em #000, -0 -0 0.2em #000',
                        textAlign:'center',
                    },
                },
                '低副':{
                    type:contentType.ObjectElem,
                    src:`${basePath}/低副.png`,
                    'Content-Type':'image/png',
                    style:{
                        position:'absolute',
                        left:'50%',
                        top:'10%',
                        margin:'350px 0 0 -450px',
                        display:'block',
                        width:'170px',
                    },
                },
                '平面四杆机构':{
                    type:contentType.ObjectElem,
                    src:`${basePath}/平面四杆机构.gif`,
                    'Content-Type':'image/gif',
                    style:{
                        position:'absolute',
                        left:'50%',
                        top:'10%',
                        margin:'630px 0 0 -450px',
                        display:'block',
                        width:'170px',
                    },
                },
                '平面四杆机构2':{
                    type:contentType.ObjectElem,
                    src:`${basePath}/平面四杆机构2.gif`,
                    'Content-Type':'image/gif',
                    style:{
                        position:'absolute',
                        left:'50%',
                        top:'10%',
                        margin:'630px 0 0 -250px',
                        display:'block',
                        width:'170px',
                    },
                },
                '高副':{
                    type:contentType.ObjectElem,
                    src:`${basePath}/高副.png`,
                    'Content-Type':'image/png',
                    style:{
                        position:'absolute',
                        left:'50%',
                        top:'10%',
                        margin:'230px 0 0 50px',
                        display:'block',
                        width:'170px',
                    },
                },
                '齿轮组机构':{
                    type:contentType.ObjectElem,
                    src:`${basePath}/齿轮组机构.gif`,
                    'Content-Type':'image/gif',
                    style:{
                        position:'absolute',
                        left:'50%',
                        top:'10%',
                        margin:'200px 0 0 250px',
                        display:'block',
                        width:'170px',
                    },
                },
                '应该还有两个图':{
                    type:contentType.TextElem,
                    text:[
                        `回想起来了`,
                        `还有石油开采机的“拉杆机构”和'皮带轮"！`,
                        `应该在哪个位置？`,
                    ],
                    style:{
                        color:'white',
                        fontSize:'24px',
                        lineHeight:'48px',
                        textShadow:'0 0 0.2em #000, -0 -0 0.2em #000',
                        textAlign:'center',
                    },
                },
                '回想起来了':{
                    type:contentType.TextElem,
                    text:[
                        `石油开采机的核心结构!`,
                        `就是...,平面四杆机构的一种...`,
                        `是什么...，再找找资料吧`,
                    ],
                    style:{
                        color:'white',
                        fontSize:'24px',
                        lineHeight:'48px',
                        textShadow:'0 0 0.2em #000, -0 -0 0.2em #000',
                        textAlign:'center',
                    },
                },
            },
            steps:[
                {
                    objects:{
                        '找到机械书':{
                            style:{
                            },
                            appear:true,
                        },
                    },
                    info:{
                        timeout:300,
                    }
                },
                {
                    objects:{
                        '打开的机械书':{
                            style:{},
                            appear:true,
                        },
                        '低副':{
                            style:{},
                            appear:true,
                        },
                        '平面四杆机构':{
                            style:{},
                            appear:true,
                        },
                        '平面四杆机构2':{
                            style:{},
                            appear:true,
                        },
                        '高副':{
                            style:{},
                            appear:true,
                        },
                        '齿轮组机构':{
                            style:{},
                            appear:true,
                        },
                    },
                    info:{
                        timeout:300,
                        auto:true,
                    }
                },
                {
                    objects:{
                        '找到机械书':{
                            style:{
                            },
                            appear:false,
                        },
                        '看机械书时':{
                            style:{
                            },
                            appear:true,
                        },
                    },
                    info:{
                        timeout:1000*30,
                        auto:true
                    }
                },
                {
                    objects:{
                        '打开的机械书':{
                            style:{
                                transition: 'margin 1s',
                                margin:'50px 0 0 -800px',
                            },
                            appear:true,
                        },
                        '低副':{
                            style:{
                                transition: 'margin 1s',
                                margin:'350px 0 0 -650px',
                            },
                            appear:true,
                        },
                        '平面四杆机构':{
                            style:{
                                transition: 'margin 1s',
                                margin:'630px 0 0 -650px',
                            },
                            appear:true,
                        },
                        '平面四杆机构2':{
                            style:{
                                transition: 'margin 1s',
                                margin:'630px 0 0 -450px',
                            },
                            appear:true,
                        },
                        '高副':{
                            style:{
                                transition: 'margin 1s',
                                margin:'230px 0 0 -150px',
                            },
                            appear:true,
                        },
                        '齿轮组机构':{
                            style:{
                                transition: 'margin 1s',
                                margin:'200px 0 0 50px',
                            },
                            appear:true,
                        },
                    },
                    info:{
                        timeout:300,
                        auto:true,
                    }
                },
                {
                    objects:{
                        '看机械书时':{
                            style:{
                            },
                            appear:false,
                        },
                        '应该还有两个图':{
                            style:{},
                            appear:true,
                        },
                    },
                    info:{
                        timeout:1000,
                        auto:true,
                    }
                },
                {
                    objects:{
                        '书籍还原':{
                            style:{},
                            appear:true,
                        },
                    },
                    info:{
                    }
                },
                {
                    objects:{
                        '回想起来了':{
                            style:{},
                            appear:true,
                        },
                        '应该还有两个图':{
                            style:{
                            },
                            appear:false,
                        },
                    },
                    info:{
                        timeout:1000,
                        auto:true,
                    }
                },
            ]
            
        },
        {
            info:{
                title:'机械组装',
                background:`url(${basePath}/书桌.png)`,
                stepcount:null,
            },
            objects:{
                '组装步骤':{
                    type:contentType.StepsElem,
                    base:`${basePath}/build`,
                    'Content-Type':'image/jpg',
                    steps:[
                        ['1.1.jpg','1.2.jpg',],
                        ['2.1.jpg','2.2.jpg',],
                        ['3.1.jpg','3.2.jpg',],
                        ['4.1.jpg','4.2.jpg',],
                        ['5.1.jpg','5.2.jpg','5.3.jpg',],
                        ['6.1.jpg','6.2.jpg',],
                        ['7.1.jpg',],
                        ['8.1.jpg','8.2.jpg','8.3.jpg','8.4.jpg',],
                        ['9.1.jpg','9.2.jpg','9.3.jpg','9.4.jpg',],
                        ['10.1.jpg','10.2.jpg'],
                        ['11.1.jpg','11.2.jpg'],
                        ['12.1.jpg'],
                    ],
                    style:{
                        position:'fixed 0 0 0 0',
                        display:'block',
                    },
                },
            },
            steps:[
                {
                    objects:{
                        '组装步骤':{
                            style:{
                            },
                            appear:true,
                        },
                    },
                    info:{
                    }
                },
            ]
            
        },

    ]
};

const status = {
    sceneid:3,
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
        }, 1000);
  
    },
  
    'GET /api/scene/item' : (req, res)=>{
  
      setTimeout(() => {
        if(status.sceneid < 0 && status.sceneid >= script.scenescount-1){
            res.sendStatus(404);
        }else{
            status.sceneid = status.sceneid + 1;
            res.json(script.scenes[status.sceneid]);
        }
      }, 1000);
  
    },
}