// CommonJS, every file is module (by default)
// Modules - Encapsulated Code (only share minimum)
//everytime you create your own module, you will start with ./
const names = require('./04-names')
const sayHi = require('./05-utils')
const data = require('./06-alternative-flavor')
require('./07-mind-grenade')
sayHi('susan')
sayHi(names.john)
sayHi(names.peter)

// other way is to  destructure : const {john} = require('./04-names)
