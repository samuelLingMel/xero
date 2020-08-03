// I can't remember if there were cases with multiple different currencies to change to nzd but if there were then I would have to use objects instead of arrays


const money = function(revenue, exchangeRate) {
  
  // I made a choice to use arrays here just to see if I could
  // I could be I feel like its more effort than using an object and this would need a lot more work if I were to add the case where there were different revenues, exchange rates and currencies for each day
  
  // This is the variable that will be returned
  let finalRevenueOutput = 0;
  
  // variables to store the exchangerate data to access more easily when doing calculations
  let rateDates = [];
  let exchangeRates = [];
  
  


  if (exchangeRate) {
    rateDates = exchangeRate.map( str => str.split(',')[0] );
    exchangeRates = exchangeRate.map( str => Number(str.split(',')[1]) );
  }

  revenue.forEach( oneDay => {
    // I could use destructuring for this but the test site didn't accept it so I'm using the long hand
    // the destructuring would look like this:
    // let [date, revenue, revenueCurrency, cost, costCurrency] = oneDay.split(",");
    const day = oneDay.split(",");
    const date = day[0];
    let revenue = Number(day[1]);
    const revenueCurrency = day[2];
    let cost = Number(day[3]);
    const costCurrency = day[4];
    
    // converting to NZD
    if (revenueCurrency == "AUD") {
      revenue = revenue * exchangeRates[rateDates.indexOf(date)];
    }
    if (costCurrency == "AUD") {
      cost = cost * exchangeRates[rateDates.indexOf(date)];
    }
    
    finalRevenueOutput = finalRevenueOutput + revenue - cost;
  })

  // using toFixed(2) to format the answer to 2 decimal places
  return revenueOutput.toFixed(2);
}

module.exports = money;
