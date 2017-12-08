function orderTotal(fetch, process, order) {
  if(order.country) {
    return fetch('https://vatapi.com/v1/country-code-check?code=' + order.country, {
      headers: {
        apikey: process.env.VAT_API_KEY
      }
    })
      .then(response => response.json())
      .then(data => data.rates.standard.value)
      .then(vat => order.items.reduce((prev, cur) =>
        cur.price * (cur.quantity || 1) + prev, 0) * (1+vat/100))
  }
  return Promise.resolve(order.items.reduce((prev, cur) =>
    cur.price * (cur.quantity || 1) + prev, 0))
}

module.exports = orderTotal