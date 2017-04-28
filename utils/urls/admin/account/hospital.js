/**
 * Created by yuehaitao on 2017/4/15.
 */
import base from '../../base'
const baseURL = base.baseURL
const accountServiceBase = base.accountServiceBase

module.exports = {
    list: baseURL + accountServiceBase + '/hospital/getHospitalList',
    free: baseURL + accountServiceBase + '/hospital/freezeHospital',
    create: baseURL + accountServiceBase + '/hospital/addHospital',
    edit: baseURL + accountServiceBase + '/hospital/editHospital',
    active: baseURL + accountServiceBase + '/hospital/activationHospital',
    delete: baseURL + accountServiceBase + '/hospital/deleteHospital',
    filter: baseURL + accountServiceBase + '/hospital/getHospitalByParam'
};