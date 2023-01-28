// 1.1

function sum(numberOne , numberTwo) {
    if(numberOne > numberTwo){
        return numberOne
    } else {
        return numberTwo
    }
  }


// 1.2

const avengers = ['Hulk', 'Thor', 'IronMan', 'Captain A.', 'Spiderman', 'Captain M.']
let lengthAvengers = "";

function findLongestWord(param) {
let lengthAvengers = "";
  for (const avenger of avengers) {
    if (avenger.length > lengthAvengers.length) {
        lengthAvengers = avenger;  
    }
  }
  console.log(lengthAvengers);
}
findLongestWord(avengers);

// 1.3

const numbers = [1, 2, 3, 5, 45, 37, 58];

function sumAll(param) {
    let totalSum = 0;
  for (const number of numbers) {
   totalSum += number;
  }
  return totalSum;
}
console.log(sumAll(numbers));

// 1.4

const numbers1 = [12, 21, 38, 5, 45, 37, 6];
function average(param) {
  let totalSum1 = 0;
  for (const number of numbers1) {
    totalSum1 += number;
  }
  return (totalSum1 / numbers1.length)
}
console.log(average(numbers1));

// 1.5

const mixedElements = [6, 1, 'Rayo', 1, 'vallecano', '10', 'upgrade', 8, 'hub'];

function averageWord(param) {
    
    let sumaTotalNum = 0;
    let sumaTotalString = 0;
    for (const element of mixedElements) {
        if (element / 1 === element) {
            sumaTotalNum += element;
        } else {
            sumaTotalString += element.length;
        }
    }
    return sumaTotalNum + sumaTotalString
}
console.log(averageWord(mixedElements));

// 1.6

const duplicates = [
    'sushi',
    'pizza',
    'burger',
    'potatoe',
    'pasta',
    'ice-cream',
    'pizza',
    'chicken',
    'onion rings',
    'pasta',
    'soda'
  ];

  function removeDuplicates(param) {
   let newArray = [];
   for (const item of duplicates) {
        if (newArray.includes(item)) {
            
        } else {
            newArray.push(item);
        }
   }
   return newArray;
  }
  console.log(removeDuplicates(duplicates));

  // 1.7

  const nameFinder = [
    'Peter',
    'Steve',
    'Tony',
    'Natasha',
    'Clint',
    'Logan',
    'Xabier',
    'Bruce',
    'Peggy',
    'Jessica',
    'Marc'
  ];

  function finderName(param) {
    
    for (let i = 0; i < nameFinder.length; i++) {
        if (nameFinder[i].toLowerCase() === param.toLowerCase()) {
            return `${true}, ${i}`;
        } 
    }
    return false;
  }
console.log(finderName("BrUcE"));

// 1.8

const counterWords = [
    'code',
    'repeat',
    'eat',
    'sleep',
    'code',
    'enjoy',
    'sleep',
    'code',
    'enjoy',
    'upgrade',
    'code'
  ];

  function repeatCounter(param) {
    let newArray1 = [];
    
    for (const word of counterWords) {
        if (newArray1[word]) {
            newArray1[word]++;
        } else {
            newArray1[word] = 1;
        }
    }
    return newArray1 
}
console.log(repeatCounter(counterWords));

  
