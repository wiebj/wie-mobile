/**
 * Created by yuehaitao on 2017/4/15.
 */
import base from '../../base'
const baseURL = base.baseURL
const resourceServiceBase = base.resourceServiceBase

module.exports = {
    listAll: baseURL + resourceServiceBase + '/pri-dictionary/getHospitalDepartments',
    add: baseURL + resourceServiceBase + '/pri-dictionary/add'
};
