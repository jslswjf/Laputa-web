export default {
    plugins: [
        ['umi-plugin-react', {
          dva: true,
        }],
      ],
    routes: [{
      path: '/',
      component: './scene/alita',
    },{
      path: '/course',
      component: './course',
    },{
      path: '/found',
      component: './found',
    },{
      path: '/school',
      component: './found',
    },{
      path: '/grade',
      component: './found',
    },{
      path: '/team',
      component: './found',
    },{
      path: '/create',
      component: './create',
    },{
      path: '/',
      component: './index',
    },],
  };