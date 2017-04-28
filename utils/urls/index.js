/**
 * Created by yuehaitao on 2017/4/15.
 */
import login from './login'
import base from './base'
import adminAccountHospitalUrl from './admin/account/hospital'
import adminAccountDoctorUrl from './admin/account/doctor'
import resourcePrivateUrl from './resource/private'
import accountService from './account_service'
import outPatientService from './outpatient_service'
const baseURL = base.baseURL
const resourceServiceBase = base.resourceServiceBase
const accountServiceBase = base.accountServiceBase
const testURL = 'http://106.14.238.89:8081'

module.exports = {
    base,
    login: login.url,
    admin: {
        dictionary: {
            pub: {
                listByPid: baseURL + resourceServiceBase + '/pub-dictionary/list',
                add: baseURL + resourceServiceBase + '/pub-dictionary/add',
                delete: baseURL + resourceServiceBase + '/pub-dictionary/delete',
            }
        },
        account: {
            hospital: adminAccountHospitalUrl,
            doctor: adminAccountDoctorUrl,
            user: {
                create: baseURL + accountServiceBase + '/account/newAccount',
                list: baseURL + accountServiceBase + '/account/getAccountList',
                delete: baseURL + accountServiceBase + '/account/deleteAccount'
            },
            check: baseURL + accountServiceBase + '/account/isAccount'
        },
        module: {
            system: {
                list: baseURL + resourceServiceBase + '/publicModule/getModuleAll',
                delete: baseURL + resourceServiceBase + '/publicModule/deleteModule',
                query: baseURL + resourceServiceBase + '/publicModule/getModuleById',
                edit: baseURL + resourceServiceBase + '/publicModule/editModule',
                add: baseURL + resourceServiceBase + '/publicModule/addModule'
            },
            hospital: {
                listAll: baseURL + resourceServiceBase + '/publicModule/getModuleAllByHid',
                saveAllModule: baseURL + resourceServiceBase + '/hospitalAccess/addModuleAccessList'
            },
            role: {
                listAll: baseURL + resourceServiceBase + '/roleAccess/getModuleAllByRoleId',
                saveAllModule: baseURL + resourceServiceBase + '/roleAccess/addModuleAccessList'
            }
        }
    },
    resource: {
        public: {
            list: baseURL + resourceServiceBase + '/pub-dictionary/list',
            province: {
                list: baseURL + resourceServiceBase + '/pub-dictionary/list'
            }
        },
        private: resourcePrivateUrl
    },
    hospital: {
        department: {
            list: testURL + '/department'
        },
        staff: {
            list: baseURL + accountServiceBase + '/doctor/getDoctorByHospital',
            addDoctor: baseURL + accountServiceBase + '/doctor/newHostDoctor',
            addRoleToDoctor: baseURL + accountServiceBase + '/doctorHospital/addDoctorHospital',
            deleteDoctor: baseURL + accountServiceBase + '/doctor/deleteDoctor'
        }
    },
    accountService,
    outPatientService
}
