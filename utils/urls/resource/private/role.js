/**
 * Created by yuehaitao on 2017/4/15.
 */
import base from '../../base'
const baseURL = base.baseURL
const resourceServiceBase = base.resourceServiceBase

module.exports = {
    list: baseURL + resourceServiceBase + '/pri-dictionary/getHospitalRoles',
    add: baseURL + resourceServiceBase + '/pri-dictionary/add'
};
