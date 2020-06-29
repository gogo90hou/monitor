export default [
  // 获得用户信息
  {
    url: '/user',
    type: 'get',
    response: config => {
      // 因为后端暂时未提供登陆接口，暂时返回模式数据
      return {
        'statusText': '通讯成功',
        'statusCode': 0,
        'data': {
          roles: ['admin'],
          introduction: 'I am a super administrator',
          avatar: 'https://wpimg.wallstcn.com/f778738c-e4f8-4870-b634-56703b4acafe.gif',
          name: '超级管理员',
          menus: [
            {
              path: '/nested',
              component: 'Layout',
              redirect: '/nested/menu1',
              name: 'Nested',
              meta: {
                title: 'nested',
                icon: 'nested'
              },
              children: [
                {
                  path: 'menu1',
                  component: 'nested/menu1/index', // Parent router-view
                  name: 'Menu1',
                  meta: { title: 'menu1' },
                  children: [
                    {
                      path: 'menu1-1',
                      component: 'nested/menu1/menu1-1/index',
                      name: 'Menu1-1',
                      meta: { title: 'menu1-1' }
                    },
                    {
                      path: 'menu1-2',
                      component: 'nested/menu1/menu1-2/index',
                      name: 'Menu1-2',
                      meta: { title: 'menu1-2' },
                      children: [
                        {
                          path: 'menu1-2-1',
                          component: 'nested/menu1/menu1-2/menu1-2-1/index',
                          name: 'Menu1-2-1',
                          meta: { title: 'menu1-2-1' }
                        },
                        {
                          path: 'menu1-2-2',
                          component: 'nested/menu1/menu1-2/menu1-2-2/index',
                          name: 'Menu1-2-2',
                          meta: { title: 'menu1-2-2' }
                        }
                      ]
                    },
                    {
                      path: 'menu1-3',
                      component: 'nested/menu1/menu1-3/index',
                      name: 'Menu1-3',
                      meta: { title: 'menu1-3' }
                    }
                  ]
                },
                {
                  path: 'menu2',
                  component: 'nested/menu2/index',
                  meta: { title: 'menu2' }
                }
              ]
            }
          ]
        }
      }
    }
  }
]
