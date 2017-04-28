/**
 * Created by yuehaitao on 2017/4/15.
 */
import base from '../base'
const baseURL = base.baseURL
const accountServiceBase = base.accountServiceBase

module.exports = {
    add: baseURL + accountServiceBase + '/patient/add',
    get: baseURL + accountServiceBase + '/patient/get',
    list: baseURL + accountServiceBase + '/patient/list',
};
