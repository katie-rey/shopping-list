import request from 'superagent'

const rootUrl = '/api/v1'

export function APIgetShoppingList() {
  return request.get(rootUrl).then((res) => {
    return res.body
  })
}

export function getItems() {
  return request.get(rootUrl).then((res) => {
    console.log(res.body + 'api')
    return res.body
  })
}

export function APIaddItem(item) {
  console.log(item)
  return request
    .post(rootUrl)
    .send(item)
    .then(() => {})
}
