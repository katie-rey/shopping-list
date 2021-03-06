import request from 'superagent'

const rootUrl = '/api/v1'

export function APIgetShoppingList() {
  return request.get(rootUrl).then((res) => {
    return res.body
  })
}

export function getItems() {
  return request.get(rootUrl).then((res) => {
    return res.body
  })
}

export function APIaddItem(item) {
  return request
    .post(rootUrl)
    .send(item)
    .then(() => {})
}

export function APIdeleteItem(item) {
  return request.delete(rootUrl).send(item)
}

// add to daily shopping list
export function APIaddToList(item) {
  return request
    .post(rootUrl + '/list')
    .send(item)
    .then(() => {})
}

export function getDailyList() {
  return request.get(rootUrl + '/list').then((res) => {
    return res.body
  })
}

export function APIdeleteDailyItem(item) {
  return request.delete(rootUrl + '/list').send(item)
}
