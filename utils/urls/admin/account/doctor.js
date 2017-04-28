/**
 * Created by yuehaitao on 2017/4/15.
 */
import base from '../../base'
const baseURL = base.baseURL
const accountServiceBase = base.accountServiceBase

module.exports = {
    list: baseURL + accountServiceBase + '/doctor/getDoctorList',
    create: baseURL + accountServiceBase + '/doctor/newDoctor',
    edit: baseURL + accountServiceBase + '/doctor/editDoctor',
    free: baseURL + accountServiceBase + '/doctor/freezeDoctor',
    active: baseURL + accountServiceBase + '/doctor/activationDoctor',
    delete: baseURL + accountServiceBase + '/doctor/deleteDoctor'
};
