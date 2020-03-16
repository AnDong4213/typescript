import { AxiosRequestConfig, AxiosPromise, AxiosResponse } from '../types'
import { parseHeaders } from '../helpers/headers'
import { createError } from '../helpers/error'
import { isURLSameOrigin } from '../helpers/url'
import { isFormDate } from '../helpers/util'
import cookie from '../helpers/cookie'

export default function xhr(config: AxiosRequestConfig): AxiosPromise {
  return new Promise((resolve, reject) => {
    const { data = null, method, url, headers, responseType, timeout, cancelToken, withCredentials, xsrfCookieName, xsrfHeaderName, onDownloadProgress, onUploadProgress, auth } = config
    const request = new XMLHttpRequest()

    if (responseType) {
      request.responseType = responseType
    }
    if (timeout) {
      request.timeout = timeout
    }
    if (withCredentials) {
      request.withCredentials = withCredentials
    }
    request.open(method!.toUpperCase(), url!, true)

    request.onreadystatechange = function () {
      if (request.readyState !== 4) {
        return
      }
      if (request.status === 0) {
        return
      }

      const responseHeaders = parseHeaders(request.getAllResponseHeaders())
      const responseData = responseType && responseType !== 'text' ? request.response : request.responseText
      const response: AxiosResponse = {
        data: responseData,
        status: request.status,
        statusText: request.statusText,
        headers: responseHeaders,
        config,
        request
      }
      handleResponse(response, resolve, reject, config, request)
    }
    request.onerror = function () {
      reject(createError('Network Error', config, null, request))
    }
    request.ontimeout = function () {
      reject(createError(`Timeout of ${timeout} ms exceeded`, config, 'ECONNABORTED', request))
    }

    if (onDownloadProgress) {
      request.onprogress = onDownloadProgress
    }

    if (onUploadProgress) {
      request.upload.onprogress = onUploadProgress
    }

    if (isFormDate(data)) {
      delete headers['Content-Type']
    }

    if ((withCredentials || isURLSameOrigin(url!)) && xsrfCookieName) {
      const xsrfValue = cookie.read(xsrfCookieName)
      if (xsrfValue && xsrfHeaderName) {
        headers[xsrfHeaderName] = xsrfValue
      }
    }

    // console.log(btoa)  // ƒ btoa() { [native code] }  // btoa编码  atob解码
    if (auth) {
      headers['Authorization'] = 'Basic ' + btoa(auth.username + ':' + auth.password)
    }

    Object.keys(headers).forEach(name => {
      if (data === null && name.toLowerCase() === 'content-type') {
        delete headers[name]
      } else {
        request.setRequestHeader(name, headers[name])
      }
    })

    // console.log(cancelToken.hahaNum)
    if (cancelToken) {
      cancelToken.promise.then(reason => {
        request.abort()
        reject(reason)
        // console.log(reason)
      })
    }
    request.send(data)
  })

}

function handleResponse(response: AxiosResponse, resolve: any, reject: any, config: any, request: any): void {
  const { validateStatus } = config
  if (!validateStatus || validateStatus(response.status)) {
    resolve(response)
  } else {
    reject(createError(`Request failed with status code ${response.status}`, config, null, request, response))
  }
}
