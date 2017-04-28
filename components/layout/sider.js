import React, { PropTypes } from 'react'
import { config } from '../../utils'
import { Link } from 'dva/router'
import {Drawer} from 'antd-mobile'
import './sider.less'

function siderMenu ({ sidebar, open, onOpenChange}) {
  const drawerProps = {
      open: open,
      position: 'left',
      onOpenChange: onOpenChange,
    };
  return (
	<Drawer
        className="my-drawer"
        style={{ minHeight: document.documentElement.clientHeight - 200 }}
        dragHandleStyle={{ display: 'none' }}
        contentStyle={{ color: '#A6A6A6', textAlign: 'center', paddingTop: 42 }}
        sidebar={sidebar}
        {...drawerProps}
      >
      </Drawer>
  )
}

siderMenu.propTypes = {
    menus: PropTypes.array
}

export default siderMenu
