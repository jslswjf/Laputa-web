
import contentType from './defs';
const basePath = '/scene/石油开采机';

// 图片基础样式
const imageStyle = {
    position:'absolute', 
    display:'block'
}

// 独白基础样式
const soliloquyStyle = {
    color:'white',
    fontSize:'24px',
    lineHeight:'36px',
    margin:'10px',
    textShadow:'0 0 0.2em #000, -0 -0 0.2em #000',
    textAlign:'center',
}

const img2object = (img)=>{
    return {
        type:contentType.ObjectElem,
        src:`${basePath}/${img}`,
        'Content-Type':`image/${img.substr(img.lastIndexOf('.'),img.length-img.lastIndexOf('.'))}`,
        style:imageStyle, 
    }
}

const loadimgs = (imgs)=>{
    const objects = {}
    imgs.map((img)=>{
        objects[img.substr(0,img.lastIndexOf('.'))]=img2object(img)
    })
    return objects;
}

const soliloquy2object = (soliloquy)=>{
    return {
        type:contentType.TextElem,
        text:soliloquy.split('\n'),
        style:soliloquyStyle
    }
}

const loadsoliloquys = (soliloquys:string[][])=>{
    const objects = {}
    soliloquys.filter(soliloquy=>soliloquy.length===2&&soliloquy[0]&&soliloquy[1]).map((soliloquy)=>{
        objects[soliloquy[0]]=soliloquy2object(soliloquy[1])
    })
    return objects;
}

export default {
    info:{
        title:'石油开采机',
        scenescount:null,
    },
    objects:{
        ...loadimgs([
        '低副.png', '平面四杆机构.gif', '平面四杆机构2.gif', '高副.png',
        '齿轮组机构.gif', '皮带轮.png', '皮带.png', '大轮.png','石油开采机.gif',
        '小轮.png', '连杆.png', '游梁.png', '连杆机构.png', '曲柄机构.png',
        '地上的信件.png','读信件.png','模糊的图纸.png','模糊的图纸展开.png',
        '打开的机械书.png','平面四杆机构类型盒子.png','平面四杆机构概念.png',
        '曲柄连杆机构.jpg','双曲柄机构.jpg','平行双曲柄机构.jpg','反向双曲柄机构.jpg',
        '曲柄摇杆机构动图.gif','双曲柄机构动图.gif','平行双曲柄机构动图.gif','反向双曲柄机构动图.gif'
        ]),
        ...loadsoliloquys([
            ['学习目标',        '学习石油开采机的结构，了解其工作原理。\n学习平台四杆机构，了解运动副的概念及其类型。\n学习平台四杆机构的类型，了解其结构特点。\n通过搭建石油开采机的模型，掌握平面四杆机构的联动方式。'],
            ['注意事项',        '请注意观察动图！'],
            ['开场',            '呃......头好疼\n这是哪里？我是谁？\n地上是什么?'],
            ['读信后',          '我是首席机械师？有点想不起来了...\n他们很着急，可是石油开采机怎么做呢？\n去书房里找找有没有什么资料。'],
            ['观察图纸',        '好像缺了什么？\n在脑海中复现一下吧'],
            ['连杆机构？？',    '印象：连杆机构\n包含一个“运动副”（低副）\n可以与曲柄机构连接成“低副机构”'],
            ['曲柄机构？？',    '印象：曲柄机构\n可以与连杆机构连接成“低副机构”\n可以与皮带轮连接成“高副机构”'],
            ['想起了一些',      '我隐约回忆起了一些...\n可是“运动副”,“高副”和“低副”都是什么？\n呃...想不起来了，还是找找资料吧'],
            ['找到机械书',      '找到了一本笔记'],
            ['看机械书时',      '一些内容缺失了\n我好像有点印象\n仔细阅读完吧'],
            ['应该还有两个图',  '回想起来了\n还有石油开采机的“拉杆机构”和“皮带轮”！\n应该在哪个位置？'],
            ['回想起来了',      '石油开采机的核心结构!\n就是...,平面四杆机构的一种...\n是什么...，再找找资料吧'],
            ['幻觉',            '我正准备查找资料!\n眼前好像出现了幻觉\n这是我脑海中尘封的记忆吗？\n图中有五颗宝石，挨个看看吧'],
        ]),
        
        '皮带轮机构组合':{
            type:contentType.GroupElem,
            style:{
                position:'absolute',
                display:'block'
            },
            members:{
                '皮带':{
                    style:{
                        left:'0%',
                        top:'0%',
                        margin:'0 0 0 0',
                        width:'100%',
                    },
                },
                '大轮':{
                    style:{
                        left:'0%',
                        top:'0%',
                        margin:'0 0 0 35%',
                        width:'65%',
                        animation:'TurntableAnimation 0.62s infinite linear'
                    },
                },
                '小轮':{
                    style:{
                        left:'0%',
                        top:'0%',
                        margin:'97% 0 0 0',
                        width:'23%',
                        animation:'TurntableAnimation 0.23s infinite linear'
                    },
                },
            },
        },
        '连杆机构组合':{
            type:contentType.GroupElem,
            style:{
                position:'absolute',
                display:'block'
            },
            members:{
                '游梁':{
                    style:{
                        left:'0%',
                        top:'0%',
                        margin:'0 0 0 0',
                        width:'100%',
                        transformOrigin:'60% 77%',
                        animation:'WalkingBeamAnimation 3s infinite linear',
                    },
                },
                '连杆':{
                    style:{
                        left:'0%',
                        top:'0%',
                        margin:'14.1% 0px 0px 11.5%',
                        width:`${48.25/140*100}%`,
                        transformOrigin:'13.6% 6.8%',
                        animation:'ConnectingRodAnimation 3s infinite linear',
                    },
                },
            },
        },
    },
    scenes:[
        {
            info:{
                title:'学习目标',
                style:{
                    background:`#000000`
                },
                stepcount:null,
            },
            objects:{ },
            steps:[
                {
                    objects:{
                        '石油开采机':{
                            style:{
                                width:'400px',
                                left:'50%',
                                margin:'400px 0 0 -200px'
                            },
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
                            style:{
                                marginTop:'100px'
                            },
                            appear:true,
                        }
                    },
                    info:{
                        timeout:1000,
                    }
                },
                {
                    objects:{
                        '学习目标':{
                            style:{
                                marginTop:'100px'
                            },
                            appear:false,
                        },
                        '注意事项':{
                            style:{
                                marginTop:'100px'
                            },
                            appear:true,
                        }
                    },
                    info:{
                        timeout:1500,
                    }
                }
            ]
        },
        {
            info:{
                title:'紧急信件',
                style:{
                    background:`#000`
                },
                stepcount:null,
            },
            objects:{ },
            steps:[
                {
                    objects:{
                        '开场':{
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
                            style:{
                                bottom:'20px',
                                left:'50%',
                                margin:'0 0 0 -250px',
                                width:'500px',
                            },
                            appear:true,
                        }
                    },
                    info:{
                        timeout:300,
                    }
                },
                {
                    objects:{
                        '开场':{
                            style:{},
                            appear:false,
                        },
                        '地上的信件':{
                            style:{},
                            appear:false,
                        },
                        '读信件':{
                            style:{
                                bottom:0,
                                left:'50%',
                                margin:'0 0 0 -500px',
                                width:'1000px',
                            },
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
                        '读信后':{
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
                style:{
                    background:`url(${basePath}/房间.png)`
                },
                stepcount:null,
            },
            objects:{
                '连杆机构？？':{
                    style:{
                        color:'#000',
                        fontSize:'24px',
                        lineHeight:'48px',
                        position:'absolute',
                        left:'50%',
                        top:'10%',
                        margin:'150px 0 0 50px',
                        display:'block',
                        textShadow:'0 0 0.2em #fff, -0 -0 0.2em #fff',
                        textAlign:'left'
                    },
                },
                '曲柄机构？？':{
                    style:{
                        color:'#000',
                        fontSize:'24px',
                        lineHeight:'48px',
                        position:'absolute',
                        left:'50%',
                        top:'10%',
                        margin:'358px 0 0 -50px',
                        display:'block',
                        textShadow:'0 0 0.2em #fff, -0 -0 0.2em #fff',
                        textAlign:'left'
                    },
                },
                '曲柄机构':{
                    style:{
                        left:'50%',
                        top:'50%',
                        margin:'50px 0 0 410px',
                        width:'100px',
                        transformOrigin: '26% 64%',
                        animation:'TurntableAnimation 3s infinite linear',
                    }
                },
                '连杆机构组合':{
                    style:{
                        left:'50%',
                        top:'20%',
                        margin:'50px 0 0 410px',
                        width:'170px',
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
                                    margin:'360px 0px 0px -270px',
                                    width:'140px',
                                },
                                hide:{
                                    opacity:0.01
                                }
                            },
                            explain:'曲柄机构？？'
                        },
                        {
                            source:'连杆机构组合',
                            target:{
                                style:{
                                    top:'10%',
                                    margin:'199px 0 0 -295px',
                                    width:'320px',
                                },
                                hide:{
                                    opacity:0.01,
                                    height: '100px',
                                    overflow:'hidden'
                                }
                            },
                            explain:'连杆机构？？'
                        },
                    ],
                    style:{

                    },
                },
            },
            steps:[
                {
                    objects:{
                        '模糊的图纸':{
                            style:{
                                left:`${2.5*19.20}px`,
                                top:`${64*10.80}px`,
                            },
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
                            style:{
                                left:'50%',
                                top:'10%',
                                margin:'50px 0 0 -500px',
                                width:'1000px',
                            },
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
                                top:'10%',
                                width:'1000px',
                                transition: 'margin 1s',
                                margin:'50px 0 0 -650px',
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
                                color:'white',
                                fontSize:'24px',
                                lineHeight:'48px',
                                textShadow:'0 0 0.2em #000, -0 -0 0.2em #000',
                                textAlign:'center',
                            },
                            appear:true,
                        },
                    },
                    info:{
                        timeout:1000,
                    }
                    
                }
            ]
        },
        {
            info:{
                title:'设计要领',
                style:{
                    background:`url(${basePath}/书桌.png)`
                },
                stepcount:null,
            },
            objects:{
                '打开的机械书组合':{
                    type:contentType.GroupElem,
                    style:{
                        position:'absolute',
                        top:'120px',
                        left:'50%',
                        margin:'0 0 0 -600px',
                        width:'1200px',
                    },
                    members:{
                        '打开的机械书':{
                            style:{
                                left:'0',
                                top:'0',
                                width:'1200px',
                            },
                        },
                        '低副':{
                            style:{
                                left:'130px',
                                top:'560px',
                                width:'170px',
                            },
                        },
                        '平面四杆机构':{
                            style:{
                                left:'680px',
                                top:'310px',
                                width:'170px',
                            },
                        },
                        '平面四杆机构2':{
                            style:{
                                left:'890px',
                                top:'310px',
                                width:'170px',
                            },
                        },
                        '高副':{
                            style:{
                                left:'620px',
                                top:'540px',
                                width:'170px',
                            },
                        },
                        '齿轮组机构':{
                            style:{
                                left:'800px',
                                top:'560px',
                                width:'170px',
                            },
                        },
                    },
                },
                '皮带轮机构组合':{
                    style:{
                        left:'50%',
                        top:'10%',
                        margin:'500px 0 0 550px',
                        width:'100px',
                        height:'100px',
                    },
                },
                '连杆机构组合':{
                    style:{
                        left:'50%',
                        top:'10%',
                        margin:'150px 0 0 550px',
                        width:'170px',
                        height:'170px',
                    }
                },
                '书籍还原':{
                    type:contentType.DragExam,
                    objects:[
                        {
                            source:'连杆机构组合',
                            target:{
                                style:{
                                    top:'120px',
                                    margin:'565px 0 0 -350px',
                                },
                                hide:{
                                    opacity:0.01
                                }
                            },
                            explain:null
                        },
                        {
                            source:'皮带轮机构组合',
                            target:{
                                style:{
                                    top:'120px',
                                    margin:'550px 0 0 290px',
                                },
                                hide:{
                                    opacity:0.01
                                }
                            },
                            explain:null
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
                        '打开的机械书组合':{
                            style:{
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
                        '打开的机械书组合':{
                            style:{
                                transition: 'margin 1s',
                                margin:'0 0 0 -700px',
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
                    }
                },
            ]
            
        },
        {
            info:{
                title:'平面四杆机构',
                style:{
                    background:`url(${basePath}/书桌.png)`
                },
                stepcount:null,
            },
            objects:{
                '曲柄连杆机构组合':{
                    type:contentType.GroupElem,
                    style:{
                        position:'absolute',
                        display:'block'
                    },
                    members:{
                        '曲柄连杆机构':{
                            style:{
                                left:'0%',
                                top:'0%',
                                width:'1000px',
                            },
                        },
                        '曲柄摇杆机构动图':{
                            style:{
                                left:'39%',
                                marginTop:'41%',
                                width:'30%',
                            },
                        },
                    },
                },
                '双曲柄机构组合':{
                    type:contentType.GroupElem,
                    style:{
                        position:'absolute',
                        display:'block'
                    },
                    members:{
                        '双曲柄机构':{
                            style:{
                                left:'0%',
                                top:'0%',
                                width:'1000px',
                            },
                        },
                        '双曲柄机构动图':{
                            style:{
                                left:'34%',
                                marginTop:'31%',
                                width:'40%',
                            },
                        },
                    },
                },
                '平行双曲柄机构组合':{
                    type:contentType.GroupElem,
                    style:{
                        position:'absolute',
                        display:'block'
                    },
                    members:{
                        '平行双曲柄机构':{
                            style:{
                                left:'0%',
                                top:'0%',
                                width:'1000px',
                            },
                        },
                        '平行双曲柄机构动图':{
                            style:{
                                left:'34%',
                                marginTop:'31%',
                                width:'40%',
                            },
                        },
                    },
                },
                '反向双曲柄机构组合':{
                    type:contentType.GroupElem,
                    style:{
                        position:'absolute',
                        display:'block'
                    },
                    members:{
                        '反向双曲柄机构':{
                            style:{
                                left:'0%',
                                top:'0%',
                                width:'1000px',
                            },
                        },
                        '反向双曲柄机构动图':{
                            style:{
                                left:'34%',
                                marginTop:'31%',
                                width:'40%',
                            },
                        },
                    },
                },
                '打开各个盒子':{
                    type:contentType.ClickElem,
                    container:'平面四杆机构类型盒子',
                    style:{
                        position:'absolute',
                        display:'block'
                    },
                    members:{
                        '平面四杆机构概念':{
                            style:{
                                top:'0px',
                                left:'50%',
                                margin:'0 0 0 -500px',
                                width:'1000px',
                            },
                            trigger:{
                                style:{
                                    position:'absolute',    
                                    top: '2%',
                                    left: '48%',
                                    width: '6%',
                                    height: '7%',
                                    borderRadius: '50%',
                                    cursor:'pointer',
                                },
                            },
                        },
                        '曲柄连杆机构组合':{
                            style:{
                                top:'-100px',
                                left:'50%',
                                margin:'0 0 0 -500px',
                                width:'1000px',
                            },
                            trigger:{
                                style:{
                                    position:'absolute',
                                    top: '22%',
                                    left: '24%',
                                    right: '61%',
                                    bottom: '57%',
                                    borderRadius: '50%',
                                    cursor:'pointer',
                                },
                            },
                        },
                        '双曲柄机构组合':{
                            style:{
                                top:'-100px',
                                left:'50%',
                                margin:'0 0 0 -500px',
                                width:'1000px',
                            },
                            trigger:{
                                style:{
                                    position:'absolute',
                                    top: '23%',
                                    left: '61.5%',
                                    right: '23.5%',
                                    bottom: '58%',
                                    borderRadius: '50%',
                                    cursor:'pointer',
                                },
                            },
                        },
                        '平行双曲柄机构组合':{
                            style:{
                                top:'-100px',
                                left:'50%',
                                margin:'0 0 0 -500px',
                                width:'1000px',
                            },
                            trigger:{
                                style:{
                                    position:'absolute',
                                    top: '59%',
                                    left: '26%',
                                    right: '64%',
                                    bottom: '20%',
                                    borderRadius: '50%',
                                    cursor:'pointer',
                                },
                            },
                        },
                        '反向双曲柄机构组合':{
                            style:{
                                top:'-100px',
                                left:'50%',
                                margin:'0 0 0 -500px',
                                width:'1000px',
                            },
                            trigger:{
                                style:{
                                    position:'absolute',
                                    top: '58%',
                                    left: '61.5%',
                                    right: '23.5%',
                                    bottom: '21%',
                                    borderRadius: '50%',
                                    cursor:'pointer',
                                },
                            },
                        },
                    },
                },
            },
            steps:[
                {
                    objects:{
                        '幻觉':{
                            style:{
                            },
                            appear:true,
                        },
                    },
                    info:{
                        timeout:100,
                        auto:true
                    }
                },
                {
                    objects:{
                        '打开各个盒子':{
                            style:{
                                top:'200px',
                                left:'50%',
                                margin:'0 0 0 -400px',
                                width:'800px',
                            },
                            appear:true,
                        },
                    },
                    info:{
                    }
                },
            ]
        },
        {
            info:{
                title:'机械组装',
                style:{
                    background:`url(${basePath}/书桌.png)`
                },
                stepcount:null,
            },
            objects:{
                '组装步骤':{
                    type:contentType.ToSpace,
                    space:{
                        pathto:`${basePath}/space`,
                        type:`手工制作`,
                        items:[
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
                    },
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