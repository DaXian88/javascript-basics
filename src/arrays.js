const getNthElement = (index, array) => {
       if(index >= array.length) {
      index = index - array.length;
        return array[index] 
    }

    else {
        return array[index]
	}
};

const arrayToCSVString = array => {
  	return array.toString()
};

const csvStringToArray = string => {
  	return string.split(",")
};

const addToArray = (element, array) => {
  array.push(element)
};

const addToArray2 = (element, array) => {
  newArray = array.concat(element)
 return newArray
};

const removeNthElement = (index, array) => {
  array.splice(index, 1)
};

const numbersToStrings = numbers => {
  return numbers.map(String)
};

const uppercaseWordsInArray = strings => {
  return strings.map(string => string.toUpperCase());
};

const reverseWordsInArray = strings => {
 // this one had me stumped! I tried many different ways but couldn't figure it out, please help! From what I can see, I believe it is some combination of Split(), reverse() and then join(), maybe it needs to iterate over each?
};

const onlyEven = numbers => {
  return numbers.filter( x => x % 2 === 0);
};

const removeNthElement2 = (index, array) => {
 remArray = array.slice(0, index).concat(array.slice((index + 1)));
  return remArray 

//this one almost drove me mad :). I didn't think to slice it either side of the index then combine for so long. It seemed counterintuitive for there not to be a way for slice to start after the index and then loop round to before the index!
};

const elementsStartingWithAVowel = strings => {
    const words = strings.filter(string => string.toLowerCase().startsWith("a") || string.toLowerCase().startsWith("e") || string.toLowerCase().startsWith("i") || string.toLowerCase().startsWith("o") || string.toLowerCase().startsWith("u"));
	return words
};

const removeSpaces = string => {
  return string.split(" ").join("");
};

const sumNumbers = numbers => {
   const reducer = (accumulator, currentValue) => accumulator + currentValue;
return numbers.reduce(reducer)
//still not 100% with reduce, I understand what is dynamically happening but cant figure out how the syntax reflects that.
};

const sortByLastLetter = strings => {
  // sorry Miguel, I spent a while on this but ran out of time - I think this one would involve splitting the array and then comparing the last characters of each word using charCodeAt() before using Sort() on the results in some way?
};

module.exports = {
  getNthElement,
  arrayToCSVString,
  csvStringToArray,
  addToArray,
  addToArray2,
  removeNthElement,
  numbersToStrings,
  uppercaseWordsInArray,
  reverseWordsInArray,
  onlyEven,
  removeNthElement2,
  elementsStartingWithAVowel,
  removeSpaces,
  sumNumbers,
  sortByLastLetter
};
