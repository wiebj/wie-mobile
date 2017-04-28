/**
 * Created by yuehaitao on 2017/4/15.
 */
import base from '../../base'
import role from './role'
import department from './department'
const baseURL = base.baseURL
const resourceServiceBase = base.resourceServiceBase

module.exports = {
    listByCode: baseURL + resourceServiceBase + '/pri-dictionary/list',
    listByClass: baseURL + resourceServiceBase + '/pri-dictionary/list',
    listTree: baseURL + resourceServiceBase + '/pri-dictionary/list-tree',
    initial: baseURL + resourceServiceBase + '/pri-dictionary/rset',
    delete: baseURL + resourceServiceBase + '/pri-dictionary/delete',
    role,
    department
};
