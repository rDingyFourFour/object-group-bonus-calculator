const employees = [
  {
    name: 'Atticus',
    employeeNumber: '2405',
    annualSalary: '47000',
    reviewRating: 3
  },
  {
    name: 'Jem',
    employeeNumber: '62347',
    annualSalary: '63500',
    reviewRating: 4
  },
  {
    name: 'Scout',
    employeeNumber: '6243',
    annualSalary: '74750',
    reviewRating: 5
  },
  {
    name: 'Robert',
    employeeNumber: '26835',
    annualSalary: '66000',
    reviewRating: 1
  },
  {
    name: 'Mayella',
    employeeNumber: '89068',
    annualSalary: '35000',
    reviewRating: 1
  }
];

// YOU SHOULD NOT NEED TO CHANGE ANYTHING ABOVE THIS POINT

// Take small steps! Don't write a for loop and two functions that do all of the calculations right away.
// This problem is massive! Break the problem down. Use the debugger.
// What is the fewest lines of code I can write and test to get just a little closer?

// This is not a race. Everyone on your team should understand what is happening.
// Ask questions when you don't.



function  employeeBonus(employee) {
  let bonusPercentage = 0;
  let totalBonus = 0;

  // Employee Rating Bonus
  if (employee.reviewRating === 3) {
    bonusPercentage += .04;
  } else if (employee.reviewRating === 4) {
    bonusPercentage += .06;
  } else if (employee.reviewRating === 5) {
    bonusPercentage += .10;
  }
  // Employee seniority bonus
  if (employee.employeeNumber.length === 4 ) {
    bonusPercentage += .05;
  }
  // Employee salary limit thingy
  if (employee.annualSalary > 65000) {
    bonusPercentage -= .01;
  }
  // Bonus limiter
  if (bonusPercentage >.13) {
    bonusPercentage = .13;
  }
  if (bonusPercentage < 0) {
    bonusPercentage = 0;
  }
  totalBonus = Math.round(employee.annualSalary * bonusPercentage);

  return {
    name: employee.name,
    bonusPercentage: bonusPercentage,
    totalCompensation: Math.round(Number(employee.annualSalary) + totalBonus),
    totalBonus: totalBonus,
  } //end return
} //end employeeBonus

for (let i=0; i<employees.length; i++) {
  console.log(employeeBonus(employees[i]));
}




console.log( employees );
