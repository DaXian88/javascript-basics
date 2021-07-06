const createPerson = (name, age) => {
  const person = {
	name: name,
	age: age,
}
return person
};

const getName = object => {
  return object.name
};

const getProperty = (property, object) => {
	const personDetails = object 
  	return personDetails.age  

/*I have no idea how the above can work but {const person = object 
    return person.property} doesnt work? it should just substitute "age" into property but I get undefined each time?? I'm sure i'm just missing something obvious! */ 
};

const hasProperty = (property, object) => {
  if(object.hasOwnProperty(property) === true){
	return true}
else {
	return false
}
};

const isOver65 = person => {
const personDetails = person
    if(personDetails.age > 65) {
return true
}
 else {
	return false
}

};

const getAges = people => {
return people.map(person => person.age)
};

const findByName = (name, people) => {
  return people.find(person => person.name == name )
};

const findHondas = cars => {
  return cars.filter(maker => maker.manufacturer === "Honda");
};

const averageAge = people => {
 let numberOfPeople = people.length
 let Ages = people.map(person => person.age)
 let totalAges = Ages.reduce((a, b) => a + b, 0)
 let averageAge = totalAges / numberOfPeople
 return averageAge
//I feel like this is a long winded way of doing it :/
};

const createTalkingPerson = (name, age) => {
  return {
	name: name,
	age: age,
	Introduce: function greet(newName) {
	return 'Hi' + newName + ', my name is' + name + 'and I am' + age + '!';
	}
     }

// got kinda lost here!
};

module.exports = {
  createPerson,
  getName,
  getProperty,
  hasProperty,
  isOver65,
  getAges,
  findByName,
  findHondas,
  averageAge,
  createTalkingPerson
};
