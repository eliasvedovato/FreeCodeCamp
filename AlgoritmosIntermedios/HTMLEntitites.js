function convertHTML(str) {
	// Split by character to avoid problems.

	var temp = str.split('')

	// Since we are only checking for a few HTML elements, use a switch

	for (var i = 0; i < temp.length; i++) {
		switch (temp[i]) {
			case '<':
				temp[i] = '&lt;'
				break
			case '&':
				temp[i] = '&amp;'
				break
			case '>':
				temp[i] = '&gt;'
				break
			case '"':
				temp[i] = '&quot;'
				break
			case "'":
				temp[i] = '&apos;'
				break
		}
	}

	temp = temp.join('')
	return temp
}

//test here
convertHTML('Dolce & Gabbana')

function convertHTML(str) {
	// Use Object Lookup to declare as many HTML entities as needed.
	const htmlEntities = {
		'&': '&amp;',
		'<': '&lt;',
		'>': '&gt;',
		'"': '&quot;',
		"'": '&apos;',
	}
	//Use map function to return a filtered str with all entities changed automatically.
	return str
        /* Split the original string by characters and use map to 
        check for the changed html entity or use the same one */
		.split('')
		.map(entity => htmlEntities[entity] || entity)
		.join('')
}

// test here
convertHTML('Dolce & Gabbana')

function convertHTML(str) {
	var characters = [/&/g, /</g, />/g, /\"/g, /\'/g]
	var entities = ['&amp;', '&lt;', '&gt;', '&quot;', '&apos;']

	for (var i = 0; i < characters.length; i++) {
		str = str.replace(characters[i], entities[i])
	}

	return str
}

function convertHTML(str) {
	var expressions = {
		'&': '&amp;',
		'<': '&lt;',
		'>': '&gt;',
		'"': '&quot;',
		"'": '&apos;',
	}

	for (var i in expressions) {
		str = str.replace(new RegExp(i, 'g'), expressions[i])
	}

	return str
}

convertHTML('Dolce & Gabbana')