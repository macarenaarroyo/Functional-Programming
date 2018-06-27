const companies = [
  // bunch of objects
  {
    name: 'Company One',
    category: 'Finance',
    start: 1981,
    end: 2004,
  },
  {
    name: 'Company Two',
    category: 'Retail',
    start: 1992,
    end: 2008,
  },
  {
    name: 'Company Three',
    category: 'Auto',
    start: 1999,
    end: 2007,
  },
  {
    name: 'Company Four',
    category: 'Retail',
    start: 1989,
    end: 2010,
  },
  {
    name: 'Company Five',
    category: 'Technology',
    start: 2009,
    end: 2014,
  },
  {
    name: 'Company Six',
    category: 'Finance',
    start: 1987,
    end: 2010,
  },
  {
    name: 'Company Seven',
    category: 'Auto',
    start: 1986,
    end: 1996,
  },
  {
    name: 'Company Eight',
    category: 'Technology',
    start: 2011,
    end: 2016,
  },
  {
    name: 'Company Nine',
    category: 'Retail',
    start: 1981,
    end: 1989,
  },
];

const ages = [33, 12, 20, 16, 5, 54, 21, 44, 61, 13, 15, 45, 25, 64, 32];

// for loop
for (let i = 0; i < companies.length; i += 1) {
  console.log(companies[i]);
}
// forEeach
/* this is a synchronous callback, as it is executed immediately.
callbacks can take company, index, companies(entire array)
*/

companies.forEach(company => {
  console.log(company);
});

// for loop
const canDrink = [];
for (let i = 0; i < ages.length; i += 1) {
  if (ages[i] >= 21) {
    canDrink.push(ages[i]);
  }
}

console.log(canDrink);

// filter: filter things out from the array.
/* -from the ages array, get all the ages that are 21 and over */
const canDrink = ages.filter(function(age) {
  if (age >= 21) {
    return true;
  }
});
console.log(canDrink);

//put it on ES6 format
const canDrink = ages.filter(age => age >= 21);
console.log(canDrink);

/* filter retail companies*/
const retailCompanies = companies.filter(function(company) {
  if (company.category === 'Retail') {
    return true;
  }
});
console.log(retailCompanies);

//put it on ES6 format
const retailCompanies = companies.filter(company => company.category === 'Retail');
console.log(retailCompanies);

/* Get 80s companies*/
const eightiesCompanies = companies.filter(function(company) {
  if (company.start >= 1980 && company.start < 1990) {
    return true;
  }
});
console.log(eightiesCompanies);

//put it on ES6 format
const eightiesCompanies = companies.filter(
  company => company.start >= 1980 && company.start < 1990,
);
console.log(eightiesCompanies);

/* Get companies that lasted at least 10 years*/
const lastedTenYears = companies.filter(company => company.end - company.start >= 10);

console.log(lastedTenYears);

// map: Instead of filtering things out, we can create new arrays from a current array.
/*Create array of company names*/
const companyNames = companies.map(function(company) {
  return company.name;
});

const testingMap = companies.map(function(company) {
  return `${company.name} [${company.start} - ${company.end}]`;
});
console.log(testingMap);
// ES6 format
const testMap = companies.map(company => `${company.name} [${company.start} - ${company.end}]`);
console.log(testingMap);

/* Doing square root of objects */

const agesSquare = ages.map(function(age) {
  return Math.sqrt(age);
});

console.log(agesSquare);

const agesTimesTwo = ages.map(function(age) {
  return age * 2;
});
console.log(agesTimesTwo);

//ES6 format
const agesSquare = ages.map(age => Math.sqrt(age));
console.log(agesSquare);

const agesTimesTwo = ages.map(age => age * 2);
console.log(agesTimesTwo);

//combaning both agesSquare & agesTimesTwo
const agesMap = ages.map(age => Math.sqrt(age)).map(age => age * 2);

console.log(agesMap);

// sort

// reduce
