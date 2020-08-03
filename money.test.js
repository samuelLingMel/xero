
const money = require('./money.js');

test('first test revenues no exchange rates', () => {
  const dateRevenueCost = [
    '20-06-2019,10020,NZD,7923,NZD',
    '21-06-2019,12720,NZD,8503,NZD',
    '22-06-2019,11473,NZD,8372,NZD',
  ]
  const exchangeRate = [];
  expect(
    money(dateRevenueCost, exchangeRate)
  ).toEqual("9415.00");
})


test('one day revenue and exchange rate', () => {
  const dateRevenueCost = [
    '20-06-2019,10201,AUD,7521,AUD'
  ]
  const exchangeRate = [
    '20-06-2019,1.05,AUD'
  ]
  expect(
    money(dateRevenueCost, exchangeRate)
  ).toEqual("2814.00");
})
  

test('multiple days revenue and exchange rates', () => {
  const dateRevenueCost = [
    '20-06-2019,10239,NZD,7812,NZD',
    '21-06-2019,11049,AUD,7510,AUD',
    '22-06-2019,10920,NZD,7603,NZD',
    '23-06-2019,10154,AUD,7258,NZD'
  ]
  const exchangeRate = [
    '20-06-2019,1.08,AUD',
    '23-06-2019,1.10,AUD',
    '21-06-2019,1.05,AUD',
    '22-06-2019,1.11,AUD'
  ]
  expect(
    money(dateRevenueCost, exchangeRate)
  ).toEqual("13371.35");
})
