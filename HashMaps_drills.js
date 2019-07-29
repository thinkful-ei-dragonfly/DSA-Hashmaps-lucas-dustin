const HashMap = require('./hashmap.js');
function main() {
  const newHashMap = new HashMap();

  newHashMap.MAX_LOAD_RATIO = 0.5;
  newHashMap.SIZE_RATIO = 3;

  newHashMap.set('Hobbit', 'Bilbo');
  newHashMap.set('Hobbit', 'Frodo');
  newHashMap.set('Wizard', 'Gandalf');
  newHashMap.set('Human', 'Aragon');
  newHashMap.set('Elf', 'Legolas');
  newHashMap.set('Maiar', 'The Necromancer');
  newHashMap.set('Maiar', 'Sauron');
  newHashMap.set('RingBearer', 'Gollum');
  newHashMap.set('LadyOfLight', 'Galadriel');
  newHashMap.set('HalfElven', 'Arwen');
  newHashMap.set('Ent', 'Treebeard');

  console.log(newHashMap._hashTable);

  // Exercise 1

  // The set() function is looking for the key.
  // Because both Bilbo and Frodo have the same key,
  // as well as Necromancer and Sauron,
  // the values are being overwritten

  // It's checking if the key is in the box, not the value

  // Exercise 2
  const WhatDoesThisDo = function() {
    let str1 = 'Hello World.';
    let str2 = 'Hello World.';
    let map1 = new HashMap();
    map1.set(str1, 10);
    map1.set(str2, 20);
    // map1 might just have one key but with the value of 20
    // since it was overwritten
    let map2 = new HashMap();
    let str3 = str1;
    let str4 = str2;
    map2.set(str3, 20);
    map2.set(str4, 10);
    // This will also just have one key, and the value would be 10
    // since it was also overwritten

    console.log(map1.get(str1));
    // This returns "20"
    console.log(map2.get(str3));
    // This returns "10"

    // Exercise 3
    // 1: [22, 88, undefined, undefined, 4, 15, 28, 17, 59, 31, 10]
    // 2: [undefined, 28 -> 19 -> 10, 20, 12, undefined, 5, 15 -> 33, undefined, 17]
  };

  function removeDuplicates(string) {
    let hashMap = new Map();
    let result ='';

    for(let i =0; i < string.length; i++) {
      const char = string[i];
      if(!hashMap.has(char)){
        result += char;
        hashMap.set(char, '');
      }
    }
    return result;
  }

  function palindrome(string){
    let numOdd = 0;
    let hashMap = new Map();
    for(let i =0; i < string.length; i++){
      const char = string[i];
      if(!hashMap.has(char)) {
        hashMap.set(char, 1);
        numOdd++;
      } else {
        let number = hashMap.get(char);
        const newNum = number + 1;
        hashMap.set(char, newNum);
        if(newNum % 2 === 0) {
          numOdd--;
        }
        else if(newNum % 2 !== 0){
          numOdd++;
        }
      }
    }
    if (numOdd > 1) return false;
    else return true;
  }

  function anagramGroup(array) {
    let resultArray = []
    let testArray = ["ah", "ha", "hello"]

    testArray.forEach(word => {
      word = new Map()
    })

    for (var i = 0; i < testArray.length; i++) {
      let wordGroup = []
      testArray[i] // east
      testArray[i + 1] // cars
      for (var j = 0; j < testArray[i].length; j++) {
        let match = null
        if (testArray[i + 1].has(testArray[i][j])) {
          
        }//each letter
      }
    }
    // for (let word = 0; word < array.length; word++) {
    //   // iterate over each word in the array
    //   let hashWord = new Map()
    //   let wordGroup = []
    //
    //   for (var i = 0; i < array[word].length; i++) {
    //     if (array[word + 1].has(array[word][i])) {
    //
    //     }
    //   }
    //
    //   wordGroup.push(array[word])
    //
    //   if (something) {
    //     resultsArray.push(wordGroup)
    //   }
    //
    // }
  }
}

main();
