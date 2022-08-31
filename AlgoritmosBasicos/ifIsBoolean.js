/* Comprueba si el valor está clasificado como booleano primitivo. 
Devuelve true o false. */

function booWho(bool) {
	return typeof bool === 'boolean'
}

booWho(null)