import { parse } from 'qs'
const Cookies = require('js-cookie')
import { routerRedux } from 'dva/router'

const menus = [
    {
	key: 'upload',
	name: '上传'
    }
]

export default {
  namespace: 'app',
  state: {
    open: false,
    login: false,
    user: {
      name: 'admin',
      accountId: '',
      role: 'admin'
    },
    msg: '',
    activeTabKey: 'map',
    menus: menus,
    loginButtonLoading: false,
    darkTheme: localStorage.getItem('antdAdminDarkTheme') !== 'false'
  },
  subscriptions: {
    setup ({ dispatch }) {
        // console.log(localStorage.getItem('login'))
        // const login = localStorage.getItem('login')
        // if (!login) {
        //     localStorage.setItem('login', 'false')
        // }
    },
  },
  effects: {
	*openChange({payload}, {call, put}) {
	    yield put({type: 'changeOpen'})
	}
  },
  reducers: {
    changeTabKey(state, action) {
      return {...state, ...action.payload}
    }
  }
}
