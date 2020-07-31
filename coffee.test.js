const coffee = require('./coffee.js')

test('one office 12 months', () => {
  const input = [
    'richmond, january, 11211',
    'richmond, febuary, 12541',
    'richmond, march, 13211',
    'richmond, april, 14781',
    'richmond, may, 15248',
    'richmond, june, 16923',
    'richmond, july, 17283',
    'richmond, august, 18236',
    'richmond, september, 19135',
    'richmond, october, 10123',
    'richmond, november, 13245',
    'richmond, december, 15235'
  ]
  expect(
    coffee(input)
  ).toEqual(["richmond,177172,14764"])
})

test('multiple offices 3 months', () => {
  const input = [
    'richmond, january, 11211',
    'richmond, febuary, 10857',
    'richmond, march, 14973',
    'fitzroy, january, 12495',
    'fitzroy, febuary, 13246',
    'fitzroy, march, 12437',
    'epping, january, 12495',
    'epping, febuary, 13784',
    'epping, march, 19834',
    'lalor, january, 13477',
    'lalor, febuary, 18746',
    'lalor, march, 14376'
  ]
  expect(
    coffee(input)
  ).toEqual(["richmond,37041,12347",
            "fitzroy,38178,12726", 
            "epping,46113,15371", 
            "lalor,46599,15533"])
})