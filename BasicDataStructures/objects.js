/* At their most basic, objects are just collections of key-value pairs. In other words, they are 
pieces of data (values) mapped to unique identifiers called properties (keys) */

const tekkenCharacter = {
	player: 'Hwoarang',
	fightingStyle: 'Tae Kwon Doe',
	human: true,
}

// If you want to add an additional property, such as "origin", it can be done by assigning origin to the object:

tekkenCharacter.origin = 'South Korea'

// Hwoarang also had distinct orange hair. You can add this property with bracket notation by doing:

tekkenCharacter['hair color'] = 'dyed orange'

/* 

Bracket notation is required if your property has a space in it or if you want to use a variable to name the property. 
In the above case, the property is enclosed in quotes to denote it as a string and will be added exactly as shown. 
Without quotes, it will be evaluated as a variable and the name of the property will be whatever value the variable is. */

const eyes = 'eye color'

tekkenCharacter[eyes] = 'brown'

// Modify an Object Nested Within an Object

let nestedObject = {
	id: 28802695164,
	date: 'December 31, 2016',
	data: {
		totalUsers: 99,
		online: 80,
		onlineStatus: {
			active: 67,
			away: 13,
			busy: 8,
		},
	},
}

/* While structures can quickly become complex, we can still use the same notations to access the information we need. 
To assign the value 10 to the busy property of the nested onlineStatus object, we use dot notation to reference the property: */

nestedObject.data.onlineStatus.busy = 10

/* Bracket notation is very useful because sometimes object properties are not known before runtime or we need to access 
them in a more dynamic way. */

let foods = {
	apples: 25,
	oranges: 32,
	plums: 28,
	bananas: 13,
	grapes: 35,
	strawberries: 27,
}

function checkInventory(scannedItem) {
	// Only change code below this line
	return foods[scannedItem]
	// Only change code above this line
}

console.log(checkInventory('apples'))

// Here we will see how we can remove a key-value pair from an object.

delete foods.strawberries
delete foods.plums
delete foods.oranges

/* But what if we just wanted to know if an object has a specific property? JavaScript provides us with two different ways 
to do this. One uses the hasOwnProperty() method and the other uses the in keyword.  */

users.hasOwnProperty('Alan')
'Alan' in users

// Both of these would return true

/* Finish writing the function so that it returns true if the object passed to it contains all four names, Alan, Jeff, Sarah 
and Ryan and returns false otherwise. */

let users = {
	Alan: {
		age: 27,
		online: true,
	},
	Jeff: {
		age: 32,
		online: true,
	},
	Sarah: {
		age: 48,
		online: true,
	},
	Ryan: {
		age: 19,
		online: true,
	},
}

function isEveryoneHere(userObj) {
	// Only change code below this line
	return ['Alan', 'Jeff', 'Sarah', 'Ryan'].every(name =>
		userObj.hasOwnProperty(name)
	)
	// Only change code above this line
}

/* Sometimes you may need to iterate through all the keys within an object. This requires a specific syntax in JavaScript 
called a for...in statement. */

for (let user in users) {
	console.log(user)
}

const users2 = {
	Alan: {
		online: false,
	},
	Jeff: {
		online: true,
	},
	Sarah: {
		online: false,
	},
}

function countOnline(usersObj) {
	// Only change code below this line
	let result = 0
	for (let user in usersObj) {
		if (usersObj[user].online === true) {
			result++
		}
	}
	return result
	// Only change code above this line
}

console.log(countOnline(users2))

/* We can also generate an array which contains all the keys stored in an object with the Object.keys() method. This method 
takes an object as the argument and returns an array of strings representing each property in the object. Again, there will 
be no specific order to the entries in the array. */

let users3 = {
	Alan: {
		age: 27,
		online: false,
	},
	Jeff: {
		age: 32,
		online: true,
	},
	Sarah: {
		age: 48,
		online: false,
	},
	Ryan: {
		age: 19,
		online: true,
	},
}

function getArrayOfUsers(obj) {
	// Only change code below this line
	return Object.keys(obj)
	// Only change code above this line
}

console.log(getArrayOfUsers(users3))

/* Take a look at the object we've provided in the code editor. The user object contains three keys. The data key contains five 
keys, one of which contains an array of friends. From this, you can see how flexible objects are as data structures. We've 
started writing a function addFriend. Finish writing it so that it takes a user object and adds the name of the friend argument 
to the array stored in user.data.friends and returns that array. */

let user = {
	name: 'Kenneth',
	age: 28,
	data: {
		username: 'kennethCodesAllDay',
		joinDate: 'March 26, 2016',
		organization: 'freeCodeCamp',
		friends: ['Sam', 'Kira', 'Tomo'],
		location: {
			city: 'San Francisco',
			state: 'CA',
			country: 'USA',
		},
	},
}

function addFriend(userObj, friend) {
	// Only change code below this line
	userObj.data.friends.push(friend)
	return userObj.data.friends
	// Only change code above this line
}

console.log(addFriend(user, 'Pete'))