const negate = a => {
  if (a) {
	return false
}
  else {
	return true
}		
};

const both = (a, b) => {
  if (a == true && b == true) {
	return true
}
  else{
	return false
}
};

const either = (a, b) => {
  if (a == true || b == true) {
	return true
}
  else {
	return false
}

};

const none = (a, b) => {
  if(a !== true && b !== true) {
	return true
}
  else {
	return false
}
};

const one = (a, b) => {
  if (a == true && b !== true) {
	return true
}
 else if (a !== true && b == true) {
	return true
}
 else {
	return false
}

};

const truthiness = a => {
  if (a) {
	return true
}
  else {
	return false
}

};

const isEqual = (a, b) => {
  if (a == b) {
	return true
}
  else{
	return false
}
};

const isGreaterThan = (a, b) => {
  if (a > b) {
	return true
}
  else {
	return false
}
};

const isLessThanOrEqualTo = (a, b) => {
  if (a <= b) {
	return true
}
else {
	return false
}
};

const isOdd = a => {
  if (Number.isInteger(a / 2) == false) {
	return true
}
  else {
	return false
}
};

const isEven = a => {
  return Number.isInteger(a / 2)
};

const isSquare = a => {
  return Number.isInteger(Math.sqrt(a))
};

const startsWith = (char, string) => {
  if (string[0] === char) {
	return true
}
  else {
	return false
}
};

const containsVowels = string => {
   for (let i = 0; i <= string.length; i++){

       if(string.includes('a') || string.includes('A') || string.includes('e') || string.includes('E') || string.includes('I') || string.includes('i') || string.includes('o') || string.includes('O') || string.includes('u') || string.includes('U')) {
        return true}
else {
        return false
    }
        
}
};

const isLowerCase = string => {
  if(string == string.toLowerCase()) {
    return true
}
    else{
        return false
}
};

module.exports = {
  negate,
  both,
  either,
  none,
  one,
  truthiness,
  isEqual,
  isGreaterThan,
  isLessThanOrEqualTo,
  isOdd,
  isEven,
  isSquare,
  startsWith,
  containsVowels,
  isLowerCase
};
