export default {
	plugins:[
		['umi-plugin-react', {
			antd: true,
      dva:true
	    }],
	],
	routes: [{
    path: '/',
    component: '../layout',
    routes: [
      {
        path: '/',
        component: './main'
      },
      { path: 'puzzlecards', component: './puzzlecards' },
      {
        path: 'main',
        component: './main'
      },
      {
        path: '/dashboard',
        routes: [
          { path: '/dashboard/analysis', component: 'Dashboard/Analysis' },
          { path: '/dashboard/monitor', component: 'Dashboard/Monitor' },
          { path: '/dashboard/workplace', component: 'Dashboard/Workplace' }
        ]
      },
    ]
  }],
};