const fetch = require('node-fetch')

const result =
  fetch('https://vatapi.com/v1/country-code-check?code=DE', {
    headers: {
      'apikey': process.env.VAT_API_KEY
    }
  })
  .then(response => response.json())
  .then(data => data.rates.standard.value)

result