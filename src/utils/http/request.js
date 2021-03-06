import axios from 'axios'
import qs from 'qs'
import Cookies from 'js-cookie'

const axiosPost = axios.create({
  transformRequest: [
    function(data, headers) {
      data = qs.stringify(data)
      return data
    }
  ]
})
axios.interceptors.request.use(res => {
  let token = Cookies.get('X-Token')
  if (token) {
    token = token.startsWith('Bearer') ? token : 'Bearer ' + token
    res.headers['Authorization'] = Cookies.get('X-Token')
  }
  return res
})
//axiosPost.defaults.withCredentials = true;

/*axiosPost.defaults.withCredentials = true;

axiosPost.interceptors.response.use(function (response) {

	return response;
}, function (err) {

    if (err && err.response) {
        switch (err.response.status) {
        	case 302: 
        		     alert(11111);
        		     break;
            case 400: err.message = '请求错误(400)' ; break;
            case 401: err.message = '未授权，请重新登录(401)'; break;
            case 403: err.message = '拒绝访问(403)'; break;
            case 404: err.message = '请求出错(404)'; break;
            case 408: err.message = '请求超时(408)'; break;
            case 500: err.message = '服务器错误(500)'; break;
            case 501: err.message = '服务未实现(501)'; break;
            case 502: err.message = '网络错误(502)'; break;
            case 503: err.message = '服务不可用(503)'; break;
            case 504: err.message = '网络超时(504)'; break;
            case 505: err.message = 'HTTP版本不受支持(505)'; break;
            default: err.message = `连接出错(${err.response.status})!`;
        }
    }else{
        err.message = '连接服务器失败!'
    }
    message.error(err.message);
    return Promise.reject(err);
});*/

let sourceCollection = []

const req = {
  get(url) {
    const CancelToken = axios.CancelToken
    const source = CancelToken.source()
    sourceCollection.push(source)
    return axios.get(url, { cancelToken: source.token })
  },

  post(url, params, isJson) {
    const CancelToken = axios.CancelToken
    const source = CancelToken.source()
    sourceCollection.push(source)
    if (isJson) {
      return axios.post(url, params, { cancelToken: source.token })
    } else {
      return axiosPost.post(url, params, { cancelToken: source.token })
    }
  },

  abort() {
    for (let i = 0, l = sourceCollection.length; i < l; i++) {
      sourceCollection[i].cancel('shit')
    }
    sourceCollection = []
  }
}

export default req
