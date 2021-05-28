import dyndash from './src/dyndash.mjs'

const uppercase = await dyndash(['foo'], 'FOO');
console.info(uppercase('I should be uppercase'));

const makeItUniq = await dyndash([[1, 1, 1, 2, 2, 3, 3]], [1, 2, 3]);
console.info(makeItUniq([5, 5, 5, 5]));

// not sure what camel, kebab or snake case is? No longer a problem
const thatCaseINeed = await dyndash(['who can remeber that'], 'whoCanRemeberThat');
console.info(thatCaseINeed('It is that easy!'));