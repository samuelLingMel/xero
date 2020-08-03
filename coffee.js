
const coffee = function(input) {
  let offices = {};
  

  input.forEach( ele => {
    const nameMonthAmount = ele.split(',');
    const officeName = nameMonthAmount[0];
    const cupsOfCoffee = Number(nameMonthAmount[2]);

    // if the office already exists
    if (offices[`${officeName}`]) {
      offices[`${officeName}`].cupsOfCoffee += cupsOfCoffee;  
      offices[`${officeName}`].months += 1;  

    // other wise set up the office
    } else {
      offices[`${officeName}`] = {};  
      offices[`${officeName}`].name = officeName;  
      offices[`${officeName}`].cupsOfCoffee = cupsOfCoffee;  
      offices[`${officeName}`].months = 1;  
    }
  })

  // in order to change the information in an object to the desired format of a string
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



