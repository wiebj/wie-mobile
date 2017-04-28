import React, { PropTypes } from 'react'
import { connect } from 'dva'
import { Button, Toast, SearchBar, Icon, List, NavBar, Flex, WhiteSpace } from 'antd-mobile';
import { TabBar } from 'antd-mobile';
import Header from '../components/layout/header'
import SiderMenu from '../components/layout/sider'
import { Link ,routerRedux} from 'dva/router'
import Menus from '../components/layout/menu'

const App = ({children, location, dispatch, app, loading}) => {
	const {activeTabKey} = app;
	const menusProps = {
		children,
		onPressTab(tabKey) {
			dispatch(
				{
				type: 'app/changeTabKey',
				payload: {
					activeTabKey: tabKey
				}
			});
			dispatch(
				routerRedux.push({
					pathname: '/'+tabKey
				})
			);
		},
		activeTabKey
	}
  return (
     <div>
		 <Menus {...menusProps} />
     </div>
  )
}

export default connect(({ app, loading }) => ({ app, loading: loading.models.app }))(App)
