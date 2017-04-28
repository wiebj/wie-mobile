import { request, config } from '../utils'

export async function login (params) {
  return request({
    url: config.urls.login,
    method: 'post',
    data: params,
  })
}
