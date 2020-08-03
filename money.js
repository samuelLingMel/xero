// I can't remember if there were cases with multiple different currencies to change to nzd but if there were then I would have to use objects instead of arrays


const money = function(revenue, exchangeRate) {
  let rateDates = [];
  let exchangeRates = [];
  let revenueOutput = 0;

  if (exchangeRate) {
    rateDates = exchangeRate.map( str => str.split(',')[0] )
    exchangeRates = exchangeRate.map( str => Number(str.split(',')[1]) )
  }

  revenue.forEach( oneDay => {
    const date = oneDay.split(",")[0];
    let revenue = Number(oneDay.split(",")[1]);
    const revenueCurrency = oneDay.split(",")[2];
    let cost = Number(oneDay.split(",")[3]);
    const costCurrency = oneDay.split(",")[4];
    if (revenueCurrency == "AUD") {
      revenue = revenue * exchangeRates[rateDates.indexOf(date)]
    }
    if (costCurrency == "AUD") {
      cost = cost * exchangeRates[rateDates.indexOf(date)]
    }
    revenueOutput = revenueOutput + revenue - cost
  })

  return revenueOutput.toFixed(2)
}

module.exports = money;
