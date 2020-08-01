
const coffee = function(input) {
  let offices = {};
  
  input.forEach( ele => {
    const nameMonthAmount = ele.split(',');
    if (offices[`${nameMonthAmount[0]}`]) {
      offices[`${nameMonthAmount[0]}`].cupsOfCoffee += Number(nameMonthAmount[2]);  
      offices[`${nameMonthAmount[0]}`].months += 1;  
    } else {
      offices[`${nameMonthAmount[0]}`] = {};  
      offices[`${nameMonthAmount[0]}`].name = nameMonthAmount[0];  
      offices[`${nameMonthAmount[0]}`].cupsOfCoffee = Number(nameMonthAmount[2]);  
      offices[`${nameMonthAmount[0]}`].months = 1;  
    }
  })


  const formatResponse = function(listOfObjects) {
    const formattedOffices = [];

    Object.keys(listOfObjects).forEach( officeListName => {
        formattedOffices.push(
        `${listOfObjects[officeListName].name},${listOfObjects[officeListName].cupsOfCoffee},${Math.floor((listOfObjects[officeListName].cupsOfCoffee) / listOfObjects[officeListName].months)}`);
    })
    
    return formattedOffices;
  }
  return formatResponse(offices);
}

module.exports = coffee;



