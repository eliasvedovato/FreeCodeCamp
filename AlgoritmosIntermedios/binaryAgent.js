/* Return an English translated sentence of the passed binary string.

The binary string will be space separated. */

function binaryAgent(str) {
	var biString = str.split(' ')
	var uniString = []

	/*using the radix (or base) parameter in parseInt, we can convert 
    the binary number to a decimal number while simultaneously 
    converting to a char*/

	for (var i = 0; i < biString.length; i++) {
		uniString.push(String.fromCharCode(parseInt(biString[i], 2)))
	}

	return uniString.join('')
}

// test here
binaryAgent(
	'01000001 01110010 01100101 01101110 00100111 01110100 00100000 01100010 01101111 01101110 01100110 01101001 01110010 01100101 01110011 00100000 01100110 01110101 01101110 00100001 00111111'
)

function binaryAgent(str) {
	return String.fromCharCode(
        // We can use String.fromCharCode() to convert each ASCII 
        // number into the corresponding character
		...str.split(' ').map(function (char) {
			return parseInt(char, 2)
		})
	)
}

// test here
binaryAgent(
	'01000001 01110010 01100101 01101110 00100111 01110100 00100000 01100010 01101111 01101110 01100110 01101001 01110010 01100101 01110011 00100000 01100110 01110101 01101110 00100001 00111111'
)

const binaryAgent = str =>
	str.replace(/\d+./g, char => String.fromCharCode(`0b${char}`))
       
binaryAgent("01000001 01110010 01100101 01101110 00100111 01110100 00100000 01100010 01101111 01101110 01100110 01101001 01110010 01100101 01110011 00100000 01100110 01110101 01101110 00100001 00111111");