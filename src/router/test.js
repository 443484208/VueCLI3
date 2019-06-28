
export default  
     [
      {
        path: '/about',
        name: 'about',
        component: () => import( /* webpackChunkName: "about" */ './../views/About.vue')
      },
			{
			  path: '/demo/template',
			  name: 'template',
			  component: () => import( /* webpackChunkName: "about" */ './../demo/template.vue')
			},
			{
			  path: '/demo/father',
			  name: 'father',
			  component: () => import( /* webpackChunkName: "about" */ './../demo/father.vue')
			},
			{
			  path: '/demo/Vuex',
			  name: 'Vuex',
			  component: () => import( /* webpackChunkName: "about" */ './../demo/Vuex.vue')
			}
    ]
 