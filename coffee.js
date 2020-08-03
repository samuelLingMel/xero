
const coffee = function(input) {
  let offices = {};
  
  input.forEach( ele => {
    const nameMonthAmount = ele.split(',');
    const officeName = nameMonthAmount[0]
    const cupsOfCoffee = Number(nameMonthAmount[2]);
    if (offices[`${officeName}`]) {
      offices[`${officeName}`].cupsOfCoffee += cupsOfCoffee;  
      offices[`${officeName}`].months += 1;  
    } else {
      offices[`${officeName}`] = {};  
      offices[`${officeName}`].name = officeName;  
      offices[`${officeName}`].cupsOfCoffee = cupsOfCoffee;  
      offices[`${officeName}`].months = 1;  
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



