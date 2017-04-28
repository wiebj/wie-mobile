/**
 * Created by yuehaitao on 2017/4/16.
 */
import base from '../base'
const baseURL = base.baseURL
const outPatientServiceBase = base.outPatientServiceBase

module.exports = {
    list: baseURL + outPatientServiceBase + '/registration/list',
    add: baseURL + outPatientServiceBase + '/registration/add'
};
