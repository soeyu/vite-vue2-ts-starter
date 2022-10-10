import axios from 'axios'
import axiosRetry from 'axios-retry'
import qs from 'qs'

const instance = axios.create({ maxRedirects: 0, timeout: 5000 })

axiosRetry(instance)

export function httpGet(url: string, params = {}) {
  return new Promise((resolve, reject) => {
    instance
      .get(url, { params })
      .then((res) => {
        resolve(res)
      })
      .catch((err) => {
        reject(err)
      })
  })
}

export function httpPost(url: string, data = {}, config = {}) {
  return new Promise((resolve, reject) => {
    instance
      .post(url, data, config)
      .then((res) => {
        resolve(res)
      })
      .catch((err) => {
        reject(err)
      })
  })
}
export function httpForm(url: string, data = {}) {
  return new Promise((resolve, reject) => {
    instance
      .post(url, qs.stringify(data), {
        headers: { 'content-type': 'application/x-www-form-urlencoded' },
      })
      .then((res) => {
        resolve(res)
      })
      .catch((err) => {
        reject(err)
      })
  })
}
