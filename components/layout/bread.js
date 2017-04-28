import React, { PropTypes } from 'react'
import { Breadcrumb, Icon } from 'antd'
import { routerRedux } from 'dva/router'


function Bread ({ menus, location, dispatch }) {
    let pathNames = []
    let pathSet = []
    const getPathSet = function (menuArray, parentPath) {
        parentPath = parentPath || '/'
        menuArray.forEach(item => {
            pathSet[(parentPath + item.key).replace(/\//g, '-').hyphenToHump()] = {
                path: parentPath + item.key,
                name: item.name,
                icon: item.icon || '',
                clickable: item.clickable === undefined || item.clickable,
            }
            if (item.child) {
                getPathSet(item.child, `${parentPath}${item.key}/`)
            }
        })
    }
    getPathSet(menus)
    let indexRouterName = menus[0].key
  location.pathname.substr(1).split('/').forEach((item, key) => {
    if (key > 0) {
      pathNames.push((`${pathNames[key - 1]}-${item}`).hyphenToHump())
    } else {
      pathNames.push((`-${item}`).hyphenToHump())
    }
  })
  const breads = pathNames.map((item, key) => {
    if (!(item in pathSet)) {
      item = (`-${indexRouterName}`).hyphenToHump()
    }
    return (
      <Breadcrumb.Item key={key} {...((pathNames.length - 1 === key) || !pathSet[item].clickable) ? '' : { href: `#${pathSet[item].path}` }}>
        <span>{pathSet[item].name}</span>
      </Breadcrumb.Item>
    )
  })
    function goHome() {
        dispatch(routerRedux.push({
            pathname: '/' + indexRouterName
        }))
    }

  return (
      <Breadcrumb style={{ margin: '12px 0' }}>
          <Breadcrumb.Item href="#"><Icon type="home" />
              <span onClick={goHome}>主页</span>
          </Breadcrumb.Item>
          {breads}
      </Breadcrumb>
  )
}

Bread.propTypes = {
  menus: PropTypes.array,
  location: PropTypes.object,
}

export default Bread
