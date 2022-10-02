/* Fill in the object constructor with the following methods below: */

getFirstName()
getLastName()
getFullName()
setFirstName(first)
setLastName(last)
setFullName(firstAndLast)

const Person = function (fullName) {
	this.getFirstName = function () {
		return fullName.split(' ')[0]
	}

	this.getLastName = function () {
		return fullName.split(' ')[1]
	}

	this.getFullName = function () {
		return fullName
	}

	this.setFirstName = function (name) {
		fullName = name + ' ' + fullName.split(' ')[1]
	}

	this.setLastName = function (name) {
		fullName = fullName.split(' ')[0] + ' ' + name
	}

	this.setFullName = function (name) {
		fullName = name
	}
}

const bob = new Person('Bob Ross')
console.log(bob.getFullName())