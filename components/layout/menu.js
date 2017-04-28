import React, { PropTypes } from 'react'
import { Link } from 'dva/router'
import { TabBar, Icon } from 'antd-mobile';
import {menu} from '../../utils'



function Menus ({ location, children, activeTabKey, onPressTab }) {
  const tabMenus = menu.map(item => (
      <TabBar.Item
          title={item.name}
          key={item.key}
          icon={item.icon}
          selected={activeTabKey === item.key}
          onPress={() => {onPressTab(item.key)}}
          selectedIcon={item.selectedIcon}>
        {children}
      </TabBar.Item>
  ))

  return (
      <TabBar unselectedTintColor="#949494"
              tintColor="#33A3F4"
              hidden={false}
              barTintColor="white">
        {tabMenus}
      </TabBar>
  )
}

export default Menus
