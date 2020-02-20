import request from '../api'

/**
 * get案例
 * @param {school} params
 */
export const getDemo = params => {
  return request.get('/xxx/xxx', { params })
}

/**
 * post案例
 * @param {school} params
 */
export const postDemo = params => {
  return request.post('/xxx/xxx', params)
}


