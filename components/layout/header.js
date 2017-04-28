import React, { PropTypes } from 'react'
import { Toast, NavBar, Icon, TabBar } from 'antd-mobile';

class Header extends React.Component {
   constructor(props) {
       super(props);
       this.state = {
           selectedTab: 'redTab',
           hidden: false,
       };
   }
   onOpenChange = (...args) => {
	const {onOpenChange} = this.props
	onOpenChange()
   }
   render() {
	return (
	    //<NavBar iconName="ellipsis" onLeftClick={this.onOpenChange}>Basic</NavBar>
        <TabBar
            unselectedTintColor="#949494"
            tintColor="#33A3F4"
            barTintColor="white"
            hidden={this.state.hidden}
            >
            <TabBar.Item
                title="地图"
                key="地图"
                icon={<div style={{
                    width: '0.44rem',
                    height: '0.44rem',
                    background: 'url(https://zos.alipayobjects.com/rmsportal/sifuoDUQdAFKAVcFGROC.svg) center center /  0.42rem 0.42rem no-repeat' }}
                  />
                 }
                selectedIcon={<div style={{
                    width: '0.44rem',
                    height: '0.44rem',
                    background: 'url(https://zos.alipayobjects.com/rmsportal/iSrlOTqrKddqbOmlvUfq.svg) center center /  0.42rem 0.42rem no-repeat' }}
                  />
                 }
                selected={this.state.selectedTab === 'blueTab'}
                onPress={() => {
                        this.setState({
                          selectedTab: 'blueTab'
                        });
                  }}
                data-seed="logId"
            >

            </TabBar.Item>
            <TabBar.Item
                icon={<Icon type="koubei-o" size="md" />}
                selectedIcon={<Icon type="koubei" size="md" />}
                title="上传"
                key="上传"
                selected={this.state.selectedTab === 'redTab'}
                onPress={() => {
                    this.setState({
                      selectedTab: 'redTab'
                    });
              }}
                data-seed="logId1"
            >
            </TabBar.Item>
            <TabBar.Item
                icon={
                    <div style={{
                      width: '0.44rem',
                      height: '0.44rem',
                      background: 'url(https://zos.alipayobjects.com/rmsportal/psUFoAMjkCcjqtUCNPxB.svg) center center /  0.42rem 0.42rem no-repeat' }}
                    />
                }
                selectedIcon={
                    <div style={{
                      width: '0.44rem',
                      height: '0.44rem',
                      background: 'url(https://zos.alipayobjects.com/rmsportal/IIRLrXXrFAhXVdhMWgUI.svg) center center /  0.42rem 0.42rem no-repeat' }}
                    />
                  }
                title="图表"
                key="图表"
                selected={this.state.selectedTab === 'greenTab'}
                onPress={() => {
                    this.setState({
                      selectedTab: 'greenTab'
                    });
                  }}
            >
            </TabBar.Item>
        </TabBar>
	)
   }
}

Header.propTypes = {
  user: PropTypes.object,
  logout: PropTypes.func,
  location: PropTypes.object,
  menus: PropTypes.object,
}

export default Header
